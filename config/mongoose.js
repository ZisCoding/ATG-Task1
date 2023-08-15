const mongoose = require('mongoose');

// 
const connection = async()=>{
    try{
        const db = await mongoose.connect('mongodb+srv://zishan:zishan@cluster0.qf3xyvd.mongodb.net/');
    }catch(error){
        console.log("error in connetion to mongoDB",error);
    }
}

db = connection();

module.exports = db ;
