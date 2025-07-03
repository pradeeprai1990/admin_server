const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "pradeep.9997@gmail.com",
      pass: "rjqvlobspzirzozo",
    },
  });

  module.exports={transporter}