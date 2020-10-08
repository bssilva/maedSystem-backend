const mongoose = require('mongoose');
const Passagem = mongoose.model("Passagem");

module.exports = {

//Adiciona nova passagem
async new(req, res){
    const passagem = await Passagem.create(req.body);

    return res.json(passagem);
},    

//Atualiza Passagem   
async update(req, res){
    const passagem = await Passagem.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(passagem);
},

//Lista todas Passagens
async index(req, res){
    const passagens = await Passagem.find();

    return res.json(passagens);
},

//Lista apenas a passagem de um funcionário     
async show(req, res){
    const passagens = await Passagem.findById(req.params.id);

    return res.json(passagens);
}}

