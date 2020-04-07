import { Injectable, InternalServerErrorException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../users/users.service';
import { UserRepository } from '../users/user.repository';
import { AuthDto } from 'src/dto/auth.dto';
import { User } from 'src/users/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {

    constructor(private UserService: UsersService) { }


    async signUp(authDto: AuthDto): Promise<void> {
        // const user = await this.UserService.getUserByName(authDto.username);
        const { username, password } = authDto;

        const user = new User();
        user.username = username;
        user.username = await this.hashPassword(password)
        const pwd = await user.validatePassword(user.password);

        try {
            await user.save();
        } catch (err) {
            if (err === '23505') {
                throw new ConflictException('Username Alredy exists')
            }
            else {
                throw new InternalServerErrorException();
            }
        }

    }

    async signIn(authDto: AuthDto): Promise<string> {
        const { username, password } = authDto;
        const user = await this.UserService.getUserByName(username);
        if (user && user.validatePassword(password))
            return user.username;
        else
            return null;
    }

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);

    }

}
