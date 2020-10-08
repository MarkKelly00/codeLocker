const router = require("express").Router();
const codeController = require("../../controllers/CodeController");

router.route("/")
    .post(codeController.saveNewCode);

router.route("/health")
    .get((req,res)=>{
        res.status(200).end()
    })

module.exports = router;