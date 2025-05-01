import { Module } from '@nestjs/common';
import { BookController } from './books/books.controller';


@Module({
  controllers: [BookController],
  providers: [],
})
export class AppModule {}

