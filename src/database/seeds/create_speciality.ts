import {Knex} from 'knex';

export async function seed(knex:Knex) {
    await knex('speciality').insert([
        {type: 'Alergologia'},
        {type: 'Angiologia'},
        {type: 'Buco maxilo'},
        {type: 'Cardiologia clínca'},
        {type: 'Cardiologia infantil'},
        {type: 'Cirurgia cabeça e pescoço'},
        {type: 'Cirurgia cardíaca'},
        {type: 'Cirurgia de tórax'}

    ]);
}