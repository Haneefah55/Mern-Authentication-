import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
//import { MailtrapClient } from "mailtrap"
dotenv.config()
/***

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN
});






client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);
  
**/
export const sender = '"Moores" <process.env.USER_EMAIL>'

export const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use 'gmail' or any other service, or specify custom SMTP settings
  auth: {
    user: process.env.USER_EMAIL, // Your email
    pass: process.env.USER_PASSWORD, // Your email password or app password
  },
});
/***
const mailOptions = {
  from: sender,
  to: 'ummabdillah202@gmail.com',
  subject: "Password reset successful",
  html: RESET_SUCCESS_TEMP
  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

**/