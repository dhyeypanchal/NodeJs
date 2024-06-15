const nodemailer = require("nodemailer")
const sendMail = async (req,res)=>{
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'palma.larkin@ethereal.email',
            pass: 'q4NF8XvQWuhXhbsM3h'
        }
    });

    let info = await transporter.sendMail({
        from: '"Dhyey Panchal 👻" <thapa@gmail.com>', // sender address
        to: "iamthapatechnical@gmail.com", // list of receivers
        subject: "Hello thapa", // Subject line
        text: "Hello world", // plain text body
        html: "<b>hello YT thapa</b>", // html body
    })
    console.log("Message send: %s", info.messageId);
    res.json(info)

    res.send("I am sending mail")
}

module.exports = sendMail;