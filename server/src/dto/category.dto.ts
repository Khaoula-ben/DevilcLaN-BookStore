
import { IsNotEmpty, IsNumber, IsInt, IsDecimal } from 'class-validator';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class CategoryDto {

    @IsNotEmpty()
    category_name: string;


}