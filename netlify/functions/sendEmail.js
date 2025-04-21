const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  console.log('Function triggered with body:', event.body); // helpful log

  try {
    const { name, email, phone, message } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Send email error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email', details: error.message }),
    };
  }
};
