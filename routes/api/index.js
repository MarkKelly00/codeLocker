const router = require("express").Router();
const codeRoutes = require("./codeblock");
const userRoutes = require("./users")

router.use("/codeblock", codeRoutes);
router.use("/users", userRoutes);


module.exports = router;