import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitacao } from './solicitacao.entity';
import { AuthModule } from '../auth.module';
import { SolicitacoesController } from './solicitacoes.controller';
import { SolicitacoesService } from './solicitacoes.service';
import { Auditoria } from 'src/auditoria/auditoria.entity';
@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Solicitacao, Auditoria])],
  controllers: [SolicitacoesController],
  providers: [SolicitacoesService],
})
export class SolicitacoesModule {}
