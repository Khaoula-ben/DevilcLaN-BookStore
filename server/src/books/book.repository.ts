import { Repository, EntityRepository } from "typeorm";
import { Book } from './book.entity';
import { createBookDto } from './../dto/create-book.dto';


@EntityRepository(Book)
export class BookRepository extends Repository<Book>{

    async cerateBook(createBookDto: createBookDto) {
        const { book_name, book_page, book_price } = createBookDto;
        const book = new Book();
        book.book_name = book_name;
        book.book_page = book_page;
        book.book_price = book_price;
        await book.save();
        return book;
    }



}