const router = require("express").Router();
const codeController = require("../../controllers/CodeController");

router.route("/")
    .post(codeController.saveNewCode);

router.route("/health")
    .get(
        codeController.retrieveCode
        // res.status(200).end()
    )

module.exports = router;