import nodemailer from 'nodemailer';


function generateRandomCode(length = 6) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
  }
  return result;
}

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtppro.zoho.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
      user: 'dreamindexceo@gmail.com', // your Zoho email
      pass: '97i4PZkQBumq'
  }
});

var mailOptions = {
  from: '"Dream Index" contact@dreamindex.org',
  to: 'kurlylajara@gmail.com',
  subject: 'Consultation Form',
  html: '<!DOCTYPE html><html><head><title>Thank You from Dream Index</title><style>body{background-color:#000;color:#fff;font-family:Arial,sans-serif;margin:0;padding:0;text-align:center}.container{margin:0 auto;padding:20px;max-width:600px;background:url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?fit=crop&w=600&h=600&q=80") no-repeat center center;background-size:cover;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,0.5)}.content{background-color:rgba(0,0,0,0.7);padding:20px;border-radius:10px}h1{color:#ffd700}p{color:#d3d3d3;line-height:1.5}a{color:#ffd700;text-decoration:none;font-weight:bold}.button{display:inline-block;padding:10px 20px;margin-top:20px;background-color:#ffd700;color:#000;text-transform:uppercase;border-radius:5px;text-decoration:none}.button:hover{background-color:#ffa500}</style></head><body><div class="container"><div class="content"><h1>Thank You!</h1><p>Dear Client,</p><p>Thank you for choosing Dream Index as your method of web creation. We are thrilled to have you on board and look forward to creating something amazing together.</p><p>To get started, please fill out our consultation form by clicking the link below:</p><p>Your access code is: <strong><span id="code">'+generateRandomCode()+'</span></strong>. Please enter this code in the form.</p><p><a class="button" href="http://localhost:3000/commission/form">Consultation Form</a></p><p>If you have any questions, feel free to reply to this email. We are always here to help!</p><p>Best Regards,<br>Dream Index Team</p></div></div></body></html>'
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});