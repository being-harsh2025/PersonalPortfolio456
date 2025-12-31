
import React, { useState } from 'react';
import { USER_DATA } from '../constants';
import { Trophy, Calendar, Zap, Camera, X, ExternalLink, Award } from 'lucide-react';
import { TechEngagement as TechEngagementType } from '../types';

const TechEngagement: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TechEngagementType | null>(null);

  // Handle broken image fallbacks
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop';
  };

  return (
    <section id="engagement" className="py-24 relative overflow-hidden bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-sm font-mono text-orange-500 uppercase tracking-widest mb-4">Engagement</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Events & Hackathons</h3>
          <p className="text-zinc-500 text-lg max-w-2xl">
            A track record of high-impact technical events. Click any card to see full experience and gallery.
          </p>
        </div>

        {/* Improved Grid for 4 items: 2x2 layout on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {USER_DATA.engagements.map((item, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedEvent(item)}
              className="group cursor-pointer glass border border-zinc-800 rounded-[2rem] overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/5"
            >
              {/* Shorter Image (strictly 21:9 for a cinematic/compact look) */}
              <div className="aspect-[21/9] w-full overflow-hidden relative bg-zinc-900">
                <img 
                  src={item.images[0]} 
                  alt={item.event} 
                  onError={handleImageError}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-orange-600 text-[10px] font-bold font-mono text-white rounded-md uppercase tracking-widest shadow-lg">
                    {item.date}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Award size={14} className="text-orange-500" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">{item.event}</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">{item.title}</h4>
                <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed mb-6">
                  {item.experience}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-orange-500/70 group-hover:text-orange-500 transition-colors uppercase tracking-[0.2em]">
                  View Full Gallery <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedEvent(null)}
          ></div>
          
          <div className="relative w-full max-w-5xl glass border border-zinc-800 rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500">
            {/* Modal Close Button */}
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-8 right-8 z-20 w-12 h-12 bg-zinc-900/80 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:border-orange-500 transition-all backdrop-blur-sm"
            >
              <X size={24} />
            </button>

            <div className="grid lg:grid-cols-2 h-full max-h-[85vh] overflow-y-auto lg:overflow-hidden">
              {/* Photo Side */}
              <div className="p-8 lg:p-12 bg-zinc-950/50 lg:overflow-y-auto custom-scrollbar">
                <h5 className="text-xs font-mono text-orange-500 uppercase mb-8 flex items-center gap-2 tracking-[0.3em] font-bold">
                  <Camera size={16} /> Image Gallery
                </h5>
                <div className="space-y-6">
                  {selectedEvent.images.map((img, i) => (
                    <div key={i} className="group relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl aspect-video bg-zinc-900">
                      <img 
                        src={img} 
                        alt={`Gallery ${i}`} 
                        onError={handleImageError}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-8 glass rounded-[2rem] border border-zinc-800 bg-orange-500/5">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
                      <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest font-bold">Authenticated Profile</span>
                   </div>
                   <p className="text-sm text-zinc-400 leading-relaxed italic">
                     "This engagement reflects my commitment to hands-on learning and professional networking within the tech ecosystem."
                   </p>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-10">
                  <div className="flex items-center gap-4 text-orange-500 font-mono text-xs mb-6 uppercase tracking-widest font-bold">
                    <Trophy size={16} />
                    <span>{selectedEvent.event}</span>
                    <span className="text-zinc-800 font-normal">|</span>
                    <Calendar size={16} className="text-zinc-600" />
                    <span className="text-zinc-600">{selectedEvent.date}</span>
                  </div>
                  <h4 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-[1.1]">{selectedEvent.title}</h4>
                </div>

                <div className="space-y-10">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-600 rounded-full shadow-[0_0_10px_rgba(234,88,12,0.4)]"></div>
                    <h6 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.4em] mb-4 font-bold">Experience Gained</h6>
                    <p className="text-zinc-300 leading-relaxed text-xl font-medium">
                      {selectedEvent.experience}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 group hover:border-orange-500/30 transition-colors">
                      <Zap size={24} className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Impact Level</div>
                      <div className="text-lg font-bold text-white uppercase">Critical</div>
                    </div>
                    <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 group hover:border-blue-500/30 transition-colors">
                      <Award size={24} className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Designation</div>
                      <div className="text-lg font-bold text-white uppercase">{selectedEvent.title.split(' ')[0]}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-16">
                   <button 
                     onClick={() => setSelectedEvent(null)}
                     className="w-full py-5 bg-white hover:bg-zinc-200 text-black font-extrabold rounded-2xl transition-all flex items-center justify-center gap-3 text-sm tracking-widest uppercase shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                   >
                     Exit Showcase
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechEngagement;
