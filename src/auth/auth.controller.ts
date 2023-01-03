import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { UserDataDto } from './dto/userData.dto';

@Controller(['auth'])
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  async signin(@Req() { user }: Request) {
    const token = await this.authService.createJwt(user);
    return token;
  }

  @Post('signup')
  async signup(@Body() dto: SignupDto) {
    const newUser: UserDataDto = await this.authService.createUser(dto);
    const token = await this.authService.createJwt(newUser);
    return token;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('protected')
  protected(@Req() req: Request) {
    return { user: req.user };
  }
}
