const mailer = require('nodemailer');

let mail = {};

mail.SendEmail = (req, res) => {
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
        if(error){
            console.log(error);
            return error;
        }
        else return "success";
    });
}

module.exports = mail;