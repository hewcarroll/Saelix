import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface ContactFormProps {
  id?: string;
}

const INTEREST_AREAS = [
  'CCTV Inspections',
  'Work Orders & Dispatch',
  'GIS Asset Management',
  'Regulatory Reporting',
];

const ContactForm: React.FC<ContactFormProps> = ({ id }) => {
  const [form, setForm] = useState({ name: '', organization: '', role: '', email: '' });
  const [interests, setInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const interestLine = interests.length > 0
      ? `\nInterested in: ${interests.join(', ')}`
      : '';
    const subject = encodeURIComponent(`Demo Request from ${form.name} at ${form.organization}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganization: ${form.organization}\nRole: ${form.role}\nEmail: ${form.email}${interestLine}\n\nI'd like to book a 30-minute demo of Saelix Slate.`
    );
    window.location.href = `mailto:${COMPANY_INFO.contactEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleInterest = (area: string) => {
    setInterests(prev =>
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  if (submitted) {
    return (
      <div id={id} className="contact-form-wrapper">
        <div className="contact-thankyou">
          <CheckCircle size={48} style={{ color: '#10B981', marginBottom: '1rem' }} />
          <h3 className="contact-form-title">Thank You!</h3>
          <p className="contact-form-subtitle">
            Your email client should have opened with a pre-filled demo request.
            If it didn't, you can reach us directly at{' '}
            <a href={`mailto:${COMPANY_INFO.contactEmail}`} style={{ color: '#0066CC' }}>{COMPANY_INFO.contactEmail}</a>.
          </p>
          <p style={{ fontSize: '14px', color: '#6B7280', marginTop: '1.5rem' }}>
            We'll get back to you within one business day to schedule your demo.
          </p>
          <button
            className="btn btn-secondary"
            onClick={() => { setSubmitted(false); setForm({ name: '', organization: '', role: '', email: '' }); setInterests([]); }}
            style={{ marginTop: '1.5rem' }}
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className="contact-form-wrapper">
      <h3 className="contact-form-title">Book a 30-Minute Demo</h3>
      <p className="contact-form-subtitle">See how Saelix Slate works for your team.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required className="contact-input" />
        <input type="text" name="organization" placeholder="Organization" value={form.organization} onChange={handleChange} required className="contact-input" />
        <input type="text" name="role" placeholder="Your role" value={form.role} onChange={handleChange} required className="contact-input" />
        <input type="email" name="email" placeholder="Email address" value={form.email} onChange={handleChange} required className="contact-input" />
        <div className="contact-interests">
          <p className="contact-interests-label">What are you most interested in?</p>
          <div className="contact-interests-grid">
            {INTEREST_AREAS.map((area) => (
              <label key={area} className={`contact-interest-chip ${interests.includes(area) ? 'selected' : ''}`}>
                <input
                  type="checkbox"
                  checked={interests.includes(area)}
                  onChange={() => toggleInterest(area)}
                  className="contact-interest-checkbox"
                />
                {area}
              </label>
            ))}
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-lg contact-submit">
          <Send size={18} />
          Book a Demo
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
