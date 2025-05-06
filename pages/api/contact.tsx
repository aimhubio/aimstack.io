// pages/api/contact.tsx
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body;

  try {
    // Here you would typically:
    // 1. Validate the input
    // 2. Send an email notification
    // 3. Store the message in a database

    // For now, we'll just return success
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error sending message' });
  }
}