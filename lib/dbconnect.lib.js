const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mongoose1804',{
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(()=>console.log('DB connected!'))
.catch((err)=>console.log(err.message))