const router = require("express").Router();
const UsersController = require("../../controllers/UsersController");

router.route("/").post(UsersController.createNewUser);


router.route("/autho/:id")
    .get(UsersController.isUser);

router.route("/userid/:id")
    .get(UsersController.getUserID);

router.route("/favorite")
    .post(UsersController.addFavorite)
    .put(UsersController.removeFavorite)
    .get(UsersController.getFavoritesCodeBlock);
router.route("/:id")
    .get(UsersController.getUser)
    .delete(UsersController.deleteUser);

router.route("/favorite/:id")
    .get(UsersController.getUserFavorite);


module.exports = router;
