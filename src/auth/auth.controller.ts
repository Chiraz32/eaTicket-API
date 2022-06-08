import { Body, Controller, Post } from '@nestjs/common';
import { UserSubscribeDto } from './dto/user-subscribe.dto';
import { UserEntity } from '../user/entity/user.entity';
import { AuthService } from './auth.service';
import { LoginCredentialsDto } from './dto/login-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  register(@Body() userData: UserSubscribeDto): Promise<Partial<UserEntity>> {
    return this.authService.register(userData);
  }
  @Post()
  login(
    @Body() credentials: LoginCredentialsDto,
  ): Promise<Partial<UserEntity>> {
    return this.authService.login(credentials);
  }
}
