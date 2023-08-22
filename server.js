require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConnect")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000
// make database connection
connectDB()
//cross origin resource sharing
app.use(cors(corsOptions));

// to handle url encoded
app.use(express.urlencoded({ extended: false }))

// build in middleware for json
app.use(express.json())

// routes
app.use('/api/v1/register', require("./routes/registerUser"));

// start server
mongoose.connection.once('open', () => {
    console.log("connected")
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})