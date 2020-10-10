const db = require("../models");

module.exports={
    createNewUser(req, res){
        console.log("req.body in UserController.CreateNewUser, ", req.body);
        db.User
            .create(req.body)
            .then(User=>res.json(User))
            .catch(err=>res.json(err));
    },

    getUser(req,res){
        console.log("req.body in UserController.getUser ", req.params.id);
        db.User
            .findOne({auth0id:req.params.id})
            .then(user=>res.json(user))
            .catch(err=>res.json(err))
    }
}