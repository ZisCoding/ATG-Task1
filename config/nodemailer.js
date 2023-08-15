const nodemailer = require('nodemailer');
const path = require('path');


// creating the tranporter funtion to tranfer mails
let transporter = nodemailer.createTransport({
    // the mail service provider where the email server is hosted
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false,
    auth: { // credentials of the account we are  using to send email
        user: 'zishanpublic@gmail.com',
        pass: 'nRq2QpWdX8w9jCIP'
    }
},);



module.exports = {
    transporter: transporter,
}



