import { Module } from '@nestjs/common';
import { UsuariosService } from './usuario.service';

@Module({
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
