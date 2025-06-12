// src/movies/entities/movie.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Genre {
  ACTION = 'action',
  COMEDY = 'comedy',
  DRAMA = 'drama',
  HORROR = 'horror',
  SCI_FI = 'sci_fi',
  ROMANCE = 'romance',
  DOCUMENTARY = 'documentary',
  ANIMATION = 'animation',
  THRILLER = 'thriller',
  FANTASY = 'fantasy',
}

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ name: 'release_year', type: 'int' })
  releaseYear: number;

  @Column({ type: 'enum', enum: Genre })
  genre: Genre;

  @Column({ type: 'int' })
  duration: number;

  @Column({ type: 'float' })
  rating: number;

  @Column({ name: 'poster_url', nullable: true })
  posterUrl?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
