
import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { AuthDto } from 'src/dto/auth.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    // async signUp(authDto: AuthDto) {
    //     console.log('Auth UserRepository ===============> ', authDto);

    //     const { username, password } = authDto;
    //     const user = new User();
    //     user.username = username;
    //     user.password = password;
    //     console.log('user UserRepository ===============> ', user);

    //     await user.save();
    // }


}