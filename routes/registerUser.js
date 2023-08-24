const express = require("express")
const router = express.Router()
const createNewUser = require("../controllers/UsersAuthentication/registerUser")
const verifyEmail = require("../controllers/UsersAuthentication/verifyEmail")
const resendEmail = require("../controllers/UsersAuthentication/resendEmail")

router.post('/register', createNewUser);
router.post('/verify-email', verifyEmail)
router.post('/resend-email', resendEmail)


module.exports = router