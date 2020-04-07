import { Controller, Get, Post, Patch, Delete, Param, Body, ValidationPipe, UsePipes, ParseIntPipe } from '@nestjs/common';
import { Author } from './author.entity';
import { AuthorDto } from 'src/dto/author.dto';
import { AuthorService } from './author.service'


@Controller('author')
export class AuthorController {

    constructor(private AuthorService: AuthorService) { }

    @Get()
    getAuthors(): Promise<Author[]> {
        return this.AuthorService.getAuthors()
    }

    @Get('/:id')
    getAuthorById(@Param('id', ParseIntPipe) id: number): Promise<Author> {
        return this.AuthorService.getAuthorById(id);
    }
    @Post()
    @UsePipes(ValidationPipe)
    createAuthor(@Body() createAuthorDto: AuthorDto): Promise<Author> {
        return this.AuthorService.createAuthor(createAuthorDto);
    }

    @Patch('/:id/update')
    updateAuthor(@Param('id', ParseIntPipe) id: number, @Body() updateAuthorDto: AuthorDto): Promise<void> {
        return this.AuthorService.updateAuthor(id, updateAuthorDto);
    }

    @Delete('/:id')
    deleteAuthor(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.AuthorService.deleteAuthor(id);
    }


}
