const nodeMailer =  require('../config/nodemailer');

// this method will handle the sending of mail for the reseting password
exports.forgotPass = async(user)=>{

    console.log(user.email);

    try{
        let info = await nodeMailer.transporter.sendMail({
            from: 'zishanali0116@outlook.com',
            to: user.email,
            subject: "New comment published",
            html: `<h1>Your password is <b>${user.password}</b> </h1>`
        });
        console.log("Email sent ");
    }catch(error){
        console.log("Error in sending email",error);
    }
}
