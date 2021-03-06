const express = require('express')
const {getAllUsers, createUser} = require("../controller/UserController");
const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);

module.exports = router;