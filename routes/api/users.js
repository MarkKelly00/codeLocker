const router = require("express").Router();
const UsersController = require("../../controllers/UsersController");

router.route("/")
    .post(UsersController.createNewUser);

router.route("/:id")
    .get(UsersController.getUser);

router.route("/userid/:id")
    .get(UsersController.getUserID)

router.route("/favorite")
    .post(UsersController.addFavorite)


module.exports = router;