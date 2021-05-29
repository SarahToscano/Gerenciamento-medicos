import {Request, Response} from 'express';
import knex from '../database/connections';

class EspecialidadeController{
    async index (request:Request, response:Response) {  
        const especialidades = await knex('speciality').select('*');
        return response.json(especialidades);
    };

    async show (request:Request, response:Response){
        const {id} = request.params;

        if(!id){
            return response.status(400).json({error: 'Cadastro não encontrado'})
        }

        const doutores = await knex('doctors')//Listar todas os doutores que possuem relação com aespeciliadade acima
                           .join ('doc_spec', 'doctors.id', '=', 'doc_spec.doctors_id' )
                           //faz um join do doc_spec com doctors, que é a tabela que relaciona as especilaidades com os doutores
                           //aonde o id do doutor, seja =,  a
                           .where('doc_spec.speciality_id', id);

        return response.json({doutores})

    }
}

export default EspecialidadeController;