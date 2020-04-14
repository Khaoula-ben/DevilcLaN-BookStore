import { Injectable, InternalServerErrorException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../users/users.service';
import { UserRepository } from '../users/user.repository';
import { AuthDto } from 'src/dto/auth.dto';
import { User } from 'src/users/user.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/dto/user.dto';

@Injectable()
export class AuthService {

    constructor(private UserService: UsersService, private jwtService: JwtService, ) {

    }


    async signUp(authDto: AuthDto): Promise<User> {
        // const user = await this.UserService.getUserByName(authDto.username);
        // const { username, password } = authDto;
        // console.log('============>', username, password);
        // const user = new User();
        // user.username = username;
        // user.password = await this.hashPassword(password);
        // console.log('============>', user.username, user.password);
        // console.log('============>', user);

        // try {
        //     await user.save();
        // } catch (err) {
        //     if (err === '23505') { //duplicate username
        //         throw new ConflictException('Username Alredy exists')
        //     }
        //     else {
        //         throw new InternalServerErrorException();
        //     }
        // }

        const result = await this.UserService.createUser(authDto);
        console.log('============> result ', result);
        return result

    }

    async signIn(authDto: AuthDto): Promise<any> {
        const { username, password } = authDto;
        console.log('============>   ff', username);
        console.log('============>  fff', password);
        const user = await this.UserService.getUserByName(username);
        console.log('============>', user);


        if (!(user && user.validatePassword(password)))
            return 'Invalid authentification !!';

        const payload = { username };
        const accessToken = await this.jwtService.sign(payload);
        return (({
            id: user.id,
            token: accessToken
        }))






    }

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);

    }

}
