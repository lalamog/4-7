const express = require("express");
const register = require("./register");
const login = require("./login");
const editUserView = require("./editUserView");
const rasa = require("./rasatesting")
const router = express.Router();

router.post("/register", register)
router.post("/editUserView", editUserView)
router.post("/login", login)
router.post("/rasa", rasa)

module.exports = router; 