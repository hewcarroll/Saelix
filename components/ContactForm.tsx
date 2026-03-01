import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface ContactFormProps {
  id?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ id }) => {
  const [form, setForm] = useState({ name: '', organization: '', role: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demo Request from ${form.name} at ${form.organization}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganization: ${form.organization}\nRole: ${form.role}\nEmail: ${form.email}\n\nI'd like to book a 30-minute demo of Saelix Slate.`
    );
    window.location.href = `mailto:${COMPANY_INFO.contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div id={id} className="contact-form-wrapper">
      <h3 className="contact-form-title">Book a 30-Minute Demo</h3>
      <p className="contact-form-subtitle">See how Saelix Slate works for your team.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required className="contact-input" />
        <input type="text" name="organization" placeholder="Organization" value={form.organization} onChange={handleChange} required className="contact-input" />
        <input type="text" name="role" placeholder="Your role" value={form.role} onChange={handleChange} required className="contact-input" />
        <input type="email" name="email" placeholder="Email address" value={form.email} onChange={handleChange} required className="contact-input" />
        <button type="submit" className="btn btn-primary btn-lg contact-submit">
          <Send size={18} />
          Book a Demo
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
