const express = require("express")
const router = express.Router()
const createNewUser = require("../controllers/UsersAuthentication/registerUser")

router.post('/', createNewUser)

module.exports = router