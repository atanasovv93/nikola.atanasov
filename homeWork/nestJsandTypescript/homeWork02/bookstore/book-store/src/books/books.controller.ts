import { Controller, Get, Post, Put, Delete, Param, Body, Query, HttpCode, HttpException, HttpStatus } from '@nestjs/common';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
}

@Controller('books')
export class BookController {
  private books: Book[] = [
    { id: 1, title: 'Siljan the Stork Flies Over Macedonia Once Again', author: 'Risto Lazarov', price: 20 },
    { id: 2, title: 'Pirey', author: 'Petre M. Andreevski', price: 23 },
    { id: 3, title: 'Black Seed', author: 'Tashko Geogrievski', price: 25 },
    { id: 4, title: 'White Dawns', author: 'Kocho Racin', price: 18 },
  ];

  @Get()
  getAll(
    @Query('minPrice') minPrice?: number,
    @Query('author') author?: string,
    @Query('title') title?: string,
    @Query('id') _id?: string
  ): Book[] {
    let result = this.books;

    if (minPrice) {
      result = result.filter(book => book.price >= +minPrice);
    }

    if (author) {
      result = result.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    }

    if (title) {
        result = result.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
      }
  
    return result;
  }

  @Get('/:id')
  getOneByParam(@Param('id') id: string): Book {
    const numericId = Number(id);
    const book = this.books.find(book => book.id === numericId);
  
    if (!book) {
      throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
    }
  
    return book;
  }
  
  @Post()
  @HttpCode(201)
  create(@Body() book: Book): { message: string, book: Book } {
    this.books.push(book);
    return { message: 'Book created successfully', book };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() book: Book): { message: string, book?: Book } {
    const index = this.books.findIndex(b => b.id === +id);
    if (index !== -1) {
      this.books[index] = book;
      return { message: 'Book updated successfully', book };
    }
    return { message: 'Book not found' };
  }

  @Delete(':id')
  @HttpCode(200)
  remove(@Param('id') id: string): { message: string } {
    const initialLength = this.books.length;
  
    this.books = this.books.filter(book => book.id !== +id);
  
    if (this.books.length === initialLength) {
      throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
    }
  
    return { message: 'Book deleted successfully' };
  }
  
}
