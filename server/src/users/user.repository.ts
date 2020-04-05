
import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from 'src/dto/user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User>{



}