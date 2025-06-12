// src/movies/dto/create-movie.dto.ts
import {
  IsString,
  IsEnum,
  IsInt,
  IsOptional,
  Min,
  Max,
  IsUrl,
  Length,
} from 'class-validator';
import { Genre } from '../entities/movie.entity';

export class CreateMovieDto {
  @IsString()
  @Length(1, 255)
  title: string;

  @IsString()
  description: string;

  @IsInt()
  releaseYear: number;

  @IsEnum(Genre)
  genre: Genre;

  @IsInt()
  @Min(1)
  duration: number;

  @IsInt()
  @Min(1)
  @Max(10)
  rating: number;

  @IsOptional()
  @IsUrl()
  posterUrl?: string;
}
