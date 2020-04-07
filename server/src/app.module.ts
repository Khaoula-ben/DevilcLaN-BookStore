import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './Config/typeorm.config';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { AuthorModule } from './author/author.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), BooksModule, UsersModule, AuthorModule, CategoryModule, AuthModule],
})
export class AppModule { }
