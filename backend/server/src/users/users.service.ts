import { Injectable } from '@nestjs/common';
import users from './mock-users.json';

@Injectable()
export class UsersService {
  getUserByEmail(email: string) {
    return users.find((user) => user.email === email);
  }

  getAllusers() {
    return users;
  }
}
