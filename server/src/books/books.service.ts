import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from './book.repository';
import { Book } from './book.entity';
import { createBookDto } from './../dto/create-book.dto';

@Injectable()
export class BooksService {

    constructor(@InjectRepository(BookRepository)
    private BookRepository: BookRepository,
    ) { }

    async getBookById(id: number): Promise<Book> {
        const book = await this.BookRepository.findOne(id);
        if (!book)
            throw new NotFoundException(`The book of ID "${id}" is not found `);
        else
            return book;
    }
    async  createBook(createBookDto: createBookDto): Promise<Book> {
        console.log('createBookDto ===> ', createBookDto)
        return await this.BookRepository.cerateBook(createBookDto);
    }

    async updateBook(id: number, bookDto: createBookDto): Promise<Book> {
        const newBook = await this.getBookById(id);
        console.log('id ===> ', id)
        console.log('createBookDto ===> ', bookDto)
        const { book_name, book_page, book_price } = bookDto;
        newBook.book_name = book_name;
        newBook.book_page = book_page;
        newBook.book_price = book_price;
        await newBook.save();
        return newBook;
    }

    async  deleteBook(id: number): Promise<void> {
        const result = await this.BookRepository.delete(id);
        if (result.affected === 0)
            throw new NotFoundException(`Task with ID "${id}" not found`);
    }

}
