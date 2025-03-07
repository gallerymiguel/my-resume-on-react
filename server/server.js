require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://my-resume-on-react.onrender.com", // ✅ Allow your frontend URL
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use((req, res, next) => {
  console.log(`🔗 Request received: ${req.method} ${req.url}`);
  next();
});


// Yahoo Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: "Yahoo",
  auth: {
    user: process.env.EMAIL_USER, // Your Yahoo email
    pass: process.env.EMAIL_PASS, // Your App Password (no spaces)
  },
  tls: {
    rejectUnauthorized: false, // ✅ Ignore self-signed certificate errors
  }
});


// Contact Form Route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // You receive the email
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email Sent Successfully!");
    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error Sending Email:", error);
    res.status(500).json({ error: "Failed to send message." });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
