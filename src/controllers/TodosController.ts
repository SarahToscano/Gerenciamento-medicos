import {Request, Response} from 'express';
import knex from '../database/connections';

class TodosController{
    async show (request:Request, response:Response){
        const {id} = request.params;

        const doctor = await knex('doctors').where('id', id).first();

        if(!id){
            return response.status(400).json({error: 'Cadastro não encontrado'})
        }

        const especialidades = await knex('speciality')//Listar todas as especialidades que possuem relação com o id acima
                           .join ('doc_spec', 'speciality.id', '=', 'doc_spec.speciality_id' )
                           .where('doc_spec.doctors_id', id);
        
        const endereco = await knex('address')
                        .where('address.doctors_address_id', id);

        return response.json({doctor, especialidades, endereco})
    }

    async index (request:Request, response:Response) {  
        const doutores = await knex('doctors')
        .select('*');
        return response.json(doutores)
    };

    async update(request:Request, response:Response){
        const {id} = request.params;
        const changes = request.body;

        if(!id){
            return response.status(400).json({error: 'Cadastro não encontrado'})
        }

        const count = await knex('doctors')
                        .where({id})
                        .update(changes);
        if (count) {
            return response.status(200).json({updated: changes})
        }else {
            return response.status(404).json({message: "Usuario nao encontrado"})
        }
    } 

    async delete(request:Request, response:Response){
        const {id} = request.params;

        if(!id){
            return response.status(400).json({error: 'Cadastro não encontrado'})
        }


        const delet_user = await knex('doctors')
        .where('id', id)
        .del()

        const del_doc_spec = await knex('doc_spec')
            .where ('doctors_id', id)
            .del()

        const del_address = await knex('address')
            .where ('doctors_address_id', id)
            .del()
        
        return response.status(200).json({updated: 'ok'})



        }

/*    async update (request:Request, response:Response) {  
        
        const {id} = request.params;

        const doctor = await knex('doctors')
        .where('id', id)
        .update({nome, crm,telefone,celular,  cep});

        if(!id){
            return response.status(400).json({error: 'Cadastro não encontrado'})
        }
    };*/
}

export default TodosController;