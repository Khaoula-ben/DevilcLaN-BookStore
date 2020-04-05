import { Controller, Get, Param, ParseIntPipe, Post, ValidationPipe, UsePipes, Body, Delete, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserDto } from 'src/dto/user.dto';

@Controller('users')
export class UsersController {


    constructor(private UsersService: UsersService) { }

    @Get()
    getUsers(): Promise<User[]> {
        return this.UsersService.getUsers();
    }

    @Get('/:id')
    getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.UsersService.getUserById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: UserDto): Promise<User> {
        return this.UsersService.createUser(createUserDto);
    }

    @Patch('/:id/update')
    updateUserInfos(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UserDto): Promise<void> {
        return this.UsersService.updateUserInfos(id, updateUserDto);

    }

    @Delete('/:id')
    deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.UsersService.deleteUser(id);
    }

}
