const User = require("../../models/Users")
const bcrypt = require("bcrypt")
const crypto = require("crypto")

const createNewUser = async (req, res) => {
    const {
        username,
        firstName,
        lastName,
        phoneNumber,
        university,
        email,
        password
    } = req.body;

    if (req.body == null || req.body == undefined) {
        res.status(400).json({
            message: 'Bad request'
        })
    }

    // check for duplicate user by there email address
    const duplicateEmail = await User.findOne({ email: email })
    if (duplicateEmail) {
        return res.sendStatus(409)
    }

    try {
        const hashedpassword = await bcrypt.hash(password, 10)
        const verificationToken = crypto.randomBytes(40).toString('hex')
        const user = await User.create({
            username,
            firstName,
            lastName,
            phoneNumber,
            university,
            email,
            password: hashedpassword,
            verificationToken

        })
        // const origin = 'http://localhost:3000';
        console.log(user)
        res.status(201).json({ msg: "Account Created, Email has been sent to your mailbox", data: user })
    } catch (error) {
        console.log("not saving")
        // res.status(500).json({ "message": error.message })
    }
}

module.exports = createNewUser