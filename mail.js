require('dotenv').config()
const nodemailer = require('nodemailer');

async function wrapedSendMail(mailOptions) {
    return new Promise((resolve, reject) => {

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service: 'gmail',
            port: 465,
            secure: true, 
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.log("error: "+ err);
                resolve(false); // or use rejcet(false) but then you will have to handle errors
            } 
            else {
                console.log('Email sent successfuly!');
                resolve(true);
            }
        });
    })
}

module.exports = wrapedSendMail