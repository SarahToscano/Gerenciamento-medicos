import express from 'express';
import knex from './database/connections'
import CadadastroController from './controllers/CadastroController';
import EspecialidadeController from './controllers/EspecialidadeController';
import TodosController from './controllers/TodosController';


const routes = express.Router();
const cadadastroController = new CadadastroController();
const especialidadeController = new EspecialidadeController();
const todosController = new TodosController();


routes.post('/cadastro', cadadastroController.create);
routes.put('/doutores/:id',todosController.update);
routes.delete('/doutores/:id',todosController.delete);

routes.get('/doutores', todosController.index)
routes.get('/doutores/:id', todosController.show)


routes.get('/especialidades',especialidadeController.index);
routes.get('/especialidades/:id',especialidadeController.show);




export default routes;