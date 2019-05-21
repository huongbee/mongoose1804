const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mongoose1804',{
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(()=>console.log('DB connected!'))
.catch((err)=>console.log(err.message))

const Schema = mongoose.Schema;
const userScheme =  new Schema({
    email: { type: String, unique: true, required: true },
    name: String,
    password: { type: String, required: false },
    gender: { type: String, default: 'other' }
})
const UserModel = mongoose.model('user',userScheme);

