const mongoose = require('mongoose');
const CPS = mongoose.model("cadastroCPS");

module.exports = {
    
//Adiciona novo funcionário
async newCPS(req, res){
    const cps = await CPS.create(req.body);

    return res.json(cps);
},

//Atualiza     
    async update(req, res){
        const cps = await CPS.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(cps);
    },

};