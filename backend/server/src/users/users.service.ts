import { Injectable } from '@nestjs/common';
import mockUsers from './mock-users.json';

let users = [...mockUsers];

type LoginStatus = 'success' | 'failed' | 'unauthorized';

@Injectable()
export class UsersService {
  loginUser(username: string, password: string): { status: LoginStatus } {
    const user = users.find(
      (u) => u.username === username && u.password === password,
    );

    const status: LoginStatus = user ? 'success' : 'unauthorized';
    return { status };
  }

  getUserByEmail(email: string) {
    return users.find((user) => user.email === email);
  }

  getAllusers() {
    return users;
  }

  createUser(userData: any) {
    let newUser = { ...userData, id: users.length + 1 };
    users.push(newUser);
    return newUser;
  }
}
