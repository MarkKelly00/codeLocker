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

router.route("/favoritecode/:id")
    .get(UsersController.getFavoritesCodeBlock)

router.route("/:id")
    .get(UsersController.getUser)
    .delete(UsersController.deleteUser);

router.route("/internaluser/:id")
    .get(UsersController.getUserByInternalId)

router.route("/favorite/:id")
    .get(UsersController.getUserFavorite);


module.exports = router;
