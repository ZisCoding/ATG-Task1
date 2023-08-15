const mongoose= require('mongoose');
// const { stringify } = require('nodemon/lib/utils');

const userSchema=  new mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
    
},{
    timestamps: true
});


module.exports = new mongoose.model('User',userSchema);