import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from './book.repository';
import { Book } from './book.entity';
import { BookDto } from './../dto/book.dto';



@Injectable()
export class BooksService {

    constructor(@InjectRepository(BookRepository)
    private BookRepository: BookRepository,
    ) { }

    async getBooks(): Promise<Book[]> {
        return await this.BookRepository.find();
    }

    async getBookById(id: number): Promise<Book> {
        const book = await this.BookRepository.findOne(id);
        if (!book)
            throw new NotFoundException(`The book with ID "${id}" is not found `);
        else
            return book;
    }

    async  createBook(createBookDto: BookDto): Promise<Book> {
        const book = this.BookRepository.create(createBookDto);
        return await this.BookRepository.save(book);
    }

    async updateBook(id: number, updateBookDto: BookDto): Promise<void> {
        const result = await this.BookRepository.update(id, updateBookDto);
        if (result.affected === 0)
            throw new NotFoundException(`Book with ID "${id}" not found`);

    }

    async  deleteBook(id: number): Promise<void> {
        const result = await this.BookRepository.delete(id);
        if (result.affected === 0)
            throw new NotFoundException(`Book with ID "${id}" not found`);
    }

}
