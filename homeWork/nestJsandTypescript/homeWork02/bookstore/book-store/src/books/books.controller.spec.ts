import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './books.controller';

describe('BookController', () => {
  let controller: BookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
    }).compile();

    controller = module.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all books', () => {
    const result = controller.getAll();
    expect(result.length).toBeGreaterThan(0);
  });

  it('should return a book by id', () => {
    const book = controller.getOneByParam(':id')

    expect(book).toBeDefined();
    expect(book?.id).toBe(1);
  });

  it('should filter books by author', () => {
    const result = controller.getAll(undefined, 'nika');
    expect(result.every(b => b.author.toLowerCase().includes('nika'))).toBe(true);
  });

  it('should filter books by title', () => {
    const result = controller.getAll(undefined, 'nika');
    expect(result.every(b => b.title.toLowerCase().includes('nika'))).toBe(true);
  });

  it('should filter books by minPrice', () => {
    const result = controller.getAll(20);
    expect(result.every(b => b.price >= 20)).toBe(true);
  });
});
