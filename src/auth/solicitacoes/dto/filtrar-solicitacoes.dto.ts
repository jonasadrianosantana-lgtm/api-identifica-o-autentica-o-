import { IsIn, IsOptional, IsString, MaxLength } from 'class-validator';
import type {
  PrioridadeSolicitacao,
  StatusSolicitacao,
} from '../solicitacao.entity';

export class FiltrarSolicitacaoDto {
  @IsOptional()
  @IsIn(['pendente', 'aprovada'])
  status?: StatusSolicitacao;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  centroCusto?: string;

  // faz com que cada filtro possa ser omitido, mas,
  // quando enviado, seu valor ainda precisa ser válido.
  @IsOptional()
  @IsIn(['normal', 'urgente'])
  prioridade?: PrioridadeSolicitacao;
}
