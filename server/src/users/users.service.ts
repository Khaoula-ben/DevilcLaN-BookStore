import { Injectable, Get, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { UserDto } from 'src/dto/user.dto';
import { AuthDto } from './../dto/auth.dto';
import { FindOptionsUtils } from 'typeorm';


@Injectable()
export class UsersService {

    constructor(@InjectRepository(UserRepository)
    private UserRepository: UserRepository, ) { }
    //********************************************************************************************** */
    async getUserByName(username: string): Promise<User> {
        console.log('===> ', username)
        console.log('===> ', this.UserRepository.findOne({ username }))
        return await this.UserRepository.findOne({ username });
    }
    //************************************************************************************************* */
    async getUsers(): Promise<User[]> {
        return await this.UserRepository.find();
    }

    async getUserById(id: number): Promise<User> {
        const user = await this.UserRepository.findOne(id);
        if (!user)
            throw new NotFoundException(`The user with ID "${id}" is not found `);
        else
            return user;
    }

    async createUser(createUserDto: UserDto): Promise<User> {
        const user = this.UserRepository.create(createUserDto);
        return await this.UserRepository.save(user);
    }

    async updateUserInfos(id: number, updateUserDto: UserDto): Promise<void> {
        if (updateUserDto) {
            const result = await this.UserRepository.update(id, updateUserDto);
            if (result.affected === 0)
                throw new NotFoundException(`User with ID "${id}" not found`);
        }
    }

    async deleteUser(id: number): Promise<void> {
        const result = await this.UserRepository.delete(id);
        if (result.affected === 0)
            throw new NotFoundException(`User with ID "${id}" not found`);
    }

}
