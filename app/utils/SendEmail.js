import nodemailer from 'nodemailer';
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function generateRandomCode(length = 6) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  const codeCheck = await prisma.codes.findMany({
    where: {
      AccessCode: result
    }
  });

  if (codeCheck.length) {
    console.log('Code already exists, retrying...');
    return await generateRandomCode(length);  // Ensure you return the result of the recursive call
  } else {
    console.log('New Code Generated');
    return result;
  }
}

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtppro.zoho.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL, // your Zoho email
    pass: process.env.EMAIL_PASS
  }
});

export async function FormLink(email) {
  // Check if the email is provided
  if (!email) {
    console.error("No email address provided");
    return;
  }

  const code = await generateRandomCode();
  console.log("Generated code: ", code);

  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Dream Index" <contact@dreamindex.org>',
      to: email,  // Ensure that this email is valid and passed correctly
      subject: 'Consultation Form',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Thank You from Dream Index</title>
          <style>
            body { background-color: #000; color: #fff; font-family: Arial, sans-serif; margin: 0; padding: 0; text-align: center; }
            .container { margin: 0 auto; padding: 20px; max-width: 600px; background: url("https://dreamindex.org/imgs/starry_background.png") center center; background-color: #000; background-size: cover; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.5); }
            .content { background-color: rgba(0,0,0,0.7); padding: 20px; border-radius: 10px; }
            h1 { 
              background: linear-gradient(to bottom, #e252d8 10%, #6ecbf5 100%);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent; 
            }
            p { color: #d3d3d3; line-height: 1.5; }
            a { text-decoration: none; font-weight: bold; }
            .button { display: inline-block; padding: 10px 20px; margin-top: 20px; background: linear-gradient(to bottom, #e252d8 10%, #6ecbf5 100%); color: #000; text-transform: uppercase; border-radius: 5px; text-decoration: none; }
            .button:hover { background: #e252d8; transition: all 1s ease;}
            strong { font-size: x-large; color: #e252d8;}
          </style>
        </head>
        <body>
          <div class="container">
            <div class="content">
              <h1>Thank You!</h1>
              <p>Dear Client,</p>
              <p>Thank you for choosing Dream Index as your method of web creation. We are thrilled to have you on board and look forward to creating something amazing together.</p>
              <p>To get started, please fill out our consultation form by clicking the link below:</p>
              <p>Your access code is: <strong>${code}</strong>. Please copy & enter this code in the form.</p>
              <p><a class="button" href="http://dreamindex.org/consultation/form/section1">Consultation Form</a></p>
              <p>If you have any questions, feel free to reply to this email. We are always here to help!</p>
              <p>Best Regards,<br>Dream Index Team</p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email: ", error);
  }

  // Save the generated code to the database
  await prisma.codes.create({
    data: {
      AccessCode: code,
      Status: true
    }
  });
}
