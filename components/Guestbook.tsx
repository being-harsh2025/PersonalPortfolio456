
import React, { useState, useEffect } from 'react';
import { DB } from '../services/database';
import { GuestbookEntry } from '../types';
import { UserPlus, MessageSquareQuote, ShieldCheck } from 'lucide-react';

const Guestbook: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setEntries(DB.getGuestbook());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    // Simulate DB write latency
    setTimeout(() => {
      const updated = DB.addGuestbookEntry(name, message);
      setEntries(updated);
      setName('');
      setMessage('');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="guestbook" className="py-24 relative bg-zinc-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-mono text-pink-500 uppercase tracking-widest mb-4">Community</h2>
            <h3 className="text-4xl font-bold mb-6">Guestbook</h3>
            <p className="text-zinc-500 mb-8">
              Leave a vouch or a comment! This data is stored in our local database system to simulate a persistent backend.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 glass p-6 rounded-3xl border border-zinc-800">
              <div>
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-pink-500 transition-colors"
                  required
                />
              </div>
              <div>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave a message..."
                  rows={3}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-pink-500 transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-lg shadow-pink-500/20"
              >
                {isSubmitting ? 'Syncing...' : <><UserPlus size={18} /> Sign Guestbook</>}
              </button>
            </form>
            
            <div className="mt-8 flex items-center gap-3 text-zinc-600 text-xs font-mono uppercase">
              <ShieldCheck size={14} className="text-green-500" />
              Verified Local Storage DB Active
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {entries.map((entry) => (
              <div key={entry.id} className="glass p-6 rounded-2xl border border-zinc-800 flex flex-col animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full ${entry.avatarColor} flex items-center justify-center text-white font-bold text-sm shadow-inner`}>
                    {entry.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{entry.name}</h4>
                    <p className="text-[10px] text-zinc-500 uppercase">{entry.date}</p>
                  </div>
                  <MessageSquareQuote size={18} className="ml-auto text-zinc-800" />
                </div>
                <p className="text-zinc-400 text-sm italic leading-relaxed">
                  "{entry.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
