
import React from 'react';
import { USER_DATA } from '../constants';

const Skills: React.FC = () => {
  // Duplicate the skills array to create a seamless infinite loop effect
  const doubledSkills = [...USER_DATA.skills, ...USER_DATA.skills];

  return (
    <section id="skills" className="py-24 bg-zinc-950/50 overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="max-w-xl">
          <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Technical Arsenal</h3>
          <p className="text-zinc-500 text-lg">
            A continuous track of tools and technologies I've mastered to build high-performance digital products.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* The sliding track */}
        <div className="flex animate-scroll whitespace-nowrap py-4">
          {doubledSkills.map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`} 
              className="inline-block mx-4"
            >
              <div className="w-[280px] h-[140px] bg-[#121212] rounded-[2rem] border border-zinc-900 p-6 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center p-2 border border-zinc-800 shadow-inner overflow-hidden">
                    {skill.icon.startsWith('http') ? (
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110" 
                      />
                    ) : (
                      <span className="text-xl">{skill.icon}</span>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{skill.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest font-bold">Category:</span>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold px-2 py-0.5 bg-zinc-900 rounded-md border border-zinc-800">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays for the fade effect at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
};

export default Skills;
