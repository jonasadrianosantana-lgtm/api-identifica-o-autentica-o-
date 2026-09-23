import { IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class FiltrarAuditoriaDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  recursoId?: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  recursoTipo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  acao?: string;
}
