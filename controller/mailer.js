const nodeMailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'khallilbailey@gmail.com',
    pass: 'yourpassword'
  }
});
