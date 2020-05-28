const http = require('http')
const fs = require('fs')
const nodemailer = require("nodemailer");


http.createServer((req, res) =>{
    switch (req.url) {
        case '/':
            res.writeHead(200,{'Content-Type':'text/html'});
            let myFileHtml = fs.readFileSync('index.html');
            res.end(myFileHtml);

        case '/app.css':
            res.writeHead(200,{'Content-Type':'text/css'});
            let myFileCss = fs.readFileSync('css/normalize.css');
            res.end(myFileCss);
      case '/app.bg':
        res.writeHead(200,{'Content-Type':'img/jpg'});
        let myFileBg = fs.readFileSync('kursova/back2.jpg');
        res.end(myFileBg);

      case '/app.js':
        res.writeHead(200,{'Content-Type':'text/js'});
        let myFilejs = fs.readFileSync('js/main.js');
        res.end(myFilejs);

      case '/mail':
        var mail = fs.readFileSync('data.txt');

        var data ="Посилання для заповнення анкети для вибору ПК https://docs.google.com/forms/d/e/1FAIpQLSeVnYJYrBJMd_rcWu3C5iD8Uu_2oDYu115srPJaRCzEX2ev5A/viewform?usp=sf_link";

        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: 'zhytelselakulyava001@gmail.com',
            pass: 'MAX80300KYmin'
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
        let myFileHt = fs.readFileSync('index.html');
        res.end(myFileHt);

      default:
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end('404 Не знайдено');
    }
}).listen(2000,() =>{console.log('Server has been started....')});
