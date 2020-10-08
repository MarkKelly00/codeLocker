const router = require("express").Router();
const codeRoutes = require("./codeblock");

router.use("/codeBlock", codeRoutes);


module.exports = router;