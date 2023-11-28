import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserDto } from "./dto/user.dto";

@Controller("user")
export class usersController {

    constructor(private readonly userService: UsersService) { }

    @Post()
    addUser(@Body() userDto: UserDto) {
        const generatedID = this.userService.insertUser(userDto)
        return generatedID;
    }

    @Get(":id")
    findUserByID(@Param('id') username: string) {
        return this.userService.findUserByID(username)
    }

}