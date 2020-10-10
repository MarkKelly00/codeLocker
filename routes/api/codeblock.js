const router = require("express").Router();
const codeController = require("../../controllers/CodeController");

router.route("/")
    .post(codeController.saveNewCode);



module.exports = router;