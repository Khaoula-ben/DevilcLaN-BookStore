
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    book_name: string;
    @Column()
    book_page: number;
    @Column()
    book_price: number;

}