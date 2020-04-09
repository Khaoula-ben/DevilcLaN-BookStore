import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookRepository } from './book.repository';
import { AuthModule } from 'src/auth/auth.module';
@Module({
    imports: [TypeOrmModule.forFeature([BookRepository]),
        AuthModule,
    ],
    controllers: [BooksController],
    providers: [BooksService],
})
export class BooksModule { }
