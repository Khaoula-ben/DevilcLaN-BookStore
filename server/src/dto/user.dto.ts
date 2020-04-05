
import { IsNotEmpty, IsNumber, IsInt, IsDecimal, IsEmail, IsPhoneNumber, IsMobilePhone, IsAlpha } from 'class-validator';

export class UserDto {

    @IsNotEmpty()
    first_name: string;
    @IsNotEmpty()
    last_name: string;
    @IsNotEmpty()
    adress: string;
    @IsNotEmpty()
    phone: number;
    @IsNotEmpty()
    @IsEmail()
    email: string;


}