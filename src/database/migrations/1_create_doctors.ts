import { Knex } from 'knex'

export async function up(knex:Knex) {
    return knex.schema.createTable('doctors', table =>{
        table.increments('id').primary();
        table.string('nome', 120).notNullable();
        table.string('crm', 8).notNullable();
        table.string('telefone').notNullable();
        table.string('celular').notNullable();
        table.integer('cep').notNullable();
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('doctors')
}
