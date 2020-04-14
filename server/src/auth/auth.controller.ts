import { Controller, Post, Body, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { AuthDto } from 'src/dto/auth.dto'; import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/user.entity';



@Controller('auth')
export class AuthController {

    constructor(private AuthService: AuthService) { }

    @Post('/signup')
    signUp(@Body(ValidationPipe) authDto: AuthDto): Promise<User> {
        return this.AuthService.signUp(authDto);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) authDto: AuthDto): Promise<any> {
        return this.AuthService.signIn(authDto);
    }

}
