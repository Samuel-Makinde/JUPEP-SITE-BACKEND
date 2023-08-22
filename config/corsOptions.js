const whiteList = ["http://localhost:5000"]
const corsOptions = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error("Access denied by cors"))
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;