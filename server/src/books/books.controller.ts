import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe, Body, Delete, Patch, UseGuards } from '@nestjs/common';
import { Book } from './book.entity';
import { BooksService } from './books.service';
import { BookDto } from './../dto/book.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/user.entity';
import { GestUser } from 'src/auth/gest-user.decorator';

@Controller('books')
@UseGuards(AuthGuard())
export class BooksController {

    constructor(private booksService: BooksService) { }

    @Get()
    getBooks(): Promise<Book[]> {
        return this.booksService.getBooks();
    }

    @Get('/:id')
    getBookById(@Param('id', ParseIntPipe) id: number): Promise<Book> {
        return this.booksService.getBookById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBook(@Body() createBookDto: BookDto, @GestUser() user: User): Promise<Book> {
        return this.booksService.createBook(createBookDto, user);
    }

    @Patch('/:id/update')
    updateBook(@Param('id', ParseIntPipe) id: number, @Body() updatebookDto: BookDto): Promise<void> {
        return this.booksService.updateBook(id, updatebookDto);
    }

    @Delete('/:id')
    deleteBook(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.booksService.deleteBook(id);
    }
}
