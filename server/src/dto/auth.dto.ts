
import { IsNotEmpty, IsNumber, IsInt, IsDecimal, IsEmail } from 'class-validator';

export class AuthDto {


    first_name: string;

    last_name: string;

    adress: string;

    phone: number;

    email: string;

    // @IsNotEmpty()
    username: string;
    // @IsNotEmpty()
    password: string;
}