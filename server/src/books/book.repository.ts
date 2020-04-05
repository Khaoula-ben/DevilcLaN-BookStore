import { Repository, EntityRepository } from "typeorm";
import { Book } from './book.entity';
import { BookDto } from './../dto/book.dto';


@EntityRepository(Book)
export class BookRepository extends Repository<Book>{




}