const Token = require("../models/Token")
const { isAccessTokenValid,
    isRefreshTokenValid } = require("../utils/generateToken")

const authenticatedUser = (req, res, next) => {
    const { accessToken, refreshToken } = req.signedCookies;
}