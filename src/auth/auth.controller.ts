import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UsuarioAutenticado } from '../usuarios/usuario.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
type RequissicaoAutenticada = {
  user: UsuarioAutenticado;
};
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() request: RequissicaoAutenticada) {
    return this.authService.login(request.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('perfil')
  perfil(@Req() request: RequissicaoAutenticada) {
    return request.user;
  }
}
