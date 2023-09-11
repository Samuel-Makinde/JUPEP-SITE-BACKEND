const jwt = require("jsonwebtoken")


const generateAccessToken = (id, email, role) => {
    let token = jwt.sign({ id, email, role }, process.env.ACCESS_TOKEN, { expiresIn: '10m' })
    return token
}

const generateRefreshToken = (id, email, role) => {
    let token = jwt.sign({ id, email, role }, process.env.REFRESH_TOKEN, { expiresIn: '15d' })
    return token
}

const isAccessTokenValid = (token) => jwt.verify(token, process.env.ACCESS_TOKEN);
const isRefreshTokenValid = (token) => jwt.verify(token, process.env.REFRESH_TOKEN);


module.exports = {
    generateAccessToken,
    generateRefreshToken,
    isAccessTokenValid,
    isRefreshTokenValid

}
