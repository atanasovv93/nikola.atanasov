// src/movies/movies.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike, MoreThanOrEqual, LessThanOrEqual } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = this.movieRepository.create(createMovieDto);
    return this.movieRepository.save(movie);
  }

  async findAll(query: {
    genre?: string;
    minRating?: number;
    maxDuration?: number;
    title?: string;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
    page: number;
    limit: number;
  }): Promise<{ data: Movie[]; total: number }> {
    const {
      genre,
      minRating,
      maxDuration,
      title,
      sortBy = 'releaseYear',
      sortOrder = 'DESC',
      page = 1,
      limit = 10,
    } = query;

    const where = {};

    if (genre) Object.assign(where, { genre });
    if (minRating) Object.assign(where, { rating: MoreThanOrEqual(minRating) });
    if (maxDuration) Object.assign(where, { duration: LessThanOrEqual(maxDuration) });
    if (title) Object.assign(where, { title: ILike(`%${title}%`) });

    const [data, total] = await this.movieRepository.findAndCount({
      where,
      order: { [sortBy]: sortOrder },
      take: limit,
      skip: (page - 1) * limit,
    });

    return { data, total };
  }

  async findOne(id: string): Promise<Movie> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) throw new NotFoundException(`Movie with ID ${id} not found`);
    return movie;
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const movie = await this.findOne(id);
    Object.assign(movie, updateMovieDto);
    return this.movieRepository.save(movie);
  }

  async remove(id: string): Promise<void> {
    const result = await this.movieRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
  }
}
