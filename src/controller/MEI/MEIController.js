const mongoose = require('mongoose');
const MEI = mongoose.model("cadastroMEI");

module.exports = {
    
//Adiciona novo funcionário
async newMEI(req, res){
    const meis = await MEI.create(req.body);

    return res.json(meis);
},

//Atualiza     
    async update(req, res){
        const meis = await MEI.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(meis);
    },

};