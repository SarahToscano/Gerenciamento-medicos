import {Request, Response} from 'express';
import knex from '../database/connections';
import crm_format from './crm_format';
import cep_format from './cep_format';

class CadadastroController{
    async create (request:Request, response:Response) {  
        const {
            nome,
            crm,
            telefone,
            celular, 
            cep,
            speciality
        } = request.body;

        const cadastro = {
            nome,
            crm: crm_format(crm),
            telefone,
            celular,
            cep: cep_format(cep)
        }
        
        const ids = await knex('doctors').insert(cadastro);

        let Correios = require('node-cep-correios');
        let correios = new Correios();

        try{
            const response =  await correios.consultaCEP({cep});
            const asd = await knex('address').insert({
                city: response.city,
                address : response.address,
                state: response.state,
                district: response.district,
                doctors_address_id: ids[0],
            });
        }
        catch (err) {
            console.log(err);
            return response.status(400).send({ error: 'CEP não encontrado' });
        }

        let result : number[] = [];
        const docSpec = speciality.map((speciality_id : number) => { 
            result.push(speciality_id)
            return{
                    speciality_id,
                    doctors_id: ids[0],
            };
        })
        let spec_num = result.length
        if(spec_num>1){
            for (let i = 0; i < spec_num; i++) 
                result.pop()
            await knex('doc_spec').insert(docSpec);
            return response.json({"success": true});

        }
        else{
            return response.status(400).send({ error: 'É necessário, no mínimo, 2 especialidades.' });
        }
    };
}

export default CadadastroController ;