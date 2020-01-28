const nodeMailer = require('nodemailer');

module.exports.sendEmail = async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const package = {
    from: process.env.EMAIL,
    to: process.env.RECIEVING_EMAIL,
    subject: 'Portfolio Contact',
    text: `You have a message from ${firstName} ${lastName} at ${email}.
    
    ${message}`
  };

  await transporter.sendMail(package, function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).send({ err });
    } else {
      console.log(data);
      res.status(200).send({ data });
    }
  });
};
