// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  success: boolean;
  message: string;
};

// Number of retries and delay between retries (in milliseconds)
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

// Helper function to add delay between retries
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, surname, company, role, email, interestedIn, comments } = req.body;

  // Create the transporter with Gmail credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Get recipient list from environment variables
  // Format should be comma-separated email addresses
  const recipientList = process.env.CONTACT_EMAILS || process.env.GMAIL_USER;
  const recipients = recipientList.split(',').map(email => email.trim());

  // Email content
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: recipients,
    subject: `New Contact Form Submission: ${interestedIn}`,
    html: `
      <h1>New Contact Form Submission</h1>
      <h2>Contact Details</h2>
      <p><strong>Name:</strong> ${name} ${surname}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Interested In:</strong> ${interestedIn}</p>
      <h2>Comments</h2>
      <p>${comments || 'No comments provided'}</p>
    `,
  };

  // Implement retry logic
  let currentRetry = 0;
  let lastError: any = null;

  while (currentRetry < MAX_RETRIES) {
    try {
      // Send email
      await transporter.sendMail(mailOptions);

      // If successful, return immediately
      return res.status(200).json({
        success: true,
        message: `Email sent successfully to ${recipients.length} recipient(s)`
      });
    } catch (error) {
      lastError = error;
      console.error(`Error sending email (attempt ${currentRetry + 1}/${MAX_RETRIES}):`, error);

      // Increment retry counter
      currentRetry++;

      // If we've reached max retries, break out of the loop
      if (currentRetry >= MAX_RETRIES) break;

      // Wait before next retry
      await sleep(RETRY_DELAY * currentRetry); // Increasing delay with each retry
    }
  }

  // If we get here, all retries failed
  console.error('All email send attempts failed:', lastError);
  return res.status(500).json({
    success: false,
    message: `Failed to send email after ${MAX_RETRIES} attempts. Please try again later.`
  });
}