
import { IsNotEmpty, IsNumber, IsInt, IsDecimal } from 'class-validator';
import { Author } from 'src/author/author.entity';

export class BookDto {

    @IsNotEmpty()
    book_name: string;
    @IsNotEmpty()
    book_page: number;
    @IsNotEmpty()
    book_price: number;
    @IsNotEmpty()
    bookisbn: string;
    @IsNotEmpty()
    book_qauntity: number;
    @IsNotEmpty()
    category: any;
    @IsNotEmpty()
    authors: Array<Author>;

}