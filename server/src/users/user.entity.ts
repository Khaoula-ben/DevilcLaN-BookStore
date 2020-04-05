import { BaseEntity, Column, PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm"
import { Book } from "src/books/book.entity";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column()
    adress: string;
    @Column()
    phone: number;
    @Column()
    email: string;
    @OneToMany(type => Book, book => book.id)
    id_book: number;

}