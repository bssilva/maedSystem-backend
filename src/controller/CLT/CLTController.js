const mongoose = require('mongoose');
const CLT = mongoose.model("cadastroCLT");

module.exports = {
    
//Adiciona novo funcionário
async newCLT(req, res){
    const clt = await CLT.create(req.body);

    return res.json(clt);
},

//Atualiza     
    async update(req, res){
        const clt = await CLT.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(clt);
    },

};