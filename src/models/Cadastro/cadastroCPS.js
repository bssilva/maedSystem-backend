const mongoose = require('mongoose');

const CPSchema = new mongoose.Schema({
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
        required: false
    },
    contaSalario: {
        type: String,
        required: false
    },
    observacao: {
        type: String,
        required: false
    }
});

mongoose.model("cadastroCPS", CPSchema);