import { Repository, EntityRepository } from "typeorm";
import { Book } from './book.entity';
import { BookDto } from './../dto/book.dto';
import { User } from "src/users/user.entity";


@EntityRepository(Book)
export class BookRepository extends Repository<Book>{

    async  buyBook(createBookDto: BookDto, user: User): Promise<Book> {

        const { book_name, book_page, book_price, bookisbn, book_qauntity } = createBookDto;
        const book = new Book;
        book.book_name = book_name;
        book.book_page = book_page;
        book.book_price = book_price;
        book.bookisbn = bookisbn;
        book.book_qauntity = book_qauntity;
        book.user = user;

        await book.save();
        return book;
    }


}