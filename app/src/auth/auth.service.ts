import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService
    ) { }

    async signIn(username:string,pass:string){

        const user = await this.userService.findUserByID(username)

        if(user.password !== pass){
            throw new UnauthorizedException();
        }

        const {password, ...result} = user

        return result;
    }

}
