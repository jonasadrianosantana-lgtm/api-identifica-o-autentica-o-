import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

import { Roles } from '../decorators/roles.decorator';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { AprovarSolicitacao } from './dto/aprovar-solicitacao.dto';
import { CriarSolicitacaoDto } from './dto/criar-solicitacao.dto';
import { SolicitacoesService } from './solicitacoes.service';
import { FiltrarSolicitacaoDto } from './dto/filtrar-solicitacoes.dto';

type RequisitosAutenticados = {
  user: { id: number; papel: string };
};

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
  listar(@Query() filtros: FiltrarSolicitacaoDto) {
    return this.service.listar(filtros);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.service.buscarPorId(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('gestor')
  @Patch(':id/aprovar')
  aprovar(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: AprovarSolicitacao,
    @Req() request: RequisitosAutenticados,
  ) {
    return this.service.aprovar(id, dto.versao, request.user.id);
  }
}
