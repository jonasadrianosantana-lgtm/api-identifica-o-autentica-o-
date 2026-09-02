import { Injectable } from '@nestjs/common';

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  senha: string;
  papel: 'solicitante' | 'gestor';
  ativo: boolean;
};

@Injectable()
export class UsuarioService {
  private readonly usuarios: Usuario[] = [
    {
      id: 1,
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      senha: '123456',
      papel: 'gestor',
      ativo: true,
    },
  ];
}
