import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { Papel } from '../../usuarios/usuario.service';
import { ROLES_KEY } from '../decorators/roles.decorator';

type RequisicaoComUsuario = {
  user: { papel: Papel };
};

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const papeisExigidos = this.reflector.getAllAndOverride<Papel[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!papeisExigidos.length) {
      return true;
    }
    const request = context.switchToHttp().getRequest<RequisicaoComUsuario>();
    return papeisExigidos.includes(request.user.papel);
  }
}
