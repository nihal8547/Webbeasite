import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nihalbabumpvml@gmail.com',
        pass: 'pbcb cstr hlzg lxha'
    }
});

// Mock Data
const services = [
    { id: 1, title: 'Digital Marketing', desc: 'SEO, AEO, AIO strategies to boost your visibility.' },
    { id: 2, title: 'Custom Website Development', desc: 'Website redesigns, new features, and robust web apps.' },
    { id: 3, title: 'App Development', desc: 'Native and cross-platform mobile applications.' },
    { id: 4, title: 'Custom ERP Development', desc: 'Streamline your business with custom ERP solutions.' },
    { id: 5, title: 'E-Commerce Development', desc: 'Scalable online stores.' },
    { id: 6, title: 'Social Media Handling', desc: 'Engage your audience with expert social media management.' }
];

// Routes
app.get('/api/services', (req, res) => {
    res.json(services);
});

app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please fill all required fields.' });
    }

    try {
        // Email 1: Send Lead to Admin (webbeaqa@gmail.com)
        await transporter.sendMail({
            from: '"Webbea Website" <nihalbabumpvml@gmail.com>',
            to: 'webbeaqa@gmail.com',
            subject: `New Contact Form Lead: ${subject || 'No Subject'}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #111827;">New Contact Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <div style="margin-top: 20px; padding: 15px; border-left: 4px solid #6366f1; background: #f8fafc;">
                        <strong>Message:</strong><br><br>
                        ${message.replace(/\n/g, '<br>')}
                    </div>
                </div>
            `
        });

        // Email 2: Auto-reply "Thank You" to the User
        await transporter.sendMail({
            from: '"Webbea" <nihalbabumpvml@gmail.com>',
            to: email,
            subject: 'Thank you for contacting Webbea!',
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #111827;">Hello ${name},</h2>
                    <p>Thank you for getting in touch with us at Webbea. We have received your message and our team will review it and get back to you shortly.</p>
                    <br>
                    <p style="color: #555;"><strong>Your Message:</strong></p>
                    <blockquote style="margin: 0; padding: 15px; border-left: 4px solid #e5e7eb; background: #f9fafb; color: #4b5563;">
                        ${message.replace(/\n/g, '<br>')}
                    </blockquote>
                    <br>
                    <p>Best Regards,</p>
                    <p><strong>The Webbea Team</strong><br><a href="https://webbea.qa" style="color: #6366f1;">webbea.qa</a></p>
                </div>
            `
        });

        res.json({ success: true, message: 'Message sent successfully! Please check your email for confirmation.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend Server running on http://localhost:${PORT}`);
});
