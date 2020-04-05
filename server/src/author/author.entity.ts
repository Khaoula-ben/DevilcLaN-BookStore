import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Book } from "src/books/book.entity";

@Entity()
export class Author extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    auth_name: string;
    @OneToMany(type => Book, book => book.id)
    id_book: number;


}