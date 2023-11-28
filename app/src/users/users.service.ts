import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from './typeorm/entities/user';
import { EntityManager, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(user)
        private readonly userRepository: Repository<user>,
        private readonly entityManager: EntityManager
    ) { }

    async insertUser(userDTO: UserDto) {

        const userData = new user(userDTO);
        await this.entityManager.save(userData);

    }

    async findUserByID(username: string) {
        const user = this.userRepository.findOneBy({ username })
        return user;
    }
}
