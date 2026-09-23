import { Controller, Get, Query, UseGuards } from '@nestjs/common';

import { Roles } from '../decorators/roles.decorator';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { AuditoriaService } from './auditoria.service';
import { FiltrarAuditoriaDto } from './dto/filtrar-auditoria.dto';
@Controller('auditorias')
export class AuditoriaController {
  constructor(private readonly service: AuditoriaService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('auditor', 'gestor')
  @Get()
  listar(@Query() filtros: FiltrarAuditoriaDto) {
    return this.service.listar(filtros);
  }
}
