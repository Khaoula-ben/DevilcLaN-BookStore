import { BaseEntity, Column, PrimaryGeneratedColumn, Entity, OneToMany, ManyToMany, BeforeInsert } from "typeorm";
import * as bcrypt from 'bcryptjs';
@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false, unique: true })
    username: string;
    @Column({ type: 'varchar', nullable: false })
    password: string;

    @Column({ type: "varchar", length: "50" })
    first_name: string;
    @Column({ type: "varchar", length: "50" })
    last_name: string;
    @Column({ type: "text", })
    adress: string;
    @Column()
    phone: number;
    @Column({ type: "text", unique: true })
    email: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);

    }

    async validatePassword(pwd: string): Promise<boolean> {
        console.log('============> ', pwd)
        console.log('============> ', this.password)
        return await bcrypt.compare(pwd, this.password);
    }

}