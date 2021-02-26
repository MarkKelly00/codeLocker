const router = require("express").Router();
const codeController = require("../../controllers/CodeController");

router.route("/")
    .post(codeController.saveNewCode)
    // schema needs to updated and have isPrivate as part of it
    .get(codeController.getAllGlobalCode);

router.route("/globalcode")
    .get(codeController.getAllGlobalCodePopulate);    

router.route("/author/:id")
    .get(codeController.getAllUserCode)
    .delete(codeController.deleteUserCode);

router.route("/:id")
    .delete(codeController.deleteOne)
    .get(codeController.getCodeBlock)
    .put(codeController.updateOne);
    
router.route("/likes")
    .post(codeController.addLike)
    .put(codeController.removeLike);

router.route("/likes/:id")
    .get(codeController.getLikeCount);

router.route("/likesarr/:id")
    .get(codeController.getLikeArr);



module.exports = router;