import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Book } from "src/books/book.entity";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    category_name: string;
    @OneToMany(type => Book, book => book.categories)
    book: Book[];


}