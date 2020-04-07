import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthDto } from 'src/dto/auth.dto';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.entity';

@Controller('auth')
export class AuthController {

    constructor(private AuthService: AuthService) { }

    @Post('/signup')
    signUp(@Body(ValidationPipe) authDto: AuthDto): Promise<void> {
        return this.AuthService.signUp(authDto);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) authDto: AuthDto): Promise<string> {
        return this.AuthService.signIn(authDto);
    }

}
