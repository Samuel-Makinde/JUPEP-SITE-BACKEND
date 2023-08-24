const express = require("express")
const router = express.Router()
const createNewUser = require("../controllers/UsersAuthentication/registerUser")
const verifyEmail = require("../controllers/UsersAuthentication/verifyEmail")
const resendEmail = require("../controllers/UsersAuthentication/resendEmail")
const ForgotPassword = require("../controllers/UsersAuthentication/forgotPassword")

router.post('/register', createNewUser);
router.post('/verify-email', verifyEmail)
router.post('/resend-email', resendEmail)
router.post('/forgot-password', ForgotPassword)


module.exports = router