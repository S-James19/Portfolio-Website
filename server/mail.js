// Script contains source code from: https://www.youtube.com/watch?v=30VeUWxZjS8&t=277s

const { rejects } = require('assert');
const mailer = require('nodemailer');
const { resolve } = require('path');

// storing functions that can be called by importing modules
let mail = {}

// function to send an email
mail.SendEmail = (req, res) => {
    return new Promise((resolve, rejects) => {

        //setup user account to send the emails from
        const transporter = mailer.createTransport( {
            service: 'gmail',
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_EMAIL_PASSWORD
            }
        });
    
        //setup email content to send to user
        const mailOptions = {
            from: req.body.Email,
            to: process.env.USER_EMAIL,
            subject: `Message from: ${req.body.Title}: ${req.body.Name}, ${req.body.Email}`,
            text: req.body.Message
        };
    
        // send email from logged in acconut to specified user
        transporter.sendMail(mailOptions, (error, info) => {
            if(error){ // error
                return rejects(error);
            }
            else { // successfully sent 
                return(resolve("success"));
            }
        });
    });
}

module.exports = mail;