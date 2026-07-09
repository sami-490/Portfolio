const nodemailer = require('nodemailer');

exports.getAll = async (req, res) => { res.json({ message: 'Get all' }); };
exports.getOne = async (req, res) => { res.json({ message: 'Get one' }); };

exports.create = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please provide name, email, and message' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Send it to your own email
      subject: `New Portfolio Message from ${name}`,
      text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Message sent successfully to', process.env.EMAIL_USER);

    res.status(200).json({ 
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send message', error: error.message });
  }
};

exports.update = async (req, res) => { res.json({ message: 'Update' }); };
exports.delete = async (req, res) => { res.json({ message: 'Delete' }); };