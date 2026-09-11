import { MigrationInterface, QueryRunner } from "typeorm";

export class Inicial1789066297942 implements MigrationInterface {
    name = 'Inicial1789066297942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "solicitacoes" ("id" SERIAL NOT NULL, "titulo" character varying(150) NOT NULL, "status" character varying(20) NOT NULL DEFAULT 'pendente', "versao" integer NOT NULL, "criado_em" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "atualizado_em" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_795aaa33114295368cac771de45" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "solicitacoes"`);
    }

}
