const router = require("express").Router();
const codeController = require("../../controllers/CodeController");

router.route("/")
    .post(codeController.saveNewCode)
    // schema needs to updated and have isPrivate as part of it
    .get(codeController.getAllGlobalCode)
    .put(codeController.replaceOne);

router.route("/author/:id")
    .get(codeController.getAllUserCode)
    .delete(codeController.deleteUserCode);

router.route("/:id")
    .delete(codeController.deleteOne)
    .get(codeController.getCodeBlock);
    

module.exports = router;