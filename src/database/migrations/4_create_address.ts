import { Knex } from 'knex'

export async function up(knex:Knex) {
    return knex.schema.createTable('address', table =>{
        table.increments('id').primary();
        
        table.integer('doctors_address_id')
            .notNullable()
            .references('id')
            .inTable('doctors');
        
        table.string('address').notNullable();
        table.string('district').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('address')
}
