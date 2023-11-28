import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './typeorm/entities/user';
import { usersController } from './users.controller';

@Module({
  imports:[TypeOrmModule.forFeature([user])],
  controllers:[usersController],
  providers: [UsersService],
  exports: [UsersService],

})
export class UsersModule {}
