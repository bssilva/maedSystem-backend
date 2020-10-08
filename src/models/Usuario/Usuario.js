const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = new mongoose.Schema({
    nome_usuario: String ,
    tipo_usuario: Number ,
    senha_usuario: String,
},{
    timestamps:true
});

// Criptografia da Senha
User.pre('save', function(next){
    if(!this.isModified("senha_usuario")){
        return next();
    }
    this.senha_usuario = bcrypt.hashSync(this.senha_usuario, 10);
    next();
});

User.pre('findOneAndUpdate', function(next){
    var password = this.getUpdate().senha_usuario + '';

    if(password.length < 55){
        this.getUpdate().senha_usuario = bcrypt.hashSync(password, 10);
    }
    next();
})

mongoose.model("Usuarios", User);
