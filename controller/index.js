const User = require('../model/user');
const mailer = require('../mailer/forget_password_mailer');

module.exports.home= (req,res)=>{
    res.render('home.ejs')
}

module.exports.create = async (req,res)=>{
    
    try{
        // finding if user already exist
        const user = await User.findOne({username:req.body.username});
        
        // if user doesn't exist create new user
        if(!user){
             await User.create(req.body);
        }

        res.redirect('/sign-in');
    }catch(error){
        console.log('Error in creating user',error);
        res.redirect('back');
    }

}

module.exports.signIn = async (req,res)=>{

    if(req.method=="GET"){
        return res.render('sign_in');
    }

    try{
        const user = await User.findOne({username:req.body.username});


        if(user && user.password===req.body.password){
            return res.end("You are logged in");
        }

        return res.end("Invalid username/passowrd");

    }catch(error){
        console.log("error in signin",error);
        return res.redirect('back');
    }
}


module.exports.forgetPassowrd = async (req,res)=>{
    if(req.method=="GET"){
        return res.render('forgot_password');
    }

    try{
        const user = await User.findOne({username:req.body.username});

       
        if(user){
            mailer.forgotPass(user);
            return res.end("A reset email has been sent to your email address");
        }

        return res.end("Invalid username/email");

    }catch(error){
        console.log("error ",error);
        return res.redirect('back');
    }
}

