
import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const resumeLink = "https://drive.google.com/file/d/19zt2J6MITvjlgqZ4so7yU0Rlvlnl_2G9/view?usp=sharing";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 relative flex justify-between items-center">
        
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-3 z-10">
          <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white font-mono font-bold text-lg leading-none select-none">
              &gt;_
            </span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white flex items-center">
            PORTFOLIO<span className="text-[#2563EB]">.</span>
          </span>
        </a>

        {/* Desktop Nav Links - Centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button Section - Redirect to Resume Link */}
        <div className="hidden md:flex items-center z-10">
          <a 
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#171717] border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-white text-sm font-bold rounded-full shadow-lg transition-all active:scale-95 flex items-center gap-2 group cursor-pointer"
          >
            <FileText size={14} className="text-zinc-500 group-hover:text-blue-400 transition-colors" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-zinc-950 border-b border-zinc-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[32rem] py-8' : 'max-h-0'}`}>
        <div className="flex flex-col items-center space-y-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-[#171717] border border-zinc-800 text-white text-center font-bold rounded-full transition-all flex items-center justify-center gap-2"
          >
            <FileText size={18} />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;