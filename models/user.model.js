const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userScheme =  new Schema({
    email: { type: String, unique: true, required: true },
    name: String,
    password: { type: String, required: false },
    gender: { type: String, default: 'other' }
})
const UserModel = mongoose.model('user',userScheme);
module.exports = UserModel