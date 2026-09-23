import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth.module';
import { Auditoria } from './auditoria.entity';
import { AuditoriaController } from './auditoria.controller';
import { AuditoriaService } from './auditoria.service';
@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Auditoria])],
  controllers: [AuditoriaController],
  providers: [AuditoriaService],
})
export class AuditoriaModule {}
