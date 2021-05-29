import knex from '../database/connections'

function cep_controller (cepParaConsulta:any) {
    let Correios = require('node-cep-correios');
    let correios = new Correios();

    try {
        const response =  correios.consultaCEP({cep:cepParaConsulta});
        return{
            city: response.city,
            address : response.address,
            state: response.state,
            district: response.district,
        };
        
      } 
    
      catch (err) {
        console.log(err);
        return err;
    }

    
    


}
    
export default cep_controller;