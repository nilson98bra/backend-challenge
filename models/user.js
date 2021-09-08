const Mongoose = require("../database/mongodb")
const bcrypt = require("bcrypt")

const UserSchema = new Mongoose.Schema({
    _id:{
        type: String
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})


const User = Mongoose.model("User",UserSchema)
module.exports = User