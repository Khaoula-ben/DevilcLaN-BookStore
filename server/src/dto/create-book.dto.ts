
import { IsNotEmpty, IsNumber, IsInt, IsDecimal } from 'class-validator';

export class createBookDto {

    @IsNotEmpty()
    book_name: string;
    @IsNotEmpty()
    book_page: number;
    @IsNotEmpty()
    book_price: number;

}