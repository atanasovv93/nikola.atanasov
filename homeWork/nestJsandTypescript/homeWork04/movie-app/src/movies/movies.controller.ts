// src/movies/movies.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Patch,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { MovieService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new movie' })
  @ApiResponse({ status: 201, description: 'The movie has been successfully created.' })
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all movies with optional filters' })
  @ApiQuery({ name: 'genre', required: false })
  @ApiQuery({ name: 'minRating', required: false, type: Number })
  @ApiQuery({ name: 'maxDuration', required: false, type: Number })
  @ApiQuery({ name: 'title', required: false })
  @ApiQuery({ name: 'sortBy', required: false })
  @ApiQuery({ name: 'sortOrder', required: false, enum: ['ASC', 'DESC'], default: 'DESC' })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  findAll(
    @Query('genre') genre?: string,
    @Query('minRating') minRating?: number,
    @Query('maxDuration') maxDuration?: number,
    @Query('title') title?: string,
    @Query('sortBy') sortBy?: string,
    @Query('sortOrder') sortOrder: 'ASC' | 'DESC' = 'DESC',
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ) {
    return this.movieService.findAll({
      genre,
      minRating: minRating ? Number(minRating) : undefined,
      maxDuration: maxDuration ? Number(maxDuration) : undefined,
      title,
      sortBy,
      sortOrder,
      page: Number(page),
      limit: Number(limit),
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get movie by ID' })
  @ApiParam({ name: 'id', description: 'UUID of the movie' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.movieService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a movie by ID' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    return this.movieService.update(id, updateMovieDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a movie by ID' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.movieService.remove(id);
  }
}
