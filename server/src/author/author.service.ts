import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthorRepository } from './author.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorDto } from 'src/dto/author.dto';
import { Author } from './author.entity';

@Injectable()
export class AuthorService {


    constructor(@InjectRepository(AuthorRepository)
    private AuthorRepository: AuthorRepository,
    ) { }

    async getAuthors(): Promise<Author[]> {
        return await this.AuthorRepository.find();
    }

    async getAuthorById(id: number): Promise<Author> {
        const author = await this.AuthorRepository.findOne(id);
        if (!author)
            throw new NotFoundException(`The Author with ID "${id}" is not found `);
        else
            return author;
    }

    async  createAuthor(createAuthorDto: AuthorDto): Promise<Author> {
        const author = this.AuthorRepository.create(createAuthorDto);
        return await this.AuthorRepository.save(author);
    }

    async updateAuthor(id: number, updateAuthorDto: AuthorDto): Promise<void> {
        const result = await this.AuthorRepository.update(id, updateAuthorDto);
        if (result.affected === 0)
            throw new NotFoundException(`Author with ID "${id}" not found`);

    }

    async  deleteAuthor(id: number): Promise<void> {
        const result = await this.AuthorRepository.delete(id);
        if (result.affected === 0)
            throw new NotFoundException(`Author with ID "${id}" not found`);
    }



}
