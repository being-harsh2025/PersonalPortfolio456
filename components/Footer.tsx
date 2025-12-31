
import React, { useState } from 'react';
import { Terminal, Github, Linkedin, Key } from 'lucide-react';
import AdminInbox from './AdminInbox';

const Footer: React.FC = () => {
  const [showInbox, setShowInbox] = useState(false);

  return (
    <footer className="py-12 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
            <Terminal size={16} className="text-zinc-400" />
          </div>
          <span className="font-bold text-zinc-400">PORTFOLIO<span className="text-zinc-600">.</span></span>
        </div>
        
        <div className="text-sm text-zinc-600 font-mono">
          &copy; {new Date().getFullYear()} Harsh Shrivastav. Built with React & Gemini.
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setShowInbox(true)}
            className="text-zinc-800 hover:text-zinc-600 transition-colors flex items-center gap-2 text-xs font-mono uppercase tracking-widest"
          >
            <Key size={14} /> Dev Portal
          </button>
          <a 
            href="https://github.com/being-harsh2025" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-600 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/harsh-shrivastav-16883434a/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-600 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {showInbox && <AdminInbox onClose={() => setShowInbox(false)} />}
    </footer>
  );
};

export default Footer;