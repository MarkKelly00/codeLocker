const router = require("express").Router();
const UsersController = require("../../controllers/UsersController");

router.route("/")
    .post(UsersController.createNewUser);

router.route("/:id")
    .get(UsersController.getUser)


module.exports = router;