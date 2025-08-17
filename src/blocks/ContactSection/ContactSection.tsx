import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    const subject = `New message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message.replace(/\n/g, '%0D%0A')}`;
    
    // Open default email client
    window.location.href = `mailto:ianutkarsh@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Clear the form
    setFormData({ name: '', email: '', message: '' });
    setStatus('Redirecting to your email client...');
  };

  return (
    <section id="contact-section" className="w-full min-h-[75vh] bg-black py-16 relative z-10">
      <div className="mb-16">
        <h2 
          className="text-4xl md:text-6xl font-normal tracking-wider ml-[87px] text-red-600 mb-4" 
          style={{ 
            fontFamily: '"Diplomata SC"',
            letterSpacing: '0.1em'
          }}
        >
          CONTACT
        </h2>
        <hr className="w-full border-red-600" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-red-600 font-mono text-sm mb-2">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black border-b border-red-600/50 text-red-600 font-mono py-2 px-1 focus:outline-none focus:border-red-600 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-red-600 font-mono text-sm mb-2">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black border-b border-red-600/50 text-red-600 font-mono py-2 px-1 focus:outline-none focus:border-red-600 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-red-600 font-mono text-sm mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-black border border-red-600/50 text-red-600 font-mono py-2 px-3 focus:outline-none focus:border-red-600 transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 border border-red-600 text-red-600 font-mono hover:bg-red-600 hover:text-black transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </div>

            {status && (
              <p className={`font-mono text-sm mt-4 ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
