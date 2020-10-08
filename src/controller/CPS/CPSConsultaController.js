const mongoose = require('mongoose');
const CPS = mongoose.model("cadastroCPS");

module.exports = {

//Lista todos clts cadastrados
async index(req, res){
    const cps = await CPS.find();

    return res.json(cps);
},

//Lista apenas um funcionário     
async show(req, res){
    const cps = await CPS.findById(req.params.id);

    return res.json(cps);
}

}