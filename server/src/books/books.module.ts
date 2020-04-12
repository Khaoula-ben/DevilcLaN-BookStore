import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookRepository } from './book.repository';
import { AuthModule } from 'src/auth/auth.module';
import { CategoryService } from 'src/category/category.service';
import { CategoryRepository } from 'src/category/category.repository';
@Module({
    imports: [TypeOrmModule.forFeature([BookRepository, CategoryRepository]),
        AuthModule,
    ],
    controllers: [BooksController],
    providers: [BooksService,
    ],
})
export class BooksModule { }
