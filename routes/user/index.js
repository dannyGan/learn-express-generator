var express = require("express");
var router = express.Router();

const { logout, register, authentication, getUser} = require("./controller");

router.get("/", getUser);
router.get("/logout", logout);
router.post("/register", register);
router.post("/authentication", authentication);

module.exports = router;