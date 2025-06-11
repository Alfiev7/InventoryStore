import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUserByEmail(@Query('email') email: string) {
    if (!email) {
      return this.usersService.getAllusers();
    } else return this.usersService.getUserByEmail(email);
  }

  @Post()
  createUser(@Body() userData: any) {
    return this.usersService.createUser(userData);
  }
}
