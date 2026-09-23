import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { Auditoria } from './auditoria.entity';
import { FiltrarAuditoriaDto } from './dto/filtrar-auditoria.dto';
@Injectable()
export class AuditoriaService {
  constructor(
    @InjectRepository(Auditoria)
    private readonly repository: Repository<Auditoria>,
  ) {}

  listar(filtros: FiltrarAuditoriaDto) {
    const where: FindOptionsWhere<Auditoria> = {};

    if (filtros.recursoId) {
      where.recursoId = filtros.recursoId;
    }

    if (filtros.recursoTipo) {
      where.recursoTipo = filtros.recursoTipo;
    }

    if (filtros.acao) {
      where.acao = filtros.acao;
    }

    return this.repository.find({
      where,
      order: { criadoEm: 'DESC' },
    });
  }
}
