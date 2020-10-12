const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');
const dotenv = require('dotenv');

dotenv.config();
//Conectando com Banco de Dados
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true 
                                        , useUnifiedTopology: true}
                                                 );
mongoose.set("useCreateIndex", true);
requireDir("./src/models/Cadastro");
requireDir("./src/models/Passagem");
requireDir("./src/models/Usuario");


//Iniciando App
const app = express();
app.use(express.json());
app.use(cors());

 
//Rotas
app.use("/", require("./src/routes"));

app.listen(5000);