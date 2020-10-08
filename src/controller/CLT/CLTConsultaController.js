const mongoose = require('mongoose');
const CLT = mongoose.model("cadastroCLT");

module.exports = {

//Lista todos clts cadastrados
async index(req, res){
    const clts = await CLT.find();

    return res.json(clts);
},

//Lista apenas um funcionário     
async show(req, res){
    const clts = await CLT.findById(req.params.id);

    return res.json(clts);
}

}
