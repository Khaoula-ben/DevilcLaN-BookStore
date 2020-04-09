import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import { Book } from "src/books/book.entity";

@Entity()
export class Author extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    author_name: string;
    @ManyToMany(type => Book, book => book.authors)
    books: Book[];

}