import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from './book.repository';
import { Book } from './book.entity';
import { BookDto } from './../dto/book.dto';
import { User } from 'src/users/user.entity';
import { In } from 'typeorm';
import { CategoryService } from 'src/category/category.service';
import { CategoryRepository } from 'src/category/category.repository';
import { Category } from 'src/category/category.entity';



@Injectable()
export class BooksService {

    constructor(
        // private CategoryService: CategoryService,
        @InjectRepository(BookRepository)
        private BookRepository: BookRepository,
        @InjectRepository(CategoryRepository)
        private CategoryRepository: CategoryRepository,

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
        const category = await this.CategoryRepository.getCategoryByName(createBookDto.category);
        if (category) {
            const book = this.BookRepository.create(createBookDto);
            book.category = category.id;
            return this.BookRepository.save(book);
        }
        else {
            const newCategory = new Category;
            newCategory.category_name = createBookDto.category;
            const categoryTocreate = await this.CategoryRepository.create(newCategory)
            const category_id = categoryTocreate.save();
            //------------------- Book -------------------------------------
            const book = await this.BookRepository.create(createBookDto);
            book.category = (await category_id).id;
            return book.save();
        }
        //return await this.BookRepository.createBook(createBookDto, user);
    }

    async buyBook(buyBookDto: BookDto, user: User): Promise<Book> {
        return await this.BookRepository.buyBook(buyBookDto, user);
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
