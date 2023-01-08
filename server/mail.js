// Mail functionality boilerplate accessed from: https://www.youtube.com/watch?v=30VeUWxZjS8&t=277s

const mailer = require('nodemailer');

// storing functions that can be called by importing modules
let mail = {}

// function to send an email
mail.SendEmail = (req, res) => {
    return new Promise((resolve, rejects) => { // create promise

        //setup user account to send the emails from (my account details in .env)
        const transporter = mailer.createTransport( {
            service: 'gmail',
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_EMAIL_PASSWORD
            }
        });
    
        //setup email content to send to user that was sent from client side form
        const mailOptions = {
            from: req.body.Email,
            to: process.env.USER_EMAIL,
            subject: `Message from: ${req.body.Title}: ${req.body.Name}, ${req.body.Email}`,
            text: req.body.Message
        };
    
        // send email from logged in account to specified user
        transporter.sendMail(mailOptions, (error, info) => {
            if(error){ // error
                return rejects(error);
            }
            else { // successfully sent
                return resolve("success");
            }
        });
    });
}
module.exports = mail;