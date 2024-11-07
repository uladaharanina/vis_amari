import emailjs from '@emailjs/browser';
import { useState } from 'react';
import '../styles/ContanctForm.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    pronouns: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    services: 'Love Story',
    date: '',
    source: 'Instagram',
    about: ''
  });
  const [statusMessage, setStatusMessage] = useState({
    message: '',
    isError: false
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('');
    try {
      const result = await emailjs.send(
       'service_ienwkeh', 
        'template_0sbu4gt', 
        formData,
       'dkur3iWg5d537-5Nc'
      );
      setStatusMessage({ message: 'Message sent successfully!', isError: false })
    } catch (error) {
      alert(error);

      setStatusMessage({ message: 'Could not send the message', isError: true })
    }

    setInterval(() => {
      setStatusMessage('');

    }, 5000)
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} action="#">
      {statusMessage.message != '' ? <p id={statusMessage.isError ? "msg_error": "msg_note"}>{statusMessage.message}</p> : ''}
    
    <input type="text" id="fullname" name="fullname" placeholder="Your name" required   onChange={handleChange} value={formData.fullname}/>
    <input type="text" id="pronouns" name="pronouns" placeholder="Pronouns"    onChange={handleChange} value={formData.pronouns}/>
    <input type="email" id="email" name="email" placeholder="Email" required   onChange={handleChange} value={formData.email}/>
    <input type="tel" id="phone" name="phone" placeholder="Phone number" required   onChange={handleChange}  value={formData.phone}/>

    <label>How would you prefer to be contacted? *</label>
    <select name="contactMethod" required   onChange={handleChange} value={formData.contactMethod}>
      <option value="email">Email</option>
      <option value="text">Text</option>
    </select>

    <label htmlFor="services">What type of services are you interested in? *</label>
    <select id="services" name="services" required   onChange={handleChange}  value={formData.services}>
      <option value="Love Story">Love Story</option>
      <option value="Maternity">Maternity</option>
      <option value="Creative">Creative</option>
      <option value="Portrait">Portrait</option>
      <option value="Other">Other</option>
    </select>

    <label htmlFor="date">What is the date you would like to schedule your session? *</label>
    <input type="date" id="date" name="date" required  value={formData.date} onChange={handleChange} />

    <label htmlFor="source">How did you find Vis Amari Photography? *</label>
    <select id="source" name="source" required  value={formData.source}  onChange={handleChange}>
      <option value="Instagram">Instagram</option>
      <option value="Facebook">Facebook</option>
      <option value="TikTok">TikTok</option>
      <option value="Threads">Threads</option>
      <option value="friend_referral">Friend Referral</option>
    </select>

    <label htmlFor="about">Share your story with me!</label>
    <textarea id="about" name="about" rows="4" placeholder="Tell me a bit about yourself and what you're looking for from me!" required   value={formData.about}  onChange={handleChange}></textarea>

    <p>Submitting an inquiry opts you in for text message and email communication from Vis Amari Photography.</p>
    <button type="submit" id="form-submit-btn">Submit Inquiry</button>

  </form>

  );
};

export default Contact;