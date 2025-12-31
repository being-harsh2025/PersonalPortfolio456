
import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { DB } from '../services/database';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call and save to our local "Inbox"
    setTimeout(() => {
      DB.addContactMessage(
        formData.name,
        formData.email,
        formData.subject,
        formData.message
      );
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4">Connect</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Let's build something <span className="gradient-text">amazing</span> together.</h3>
            <p className="text-zinc-500 text-lg mb-10 max-w-lg">
              Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:harsh.shrivastav911@gmail.com"
                className="flex items-center gap-5 p-4 glass rounded-2xl border border-zinc-800 group hover:border-blue-500/50 transition-colors block cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500 uppercase">Email Me</div>
                  <div className="text-lg font-bold">harsh.shrivastav911@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://www.google.com/maps/search/?api=1&query=Gwalior,+MP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-4 glass rounded-2xl border border-zinc-800 group hover:border-green-500/50 transition-colors block cursor-pointer"
              >
                <div className="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500 uppercase">Location</div>
                  <div className="text-lg font-bold">Gwalior, MP</div>
                </div>
              </a>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-zinc-800">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-4 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                  <CheckCircle size={48} />
                </div>
                <h4 className="text-3xl font-bold">Message Sent!</h4>
                <p className="text-zinc-500">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-500 uppercase px-1">Full Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-500 uppercase px-1">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase px-1">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option>General Inquiry</option>
                    <option>Project Collaboration</option>
                    <option>Internship Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase px-1">Your Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-800 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/20"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
