import { Knex } from 'knex'

export async function up(knex:Knex) {
    return knex.schema.createTable('doc_spec', table =>{
        table.increments('id').primary();
        
        
        table.integer('doctors_id')
            .notNullable()
            .references('id')
            .inTable('doctors');
        
        
        table.integer('speciality_id')
            .notNullable()
            .references('id')
            .inTable('speciality');

        
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('doc_spec')
}
