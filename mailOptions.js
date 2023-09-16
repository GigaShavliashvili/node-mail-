var nodemailer = require('nodemailer');

const yourEmail = "shavliashvili249@gmail.com";
const yourPass = "ykvmryxgvgbwzefw";
const mailHost = "smtp.gmail.com";
const mailPort = 587;
const senderEmail = "shavliashvili249@gmail.com"


const htmlContent = (text, url) => {
    return `<div><h2>${text}:ვერიფიკაციის გასავლელათ დაჭირეთ ღილაკს:</h2> <a href=${url}>მიღებულია</a></div>`
} 

const sendMailTo = (to, subject, text, url) => {
    let transporter = nodemailer.createTransport({
        host: mailHost,
        port: mailPort,
        service: "gmail",
        auth: {
            user: yourEmail,
            pass: yourPass,
        },
    });

    let mailOptions = {
        from: senderEmail,
        to: to,
        subject: "fromCallApp",
        html: htmlContent(text,url),
    };
    return transporter.sendMail(mailOptions); // promise
};

module.exports = sendMailTo;
