
import React, { useState } from 'react';
import { USER_DATA } from '../constants';
import { Award, Calendar, ExternalLink, X, FileCheck, ShieldCheck } from 'lucide-react';
import { Certificate } from '../types';

const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop';
  };

  return (
    <section id="certificates" className="py-16 md:py-20 relative bg-zinc-950/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em] mb-3 font-bold">Credentials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Professional Certifications</h3>
          <p className="text-zinc-500 text-sm max-w-xl mx-auto">
            Verified technical achievements across diverse IT domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {USER_DATA.certificates.map((cert) => (
            <div 
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer glass border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/5 flex flex-col bg-zinc-900/30"
            >
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img 
                  src={cert.imageUrl} 
                  alt={cert.title} 
                  onError={handleImageError}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent"></div>
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 bg-emerald-500/20 backdrop-blur-md rounded-lg flex items-center justify-center text-emerald-500 border border-emerald-500/30">
                    <Award size={16} />
                  </div>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2 text-zinc-500 font-mono text-[9px] uppercase tracking-widest font-bold">
                  <Calendar size={10} /> {cert.date} | {cert.issuer}
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors leading-tight">
                  {cert.title}
                </h4>
                <p className="text-zinc-500 text-[13px] line-clamp-2 leading-relaxed mb-4">
                  {cert.details}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[9px] font-bold text-emerald-500/60 group-hover:text-emerald-500 transition-colors uppercase tracking-[0.2em]">
                  View Details <ExternalLink size={10} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed View Modal (Same Page) */}
      {selectedCert && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            onClick={() => setSelectedCert(null)}
          ></div>
          
          <div className="relative w-full max-w-4xl glass border border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500 flex flex-col md:flex-row max-h-[85vh]">
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 z-20 w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-all shadow-xl"
            >
              <X size={20} />
            </button>

            <div className="w-full md:w-1/2 bg-zinc-900 relative">
               <img 
                 src={selectedCert.imageUrl} 
                 alt={selectedCert.title} 
                 onError={handleImageError}
                 className="w-full h-full object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 md:bg-gradient-to-r md:from-transparent md:to-zinc-950/20"></div>
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-zinc-950/50 overflow-y-auto custom-scrollbar">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500/10 rounded-full text-emerald-500 text-[9px] font-bold uppercase tracking-widest mb-4 border border-emerald-500/20">
                  <ShieldCheck size={12} /> Verified Credential
                </div>
                <h4 className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight">{selectedCert.title}</h4>
                <p className="text-zinc-500 font-mono text-[11px] uppercase tracking-widest font-bold">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="relative pl-5">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600 rounded-full"></div>
                  <h6 className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-2 font-bold">Description</h6>
                  <p className="text-zinc-300 leading-relaxed text-sm whitespace-pre-wrap">
                    {selectedCert.details}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <FileCheck size={16} className="text-emerald-500 mb-2" />
                  <div className="text-[8px] font-mono text-zinc-500 uppercase font-bold">Verification</div>
                  <div className="text-[11px] font-bold">Authentic</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <Award size={16} className="text-blue-500 mb-2" />
                  <div className="text-[8px] font-mono text-zinc-500 uppercase font-bold">Status</div>
                  <div className="text-[11px] font-bold">Active</div>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedCert(null)}
                className="mt-8 w-full py-4 bg-white text-black font-extrabold rounded-xl text-[10px] uppercase tracking-widest hover:bg-zinc-200 transition-all active:scale-95 shadow-xl"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
