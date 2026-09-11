import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
} from '@nestjs/common';
import { CriarSolicitacaoDto } from './dto/criar-solicitacao.dto';
import { SolicitacoesService } from './solicitacoes.service';
import { Patch, UseGuards } from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Papel } from '../../usuarios/usuario.service';

@Controller('solicitacoes')
export class SolicitacoesController {
  constructor(private readonly service: SolicitacoesService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  criar(@Body() dto: CriarSolicitacaoDto) {
    return this.service.criar(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  listar() {
    return this.service.listar();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.service.buscarPorId(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('gestor')
  @Patch(':id/aprovar')
  aprovar(@Param('id', ParseIntPipe) id: number) {
    return this.service.aprovar(id);
  }
}
