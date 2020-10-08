const mongoose = require('mongoose');
const MEI = mongoose.model("cadastroMEI");

module.exports = {

//Lista todos MEI cadastrados
async index(req, res){
    const meis = await MEI.find();

    return res.json(meis);
},

//Lista apenas um funcionário     
async show(req, res){
    const meis = await MEI.findById(req.params.id);

    return res.json(meis);
}

}
