import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Please provide name, email, and message' },
        { status: 400 }
      );
    }

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
      subject: `New Portfolio Message from ${name}`,
      text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Message sent successfully to', process.env.EMAIL_USER);

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Email error:', error);
    return NextResponse.json(
      { message: 'Failed to send message', error: error.message },
      { status: 500 }
    );
  }
}
