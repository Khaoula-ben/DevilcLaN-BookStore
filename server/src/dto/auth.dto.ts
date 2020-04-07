
import { IsNotEmpty, IsNumber, IsInt, IsDecimal } from 'class-validator';

export class AuthDto {

    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    password: string;
}