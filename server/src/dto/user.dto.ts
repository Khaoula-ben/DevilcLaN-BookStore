
import { IsNotEmpty, IsNumber, IsInt, IsDecimal, IsEmail, IsPhoneNumber, IsMobilePhone, IsAlpha } from 'class-validator';

export class UserDto {

    first_name: string;

    last_name: string;

    adress: string;

    phone: number;
    @IsEmail()
    email: string;

    // @IsNotEmpty()
    username: string;
    // @IsNotEmpty()
    password: string;

}