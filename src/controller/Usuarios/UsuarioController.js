const mongoose = require('mongoose');
const Usuario = mongoose.model("Usuarios");

module.exports = {

    //Lista os Usuários
    async index(req,res){
        const usuario = await Usuario.find();
        
        return res.json(usuario);

    },

    //Cria novo Usuário
    async create(req, res){
        const { nome_usuario, tipo_usuario, senha_usuario } = req.body;

        let data = {};

        //Verifica se existe usuario
        let user = await Usuario.findOne({nome_usuario}); 

        if(!user){
            data = {nome_usuario, tipo_usuario, senha_usuario};
            user = await Usuario.create(data);
            return res.json(user);
        }
        else{
            return res.json(user);
        }
    },    

    //Atualiza
    async update(req, res){
        const {_id, nome_usuario, tipo_usuario, senha_usuario} = req.body;
        const data = {nome_usuario, tipo_usuario, senha_usuario};
        const user = await Usuario.findOneAndUpdate({_id}, data, {new: true})

        res.json(user);
    },
}