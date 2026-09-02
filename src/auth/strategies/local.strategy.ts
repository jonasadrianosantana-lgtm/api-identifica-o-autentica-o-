import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email', passwordField: 'senha' });
  }
  validate(email: string, senha: string) {
    const usuario = this.authService.validarUsuario(email, senha);
    if (!usuario) {
      throw new Error('Credenciais Invalidas!');
    }
    return usuario;
  }
}
