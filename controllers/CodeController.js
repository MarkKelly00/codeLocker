/* eslint-disable no-console */
const db = require("../models");

module.exports={
    saveNewCode(req, res){
        console.log(req.body);
        db.CodeBlock
            .create(req.body)
            .then(dbModel=>res.json(dbModel))
            .catch(err=>res.json(err))
    }, 

    retrieveCode(req,res){
        res.json(db.CodeBlock
            .find()
        )
    },
}