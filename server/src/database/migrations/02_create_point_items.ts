import Knex from 'knex';

export async function up(knex: Knex)
{
    //CRIAR A TABELA

    knex.schema.createTable
}

export async function down()
{
    //voltar atras (deletar a tabela)
}