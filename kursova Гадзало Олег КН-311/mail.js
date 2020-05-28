const nodemailer = require("nodemailer");
const fs = require('fs');
let mail=document.getElementById('mail');

var data ="Посилання для заповнення анкети для вибору ПК https://docs.google.com/forms/d/e/1FAIpQLSeVnYJYrBJMd_rcWu3C5iD8Uu_2oDYu115srPJaRCzEX2ev5A/viewform?usp=sf_link";

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'oleh.hadzalo.kn.2017@lpnu.ua',
            pass: '09.11.2000'
        }
    });
const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Email sent: ', info)
    })
}
const message = {
    from:'EZ-Construction<oleh.hadzalo.kn.2017@lpnu.ua>',
    to: mail,
    subject:'New Order',
    html: data
};
mailer(message);

