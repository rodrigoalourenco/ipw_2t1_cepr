let nodemailer = require('nodemailer');

const YOUR_MAIL = 'yourmail@hotmail.com';

let transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: YOUR_MAIL,
        pass: 'yourpassword'
    }
});

let mailOptions = {
    from: 'yourmail@hotmail.com',
    to: 'sendMail@email.com',
    subject: 'Envio de email pelo node.js - CEP',
    text: 'Envio de email pelo nodejs utilizando a biblioteca nodemailerK!!!'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log("Erro ao enviar email", error);
    } else {
        console.log("Email enviado: " + info.response);
    }
})