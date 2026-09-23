import { SetMetadata } from '@nestjs/common';
import type { Papel } from '../../usuarios/usuario.service';

export const ROLES_KEY = 'papeis';
export const Roles = (...roles: Papel[]) => SetMetadata(ROLES_KEY, roles);
