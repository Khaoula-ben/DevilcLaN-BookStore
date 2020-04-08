
import { IsNotEmpty, IsNumber, IsInt, IsDecimal } from 'class-validator';

export class BookDto {

    @IsNotEmpty()
    book_name: string;
    @IsNotEmpty()
    book_page: number;
    @IsNotEmpty()
    book_price: number;
    @IsNotEmpty()
    bookisbn: string;

}