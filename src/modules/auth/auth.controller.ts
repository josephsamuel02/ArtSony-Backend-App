import { Body, Controller, HttpCode, Post } from '@nestjs/common/decorators';
import { CreateUserDto } from 'src/dtos/createUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(201)
  @Post('signup')
  async signup(@Body() body: CreateUserDto): Promise<any> {
    const newUser = await this.authService.createUser(body);
    return { ...newUser };
  }

  @HttpCode(200)
  @Post('login')
  async signin() {
    return this.authService.login();
  }
}
