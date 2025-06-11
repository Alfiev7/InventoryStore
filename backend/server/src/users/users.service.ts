import { Injectable } from '@nestjs/common';
import mockUsers from './mock-users.json';

let users = [...mockUsers];

@Injectable()
export class UsersService {
  getUserByEmail(email: string) {
    return users.find((user) => user.email === email);
  }

  getAllusers() {
    return users;
  }

  createUser(userData: any) {
    let newUser = {id: users.length + 1, ...userData};
    users.push(newUser);
    return newUser;
  }
}
