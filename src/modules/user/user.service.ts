import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  login() {
    return { mes: 'i signed in' };
  }

  signup() {
    return { mes: 'i singned up' };
  }
}
