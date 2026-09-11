import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'auditorias' })
export class Auditoria {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'ator_id', type: 'int' })
  atorId!: number;

  @Column({ type: 'varchar', length: 50 })
  acao!: string;

  @Column({ name: 'recurso_tipo', type: 'varchar', length: 50 })
  recursoTipo!: string;

  @Column({ name: 'recurso_id', type: 'int' })
  recursoId!: number;

  @Column({ type: 'jsonb', nullable: true })
  detalhes!: Record<string, unknown>;

  @CreateDateColumn({ name: 'criado_em', type: 'timestamp' })
  criadoEm!: Date;
}
