
import React from 'react';
import { USER_DATA } from '../constants';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [imageError, setImageError] = React.useState(false);

  // Helper to get color-specific classes for the badges
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'border-blue-500/20 shadow-blue-500/10 hover:border-blue-500/50';
      case 'purple': return 'border-purple-500/20 shadow-purple-500/10 hover:border-purple-500/50';
      case 'emerald': return 'border-emerald-500/20 shadow-emerald-500/10 hover:border-emerald-500/50';
      case 'orange': return 'border-orange-500/20 shadow-orange-500/10 hover:border-orange-500/50';
      default: return 'border-zinc-800';
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] animate-pulse delay-700"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-1 md:order-1">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass border border-zinc-800 text-xs font-mono text-blue-400 mb-6 tracking-wider uppercase">
            🚀 Open for Internships & Projects
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Hi, I'm <span className="gradient-text">{USER_DATA.name.split(' ')[0]}</span>.
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-400 mb-8">
            Building digital experiences that <span className="text-white border-b-2 border-blue-500">matter.</span>
          </h2>
          <p className="text-lg text-zinc-500 max-w-lg mb-10 leading-relaxed">
            {USER_DATA.bio}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl flex items-center gap-2 transition-all shadow-xl shadow-blue-500/20">
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-2">
              <a 
                href="https://github.com/being-harsh2025" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center rounded-xl glass border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/harsh-shrivastav-16883434a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center rounded-xl glass border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:harsh.shrivastav911@gmail.com" 
                className="w-12 h-12 flex items-center justify-center rounded-xl glass border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="order-2 md:order-2 flex justify-center items-center relative">
          <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]">
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-[60px] blur-[80px] -z-10 animate-pulse"></div>
            
            {/* Image Frame */}
            <div className="absolute inset-0 bg-zinc-900 rounded-[50px] border border-zinc-800 overflow-hidden shadow-2xl group cursor-pointer transition-all duration-500 hover:border-blue-500/30">
               {!imageError ? (
                 <img 
                   src={USER_DATA.profileImage} 
                   alt={USER_DATA.name} 
                   onError={() => setImageError(true)}
                   className="w-full h-full object-cover opacity-100 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                 />
               ) : (
                 <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-6xl font-bold text-zinc-600">
                    {USER_DATA.name.charAt(0)}
                 </div>
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
               
               {/* Status Badge */}
               <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-3xl border border-white/5 shadow-xl transition-all duration-500 group-hover:bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)] animate-pulse"></div>
                    <span className="text-[10px] font-mono text-zinc-200 uppercase tracking-widest font-bold">Currently Innovating in Gwalior</span>
                  </div>
               </div>
            </div>
            
            {/* Floating Badges */}
            {/* Top-Right Badge: Sparkles */}
            <div className={`absolute -top-4 -right-4 glass p-4 rounded-3xl border shadow-2xl animate-float transition-all duration-300 hover:scale-125 ${getColorClasses('blue')}`}>
               <Sparkles size={28} className="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] animate-pulse" />
               <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full animate-ping"></span>
            </div>

            {/* Middle-Left Badge: Laptop Emoji */}
            <div className={`absolute top-1/3 -left-10 glass p-5 rounded-3xl border shadow-2xl animate-float delay-500 transition-all duration-300 hover:scale-125 ${getColorClasses('purple')}`}>
               <span className="text-2xl md:text-3xl" role="img" aria-label="laptop">💻</span>
            </div>

            {/* Bottom-Right Badge: Rocket Emoji */}
            <div className={`absolute -bottom-4 right-10 glass p-4 rounded-3xl border shadow-2xl animate-float delay-1000 transition-all duration-300 hover:scale-125 ${getColorClasses('orange')}`}>
               <span className="text-2xl md:text-3xl" role="img" aria-label="rocket">🚀</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
