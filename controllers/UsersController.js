const { User } = require("../models");
const db = require("../models");
const { deleteUserCode } = require("./CodeController");
const ObjectId = require('mongoose').Types.ObjectId; 

module.exports={
    async createNewUser(req, res){
        console.log("req.body in UserController.CreateNewUser, ", req.body);
       
        try {
            const newUser = await db.User.create(req.body);
            res.json(newUser);
        } catch (err) {
            res.status(422).json(err);
        }
    },

    async getUser(req,res){
        console.log("req.body in UserController.getUser ", req.params.id);

        try {
            const currentUser = await db.User.findOne({Auth0Id:req.params.id})
            console.log("Current user is: ",currentUser)
            res.json(currentUser);
        } catch (err) {
            res.status(422).json(err);
        }
    },

    async getUserID(req,res){
        try {
            console.log("req.body in UserController.getUser ", req.params.id);
            const userId = await db.User.findOne({Auth0Id:req.params.id},{projection:{_id:1}} )
            console.log("UserID is: ",userId)
            res.json(userId)
        } catch (err) {
            res.status(422).json(err)
        }
    }, 

    async addFavorite(req, res){
        try {

            await db.User.findOneAndUpdate(
                {_id:req.body.userId},
                {$push:{ favoritesArr:new ObjectId(req.body.codeId)}}
            )
            
            const newFavorites = await db.User.findOne({_id:req.body.userId})

            res.json(newFavorites)
        } catch (err) {
            res.status(422).json(err)
        }
    }, 

    async getUserFavorite(req, res){
        try {
            const favorite = await db.User.findOne({_id:req.params.id}, {"favoritesArr":1, _id:0})
            console.log("favoritesArr is ", favorite);
            res.json(favorite);
        } catch (err) {
            console.log(err)
            res.status(422).json(err)
        }
    },    

    async removeFavorite(req, res){
        try {
            await db.User.findByIdAndUpdate(
                {_id:req.body.userId},
                {$pull:{favoritesArr:new ObjectId(req.body.codeId)}}
            )
            const userProfile = await db.User.findOne({_id:req.body.userId})
            res.json(userProfile)

        } catch (err) {
            console.log(err);
            res.status(422).json(err)
        }
    }, 

    async isUser(req, res){
        try {
            const isUser = await db.User.find({Auth0Id:req.params.id}).countDocuments()>0
            console.log(isUser)
            res.json(isUser) ;
        } catch (err) {
            console.log(err);
            res.status(422).json(err)
            
        }
    }

}