## :bulb: Gerenciamento médico

Este projeto consite em uma API para cadastro de médicos.
Os usuário cadastrados podem ter:
 - Nome (até 120 caracteres)
 - CRM (com até 7 dígitos, caso digite menos são completados com 0 à frente)
 - Telefone
 - Celular
 - Cep

 Operações:
 - [x] Cadastro de usuários
 - [x] Mínimo de duas especialidades
 - [x] Atualização de usuários
 - [x] Exclusão de usuários
 - [x] Busca do endereço através do CEP
 - [x] Busca de usuários por ID
 - [x] Busca de usuários pelas especialidades
 - [x] Busca de todos os usuários cadastrados na base.


## 🚀 Tecnologias

Para o desenvolvimento desta aPI utilizou-se node.js, knex e o insomnia para cadastro de testes.

<code><img height="25" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></code>
<code><img height="25" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"></code> 



### Blibiotecas que deve ser instaladas

```bash
npm install express
npm i --save-dev @types/express
npm i ts-node -D
npm i typescript -D
npx tsc --init #Cria o tsconfigjson
npm install knex
npm i sqlite3
npm install --save cep-promise
npm install node-cep-correios --save

```


## :information_source: Como executar?

```bash
#inicia a aplicação
npm run dev 

#Cria o banco de dados
npm run knex:migrate

#Inicializa o banco com as especialiades médicas pre-cadastradas
npm run knex:seed

```


## 🎨 Casos de testes

<p align="center">
 
 Listar todas especialidades médicas pré-cdastradas <br/>
  <img alt="Landing page" src="./img/listar_todas_especialidades.jpg" width="800">
 <br/>  <br/>
 
 
 Cria perfil <br/>
  <img alt="Landing page" src="./img/criar_perfil.jpg" width="800">
 <br/>  <br/>
 
 Lista todos perfis cadastrados<br/>
  <img alt="Landing page" src="./img/listar_todos.jpg" width="800"> <br/>  <br/>
 
 Buscar por usuário com ID específico<br/>
  <img alt="Landing page" src="./img/busca_id.jpg" width="800"> <br/>  <br/>
 
 Buscar usuários com especialidade específica<br/>
  <img alt="Landing page" src="./img/busca_especialidade.jpg" width="800"> <br/>  <br/>
 
 Excluir usuário<br/>
  <img alt="Landing page" src="./img/excluir_user.jpg" width="800"> <br/>  <br/>
 
  Atualizar usuário<br/>
  <img alt="Landing page" src="./img/update_user.jpg" width="800"> <br/>  <br/>
 
 
</p>
