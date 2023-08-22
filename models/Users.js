const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: {
        type: String,
        required: [true, "cannot be blank"],
        trim: true,
    },
    firstName: {
        type: String,
        required: [true, "cannot be blank"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "cannot be blank"],
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: [true, "cannot be blank"],
        trim: true,
    },
    university: {
        type: String,
        required: [true, "cannot be blank"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "cannot be blank"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "cannot be blank"],
        trim: true,
    },
    isVerify: {
        type: Boolean,
        default: false
    },
    refreshToken: String
}, {
    timestamps: true
},
)


const Users = mongoose.model("Users", usersSchema)
module.exports = Users