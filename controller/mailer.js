const nodeMailer = require('nodemailer');

module.exports.sendEmail = async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'khallilbailey@gmail.com',
      pass: 'yourpassword'
    }
  });
};
