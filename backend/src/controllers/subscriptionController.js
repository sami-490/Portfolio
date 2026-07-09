const nodemailer = require('nodemailer');

exports.subscribe = async (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // We only attempt to send an email if credentials are provided in .env
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Standard gmail service, can be changed if needed
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"Sami Ullah" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Welcome to my Portfolio!',
        text: `Hello,\n\nThank you for subscribing to my portfolio updates! I'll keep you posted on my latest work and thoughts on technology and business.\n\nBest regards,\nSami Ullah\nDate: 1 Jan 2025`,
        html: `<p>Hello,</p><p>Thank you for subscribing to my portfolio updates! I'll keep you posted on my latest work and thoughts on technology and business.</p><br><p>Best regards,<br><strong>Sami Ullah</strong><br>Date: 1 Jan 2025</p>`,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.warn('EMAIL_USER and EMAIL_PASS are not set in .env. Subscription was recorded but email not sent.');
    }

    res.status(200).json({ message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
};
