/* eslint-disable no-console */
const db = require("../models");
var ObjectId = require('mongoose').Types.ObjectId; 

module.exports = {
    //create new code block, retrieve code id, find user then update user snippets array with new code id
    async saveNewCode(req, res){
        try {

            const newCode = await db.CodeBlock.create(req.body);
            const { _id } = newCode;
            
            const authorUser = await db.User.findOne({ _id: req.body.author });
            await db.User.findOneAndUpdate(
                { _id: authorUser },
                { $push: { snipsArr: _id } },
                res.json(newCode)
            );

        } catch (error) {
            console.log(error)
            res.status(422).json(error)
        }
    },

    async getAllGlobalCode(req, res) {
        console.log("req.body in codeController.getAllGlobalCode", req.body);
        try {
            const allCode = await db.CodeBlock.find({isPrivate:false})
            console.log("All code is: ", await allCode)
            res.json(allCode)
        } catch (err) {
            res.status(422).json(err)
        }
    },

    async getAllUserCode(req, res) {
        // console.log("req.body in codeController.getAllUserCode", req.params.id);
        try {
            const userCodes = await db.CodeBlock.find({author:req.params.id})
            res.json(userCodes)
        } catch (err) {
            res.status(422).json(err)
        }
    },

    async getCodeBlock(req, res) {
        // console.log("req.params.id in codeController is ", req.params.id);       
        try {
            const retrieved = await db.CodeBlock.findOne({_id:req.params.id})
            res.json(retrieved)
        } catch (err) {
            res.status(422).json(err)
        }
    },

    async replaceOne(req, res) {
        // console.log("req.body.id in codeController.", req.body.id);
        try {
            const updated = await db.CodeBlock.replaceOne({_id:req.body.id}, req.body)
            res.json(updated)
        } catch (err) {
            res.status(422).json(err)
        }
    },

    //find the the author ID, update snipsArr in Userschema, delete from code collection
    async deleteOne(req, res) {
        // console.log("req.params.id in codeController.deleteOne", req.params.id);
        try {
            const author = await db.CodeBlock.findOne({_id:req.params.id})
            await db.User.findOneAndUpdate(
                {_id:author.author},
                {$pull:{snipsArr:new ObjectId(req.params.id)}},
            )

            const deleted = await db.CodeBlock.deleteOne({_id:req.params.id})
            res.json(deleted)
        } catch (err) {
            console.log(err)
            res.status(422).json(error)   
        }
    },

    //deletes all code where authorID matches, then goes to userschema & updates snipsArr
    async deleteUserCode(req, res) {
        // console.log("req.params.id in codeController.deleteOne", req.params.id);
        try {
            const deleted = await db.CodeBlock.deleteMany({author:req.params.id})
            await db.User.findOneAndUpdate(
                {_id:req.params.id},
                {$unset:{snipsArr:[]}}
            )
            res.json(deleted)

        } catch (error) {
            console.log(error);
            res.status(422).json(error)
        }
    },
};