import { TypeOrmModuleOptions } from '@nestjs/typeorm';


export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'bookstore3',
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    synchronize: true,
}