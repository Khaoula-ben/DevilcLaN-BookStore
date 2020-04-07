
import { IsNotEmpty, IsNumber, IsInt, IsDecimal } from 'class-validator';

export class AuthorDto {

    @IsNotEmpty()
    author_name: string;


}