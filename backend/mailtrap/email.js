import { VERIFICATION_EMAIL_TEMP, WELCOME_EMAIL_TEMP, PASSWORD_RESET_REQUEST_TEMP, RESET_SUCCESS_TEMP } from "./emailTemplate.js"
import { transporter, sender } from "./mailtrapConfig.js"

export const sendVerificationEmail= async (email, verificationToken) =>{

  
        /***
  try{

    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMP.replace("{verificationCode}", verificationToken),
      category: "Email Verification",
    })
     
  } catch (error){
    console.log("Error sending verification email", error)
    
  }
    **/
  const verificationEmail = {
  from: sender,
  to: email,
  subject: "Verify your email",
  html: VERIFICATION_EMAIL_TEMP.replace("{verificationCode}", verificationToken),
  
  };

  transporter.sendMail(verificationEmail, function(error, info){
    if (error) {
      console.log("Error sending email", error);
    } else {
      console.log('Email sent: ',  info.response);
    }
  });
    
    

}

export const sendWelcomeEmail = async (email, username) =>{

  //to get current year
  const date = new Date()
  const currentYear = date.getFullYear()
  
  const welcomeEmail = {
  from: sender,
  to: email,
  subject: "Welcome to Moores!",
  html: WELCOME_EMAIL_TEMP.replaceAll("{name}", username).replaceAll("{year}", currentYear),
  };

  transporter.sendMail(welcomeEmail, function(error, info){
    if (error) {
      console.log("Error sending email", error);
    } else {
      console.log('Email sent: ',  info.response);
    }
  });
  
}

export const sendPasswordResetEmail = async (email, resetUrl) =>{
  
  
  const passwordReset = {
  from: sender,
  to: email,
  subject: "Password reset",
  html: PASSWORD_RESET_REQUEST_TEMP.replace("{resetUrl}", resetUrl),
  };

  transporter.sendMail(passwordReset, function(error, info){
    if (error) {
      console.log("Error sending email", error);
    } else {
      console.log('Email sent: ',  info.response);
    }
  });
  
}

export const sendResetSuccessEmail = async (email) =>{
  
  
  const resetSuccess = {
  from: sender,
  to: email,
  subject: "Password Reset Successful ",
  html: RESET_SUCCESS_TEMP,
  };

  transporter.sendMail(resetSuccess, function(error, info){
    if (error) {
      console.log("Error sending email", error);
    } else {
      console.log('Email sent: ',  info.response);
    }
  });
  
  
} 