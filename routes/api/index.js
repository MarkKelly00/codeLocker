const router = require("express").Router();
const { route } = require("./codeblock");
const codeRoutes = require("./codeblock");

router.use("/codeBlock", codeRoutes);


module.exports = router;