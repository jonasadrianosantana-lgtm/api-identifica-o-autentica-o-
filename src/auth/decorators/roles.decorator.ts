import { SetMetadata } from '@nestjs/common';
import { Papel } from 'src/usuarios/usuario.service';
export const ROLES_KEY = 'papeis';
export const Roles = (...roles: Papel[]) => SetMetadata(ROLES_KEY, roles);
