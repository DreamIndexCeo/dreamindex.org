import Agenda from "agenda";
import nodemailer from 'nodemailer';
import 'dotenv/config';

// MongoDB connection string form .env file
const MongoDB = process.env.DATABASE_URL;

// New agenda object
const agenda = new Agenda({
    db:{address: MongoDB, collection: 'agendaJobs'}
})

console.log('EMAIL:', process.env.EMAIL);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);


// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // your Zoho email
      pass: process.env.EMAIL_PASS
    },
  });

// defining the job for Email & SMS Meeting Reminder
agenda.define('meeting reminder', async (job) => {
    const { email } = job.attrs.data;
    

    const mailOptions = {
        from: '"Dream Index" <contact@dreamindex.org>',
        to: email,
        subject: 'Consultation Meeting Reminder - Dream Index LLC',
        text: 'Test',
    };

    try{
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${email}`)
    } catch (error) {
        console.log(`Failed to send email: ${error}`)
    }
})



//Scheduling the job to send at the enter Date
async function scheduleFormSubmission(email, date) {
    await agenda.start();
    await agenda.schedule(date, 'meeting reminder', {email});
    console.log(`Form Reminder scheduled for ${email} on ${date}`);
}

const sendDate = new Date('2024-10-20');  // Date to send the email

scheduleFormSubmission('kavinlajara@gmail.com', sendDate);


// Graceful shutdown
process.on('SIGTERM', async () => {
    await agenda.stop();
    process.exit(0);
});
