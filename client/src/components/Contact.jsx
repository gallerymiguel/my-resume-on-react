import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
  //Validate Email Before Sending
  if (!email) {
    setError("Email is required");
    return;
  }

  //Use Regex to Check Email Format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address");
    return;
  }

  //Clear Errors if Email is Valid
  setError("");

    console.log("📨 Form submitted!"); // ✅ Check if this appears in the console
  
    setStatus("Sending...");
  
    try {
      const response = await fetch("https://my-resume-on-react-2.onrender.com/contact", { //Change this if you're using locally
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      console.log("🔄 Sent request to server!"); // ✅ Check if this appears
  
      const result = await response.json();
      
      if (response.ok) {
        console.log("✅ Message Sent Successfully!");
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("❌ Error Response from Server:", result.error);
        setStatus("Error: " + result.error);
      }
    } catch (error) {
      console.error("❌ Fetch Error:", error);
      setStatus("Failed to send message. Try again later.");
    }
  };
  

  return (
    <section className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && <span className="error">{error}</span>}
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-submit-button">Submit</button>
        {status && <p className="status">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
