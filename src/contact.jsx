import React, { useState } from 'react';
import './contact.css';
import { NavBar } from './App';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const text = await response.text(); // get raw response
      let result;
  
      try {
        result = JSON.parse(text); // try to parse it
      } catch (e) {
        console.error('Could not parse response:', text); // helpful log
        throw new Error('Invalid server response');
      }
  
      if (response.ok) {
        alert('Thanks! Your message has been sent.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to send email');
      }
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };
  
  

  return (
    <div className='entire'>
    <NavBar/>
    <form className="styled-contact-form" onSubmit={handleSubmit}>
      <h1>Hello, nice to meet you!</h1>

      <label htmlFor="name">WHAT’S YOUR NAME?</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">
        WHAT’S YOUR EMAIL? <span className="required">*</span>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="phone" className="optional">WHAT’S YOUR PHONE NUMBER?</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <h2>If your project could talk, what would it say?</h2>

      <label htmlFor="message">
        YOUR MESSAGE <span className="required">*</span>
      </label>
      <textarea
        id="message"
        name="message"
        required
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit">Send</button>
    </form></div>
  );
};

export default Contact;
