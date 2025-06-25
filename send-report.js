const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, // e.g., 'gmail'
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_TO, // comma separated if multiple
  subject: 'Playwright Test Report',
  text: 'Please find the attached Playwright HTML test report.',
  attachments: [
    {
      filename: 'report.html',
      path: path.join(__dirname, 'playwright-report', 'index.html'),
    },
  ],
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
}); 