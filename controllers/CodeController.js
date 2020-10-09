/* eslint-disable no-console */
const db = require("../models");

module.exports={
    saveNewCode(req, res){
        console.log("req.body in codeController.saveNewCode", req.body);
        db.CodeBlock
            .create(req.body)
            .then(codeBlock=>res.json(codeBlock))
            .catch(err=>res.json(err));
    }, 

    getAllGlobalCode(req, res){
        console.log("req.body in codeController.getAllGlobalCode",req.body);
        db.CodeBlock
            .find({isPrivate:false})
            .then(codeBlock=>res.json(codeBlock))
            .catch(err=>res.json(err));
    },

    getAllUserCode(req,res){
        console.log("req.body in codeController.getAllUserCode", req.params.id)
        db.CodeBlock
            .find({author:req.params.id})
            .then(codeBlock=>res.json(codeBlock))
            .catch(err=>res.json(err))
    },

    getCodeBlock(req,res){
        console.log("req.params.id in codeController is ", req.params.id);
        db.CodeBlock
            .find({_id:req.params.id})
            .then(codeBlock=>res.json(codeBlock))
            .catch(err=>res.json(err))
    },

    replaceOne(req,res){
        console.log("req.body.id in codeController.", req.body.id)
        db.CodeBlock
            .replaceOne({_id:req.body.id}, req.body)
            .then(codeBlock=>res.json(codeBlock))
            .catch(err=>res.json(err))
    },

    deleteOne(req,res){
        console.log("req.params.id in codeController.deleteOne", req.params.id);
        db.CodeBlock
            .deleteOne({_id:req.params.id})
            .then(codeBlock=>res.json(codeBlock))
            .catch(err=>res.json(err));
    },

    deleteUserCode(req,res){
        console.log("req.params.id in codeController.deleteOne", req.params.id);
        db.CodeBlock
            .deleteMany({_id:req.params.id})
            .then(codeBlock=>res.json(codeBlock))
            .catch(err=>res.json(err))
    }

}