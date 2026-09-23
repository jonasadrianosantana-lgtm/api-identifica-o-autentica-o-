import { IsInt, Min } from 'class-validator';

export class AprovarSolicitacao {
  @IsInt()
  @Min(1)
  versao!: number;
}
