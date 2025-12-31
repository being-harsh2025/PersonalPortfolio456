
import React from 'react';
import { USER_DATA } from '../constants';
import { GraduationCap, Calendar, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-sm font-mono text-green-500 uppercase tracking-widest mb-4">Background</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Journey So Far</h3>
            <p className="text-zinc-500 text-lg mb-10">
              I believe in lifelong learning. My academic path is complemented by constant self-study and real-world project builds.
            </p>
            
            <div className="space-y-12">
              {USER_DATA.educationHistory.map((item, index) => (
                <div key={index} className="relative pl-8 border-l border-zinc-800 py-2">
                  <div className="absolute top-0 -left-4 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <GraduationCap size={16} className="text-blue-500" />
                  </div>
                  <div className="mb-2 flex items-center gap-2 text-zinc-400 font-mono text-sm">
                    <Calendar size={14} /> {item.year}
                  </div>
                  <h4 className="text-2xl font-bold mb-1">{item.degree}</h4>
                  <div className="text-blue-500 font-medium mb-4">
                    {item.school.includes("Amity") ? (
                      <a 
                        href="https://www.amity.edu/gwalior/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                      >
                        {item.school}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      item.school
                    )}
                  </div>
                  <div className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-zinc-500">
                        <CheckCircle2 size={16} className="mt-1 text-zinc-700 shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sticky top-32 glass p-6 md:p-8 rounded-3xl border border-zinc-800 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 text-zinc-800/20 -z-10">
               <GraduationCap size={150} />
             </div>
             <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
               <Sparkles className="text-blue-500" size={20} />
               Core Vision
             </h4>
             
             <div className="space-y-6">
               {/* Updated Image Section to use User Photo for branding */}
               <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-zinc-800 shadow-2xl group">
                 <img 
                   src={USER_DATA.profileImage} 
                   alt="Innovating" 
                   className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                 <div className="absolute bottom-4 left-5">
                    <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest font-bold px-2 py-1 bg-blue-500/10 rounded border border-blue-500/20">
                      System Architecture
                    </span>
                 </div>
               </div>

               {/* One Line Thought */}
               <p className="text-lg md:text-xl font-semibold text-white leading-tight tracking-tight italic">
                 "Code is the canvas where logic meets creativity to solve real-world complexities."
               </p>

               <div className="pt-2 grid grid-cols-2 gap-4">
                 <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 group hover:border-blue-500/30 transition-colors">
                   <div className="text-2xl font-bold text-white mb-1">2028</div>
                   <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider font-bold">Graduation Year</div>
                 </div>
                 <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 group hover:border-green-500/30 transition-colors">
                   <div className="text-2xl font-bold text-white mb-1">A</div>
                   <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider font-bold">HS Grade</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
