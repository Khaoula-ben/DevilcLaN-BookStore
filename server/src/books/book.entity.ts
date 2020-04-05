
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, ManyToMany } from "typeorm";
import { User } from "src/users/user.entity";
import { Category } from "src/categories/category.entity";

@Entity()
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    book_name: string;
    @Column()
    book_page: number;
    @Column({ nullable: false })
    bookisbn: string;
    @Column('decimal')
    book_price: number;
    @ManyToMany(type => User, User => User.id)
    id_author: string;
    @OneToOne(type => Category)
    id_category: number;
    @ManyToMany(type => User)
    id_user: number;
}