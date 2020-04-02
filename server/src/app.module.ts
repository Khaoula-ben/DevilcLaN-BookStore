import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './Config/typeorm.config';
import { BooksModule } from './books/books.module';
@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), BooksModule],
})
export class AppModule { }
