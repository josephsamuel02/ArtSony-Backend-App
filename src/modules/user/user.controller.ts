import { Controller, Post } from '@nestjs/common/decorators';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signin')
  signin() {
    return ' this.authService.login()';
  }

  @Post('singup')
  signup() {
    return 'this.authService.signup()';
  }
}
