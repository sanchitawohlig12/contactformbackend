const router = require("express").Router();

const customerRoutes = require("./customers/index");
// const authenticationRoutes = require("./authentication/index");

router.use("", customerRoutes);
// router.use("", authenticationRoutes);

module.exports = router;
