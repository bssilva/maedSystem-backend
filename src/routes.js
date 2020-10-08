const express = require('express');
const routes = express.Router();

const CLTController = require('../src/controller/CLT/CLTController');
const CLTConsultaController = require('../src/controller/CLT/CLTConsultaController');
const CPSController = require('../src/controller/CPS/CPSController');
const CPSConsultaController = require('../src/controller/CPS/CPSConsultaController');
const MEIController = require('../src/controller/MEI/MEIController');
const MEIConsultaController = require('../src/controller/MEI/MEIConsultaController');
const PassagemController = require('../src/controller/Passagem/PassagemController');
const UsuarioController = require('../src/controller/Usuarios/UsuarioController');


////////////////// !--> Inicio Login //////////////////
routes.post('/login', UsuarioController.create);
routes.get('/login', UsuarioController.index);
routes.put('/login/update', UsuarioController.update);
////////////////// !--> Fim Login //////////////////

////////////////// !--> Inicio Cadastro e Listagem de Funcionários //////////////////
//CLT
routes.post('/cadastroCLT', CLTController.newCLT);           //Cria um novo funcionário clt
routes.get('/cadastroCLT', CLTConsultaController.index);     //Lista todos funcionários clt
routes.get('/cadastroCLT/:id', CLTConsultaController.show);  //Lista apenas um funcionário clt

//CPS
routes.post('/cadastroCPS', CPSController.newCPS);           //Cria um novo funcionário cps
routes.get('/cadastroCPS', CPSConsultaController.index);     //Lista todos funcionários cps
routes.get('/cadastroCPS/:id', CPSConsultaController.show);  //Lista apenas um funcionário cps

//MEI
routes.post('/cadastroMEI', MEIController.newMEI);           //Cria um novo funcionário mei
routes.get('/cadastroMEI', MEIConsultaController.index);     //Lista todos funcionários mei
routes.get('/cadastroMEI/:id', MEIConsultaController.show);  //Lista apenas um funcionário mei
////////////////// !--> Fim Cadastro e Listagem de Funcionários //////////////////


////////////////// !--> Inicio Informações de Passagem //////////////////
routes.post('/Passagem', PassagemController.new);           //Cria um novo funcionário
routes.get('/Passagem', PassagemController.index);          //Lista todos funcionários
routes.get('/Passagem/:id', PassagemController.show);       //Lista apenas um funcionário 
////////////////// !--> Fim Informações de Passagem //////////////////

module.exports = routes;