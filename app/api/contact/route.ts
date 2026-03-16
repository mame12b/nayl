import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // This is the SENDER email (mame34005@gmail.com)
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    });

    // Email content
    const mailOptions = {
      from: `"Nayl Trading Contact" <${process.env.EMAIL_USER}>`, // Sender
      to: 'mame4005@gmail.com', // RECEIVER - where you want to get messages
      replyTo: email, // The person who filled the form (so you can reply to them)
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0; padding: 20px; background-color: #f3f4f6; border-radius: 8px;">
            <p><strong style="color: #4b5563;">Name:</strong> ${name}</p>
            <p><strong style="color: #4b5563;">Email:</strong> ${email}</p>
            <p><strong style="color: #4b5563;">Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">This message was sent from your Nayl Trading website contact form.</p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        ---
        This message was sent from your Nayl Trading website contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}