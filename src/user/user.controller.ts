import {Body, Controller, Get, Post} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import {UserService} from "./user.service";


@Controller('user')
export class UserController {

    constructor(private userService : UserService ) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Get('all')
    async findAll() {
        return this.userService.getAll();
    }

}
