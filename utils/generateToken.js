const jwt = require("jsonwebtoken")


const generateAccessToken = (id, email, role) => {
    let token = jwt.sign({ id, email, role }, process.env.ACCESS_TOKEN, { expiresIn: '10m' })
    return token
}

const generateRefreshToken = (id, email, role) => {
    let token = jwt.sign({ id, email, role }, process.env.REFRESH_TOKEN, { expiresIn: '15d' })
    return token
}

module.exports = {
    generateAccessToken,
    generateRefreshToken
}
