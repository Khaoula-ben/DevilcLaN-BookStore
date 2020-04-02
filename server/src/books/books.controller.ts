import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe, Body, Delete, Patch } from '@nestjs/common';
import { Book } from './book.entity';
import { BooksService } from './books.service';
import { createBookDto } from './../dto/create-book.dto';

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService) { }


    // @Get()
    // gestBooks(): Promise<Book[]> {

    //     return
    // }


    @Get('/:id')
    getBookById(@Param('id') id: number): Promise<Book> {
        console.log('getBookById', id);
        return this.booksService.getBookById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBook(@Body() createBookDto: createBookDto): Promise<Book> {
        console.log('createBook');
        return this.booksService.createBook(createBookDto);
    }

    @Patch('/:id/update')
    updateBook(@Param('id') id: number, bookdto: createBookDto): Promise<Book> {
        return this.booksService.updateBook(id, bookdto);
    }
    @Delete('/:id')
    deleteBook(@Param('id', ParseIntPipe) id: number): Promise<void> {
        console.log('DeleteBook', id);
        return this.booksService.deleteBook(id);
    }
}
