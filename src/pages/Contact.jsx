import { useState } from 'react';

export default function Contact() {
  // Controlled form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // Validation state (derived)
  const isFormValid = 
    formData.name.trim().length > 0 && 
    formData.email.includes('@') && 
    formData.message.trim().length > 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert(`Thank you, ${formData.name}! Form submitted successfully.`);
      setFormData({ name: '', email: '', message: '' }); // Reset
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to connect, collaborate, or discuss a project, send a message below.</p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        
        {/* Button is disabled if form is invalid */}
        <button type="submit" disabled={!isFormValid} className={!isFormValid ? 'disabled' : ''}>
          Send Message
        </button>
      </form>
    </section>
  );
}