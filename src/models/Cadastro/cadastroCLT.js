const mongoose = require('mongoose');

const CLTSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    contato: {
        type: String,
        required: true
    },
    admissao: {
        type: String,
        required: true
    },
    experiencia: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    local: {
        type: String,
        required: true
    },
    salario: {
        type: String,
        required: true
    },
    agencia: {
        type: String,
        required: true
    },
    contaSalario: {
        type: String,
        required: true
    },
    observacao: {
        type: String,
        required: false
    }
});

mongoose.model("cadastroCLT", CLTSchema);
