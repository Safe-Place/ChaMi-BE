const express = require("express");
const registerApi = require("./register");
const loginApi = require("./login");
// const usersApi = require("./profile");
// const paymentApi = require("./payment");

const router = express.Router();

router.use(registerApi);
router.use(loginApi);
// router.use(usersApi);
// router.use(paymentApi);

module.exports = router;
