const mongoose = require('mongoose');

const PassagemSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: false,
        unique: true
    },
    valorDiario: {
        type: String,
        required: true
    },
    valorDado: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    duracao: {
        type: String,
        required: true
    },    
    observacao: {
        type: String,
        required: false
    }
});

mongoose.model("Passagem", PassagemSchema);