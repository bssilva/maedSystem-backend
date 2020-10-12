const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');
const dotenv = require('dotenv');

dotenv.config();
//Conectando com Banco de Dados
mongoose.connect("mongodb+srv://<admin>:<admin>@cluster0.r4pv3.mongodb.net/<dbname>?retryWrites=true&w=majority"
                , { useNewUrlParser: true 
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

app.listen(process.env.PORT || 5000);