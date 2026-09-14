import { useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export default function Contact() {
  // Controlled form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Validation state (derived)
  const isFormValid = 
    formData.name.trim().length > 0 && 
    formData.email.includes('@') && 
    formData.message.trim().length > 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || 'The server rejected this message.');
      }
      setStatus({ type: 'success', message: payload.message || 'Message sent successfully.' });
      setFormData({ name: '', email: '', message: '' }); // Reset
    } catch (requestError) {
      setStatus({ type: 'error', message: requestError.message || 'Unable to send your message.' });
    } finally {
      setIsSubmitting(false);
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
        <button type="submit" disabled={!isFormValid || isSubmitting} className={!isFormValid || isSubmitting ? 'disabled' : ''}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {status.message && <p role={status.type === 'error' ? 'alert' : 'status'}>{status.message}</p>}
      </form>
    </section>
  );
}