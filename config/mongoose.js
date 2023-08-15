const mongoose = require('mongoose');

// 
const connection = async()=>{
    try{
        const db = await mongoose.connect('mongodb://127.0.0.1:27017/atg');
    }catch(error){
        console.log("error in connetion to mongoDB",err);
    }
}

db = connection();

module.exports = db ;
