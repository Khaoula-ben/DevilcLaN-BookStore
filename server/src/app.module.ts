import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './Config/typeorm.config';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), BooksModule, UsersModule],
})
export class AppModule { }
