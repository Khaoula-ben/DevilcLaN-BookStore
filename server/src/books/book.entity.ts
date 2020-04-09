
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, ManyToMany, ManyToOne, JoinTable, JoinColumn } from "typeorm";
import { User } from "src/users/user.entity";
import { Category } from "src/category/category.entity";
import { Author } from "src/author/author.entity";

@Entity()
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    book_name: string;
    @Column()
    book_page: number;
    @Column({ nullable: false, type: "text", unique: true })
    bookisbn: string;
    @Column('decimal')
    book_price: number;
    @Column({ nullable: true })
    book_qauntity: number;
    @ManyToMany(type => Author, Author => Author.books)
    @JoinTable()
    authors: Author[];
    @ManyToOne(type => Category, Category => Category.id)
    categories: Category[];
    @ManyToMany(type => User, User => User.id, { eager: true })
    @JoinTable()
    user: User;
}