const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

//Iniciando App
const app = express();
app.use(express.json());
app.use(cors());

//Conectando com Banco de Dados
mongoose.connect("mongodb://localhost:27017/node", { useNewUrlParser: true 
                                                 ,   useUnifiedTopology: true}
                                                 );
mongoose.set("useCreateIndex", true);
requireDir("./src/models/Cadastro");
requireDir("./src/models/Passagem");
requireDir("./src/models/Usuario");

 
//Rotas
app.use("/", require("./src/routes"));

app.listen(5000);