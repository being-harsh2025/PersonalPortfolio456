
import React from 'react';
import { X, Mail, Phone, Github, Linkedin, ExternalLink, Printer } from 'lucide-react';

interface ResumeModalProps {
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl max-h-[90vh] glass border border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-500">
        {/* Modal Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500">
              <Printer size={20} />
            </div>
            <h2 className="text-xl font-bold">Harsh's Resume</h2>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handlePrint}
              className="p-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-full transition-all"
              title="Print Resume"
            >
              <Printer size={20} />
            </button>
            <button 
              onClick={onClose}
              className="p-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-full transition-all"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Resume Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-12 bg-white text-zinc-900 custom-scrollbar selection:bg-blue-100">
          <div id="resume-document" className="max-w-[800px] mx-auto bg-white p-2">
            
            {/* Header */}
            <header className="text-center mb-10 border-b-2 border-zinc-100 pb-8">
              <h1 className="text-4xl font-extrabold text-blue-600 mb-4 tracking-tight">Harsh Shrivastav</h1>
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium text-zinc-600">
                <a href="mailto:harsh.shrivastav911@gmail.com" className="hover:text-blue-500 flex items-center gap-1.5">
                  <Mail size={14} /> harsh.shrivastav911@gmail.com
                </a>
                <span className="hidden md:inline text-zinc-300">|</span>
                <a href="tel:+919927429299" className="hover:text-blue-500 flex items-center gap-1.5">
                  <Phone size={14} /> (+91) 9927429299
                </a>
              </div>
              
              <div className="flex justify-center gap-6 mt-6">
                <a href="https://github.com/being-harsh2025" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-zinc-50 hover:bg-zinc-100 rounded-full transition-all text-xs font-bold border border-zinc-200">
                  <Github size={14} /> @being-harsh2025
                </a>
                <a href="https://www.linkedin.com/in/harsh-shrivastav-16883434a" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-zinc-50 hover:bg-zinc-100 rounded-full transition-all text-xs font-bold border border-zinc-200">
                  <Linkedin size={14} /> LinkedIn Profile
                </a>
              </div>
            </header>

            {/* Sections */}
            <div className="space-y-10">
              
              {/* Skills */}
              <section>
                <h2 className="text-lg font-bold text-blue-600 uppercase tracking-widest border-l-4 border-blue-600 pl-4 mb-6">Skills</h2>
                <ul className="grid md:grid-cols-2 gap-4 list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <span className="font-bold">Programming Languages:</span>
                      <p className="text-zinc-600 text-sm">C++, Java</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <span className="font-bold">Tools:</span>
                      <p className="text-zinc-600 text-sm">Git, VS Code, Canva, Figma</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <span className="font-bold">Soft Skills:</span>
                      <p className="text-zinc-600 text-sm">Teamwork, Communication, Time Management</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <span className="font-bold">Technical Skills:</span>
                      <p className="text-zinc-600 text-sm">HTML/CSS, Excel, etc.</p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-lg font-bold text-blue-600 uppercase tracking-widest border-l-4 border-blue-600 pl-4 mb-6">Education</h2>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">B.Tech (IT) 1st Year</h3>
                      <p className="text-zinc-600">Amity University Gwalior</p>
                    </div>
                    <span className="text-sm font-bold bg-blue-50 px-3 py-1 rounded-full text-blue-700">Currently Pursuing</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">XII (CBSE)</h3>
                      <p className="text-zinc-600">Balaji Global Academy</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-600">70.40%</p>
                      <p className="text-sm text-zinc-500">2024</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Certifications */}
              <section>
                <h2 className="text-lg font-bold text-blue-600 uppercase tracking-widest border-l-4 border-blue-600 pl-4 mb-6">Certification</h2>
                <ul className="space-y-3 list-none">
                  <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="font-bold text-sm">Data Science Job Simulation — Tata Forage</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="font-bold text-sm">45 Days of Code 2024 — Amity Coding Club</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="font-bold text-sm">Cyber Security Simulation — Tata Forage</span>
                  </li>
                </ul>
              </section>

              {/* Interests */}
              <section>
                <h2 className="text-lg font-bold text-blue-600 uppercase tracking-widest border-l-4 border-blue-600 pl-4 mb-6">Interest</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-zinc-100 rounded-lg text-xs font-bold uppercase tracking-tight">Full Stack Web Development</span>
                  <span className="px-4 py-2 bg-zinc-100 rounded-lg text-xs font-bold uppercase tracking-tight">Data Analyst and Visualization</span>
                  <span className="px-4 py-2 bg-zinc-100 rounded-lg text-xs font-bold uppercase tracking-tight">Learning Python for Data Analysis (Numpy or Pandas)</span>
                </div>
              </section>

              {/* Projects */}
              <section>
                <h2 className="text-lg font-bold text-blue-600 uppercase tracking-widest border-l-4 border-blue-600 pl-4 mb-6">Projects</h2>
                <div className="space-y-8">
                  <div className="relative group">
                    <h3 className="font-extrabold text-lg mb-1">PERSONAL PORTFOLIO USING (HTML&CSS)</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed italic border-l-2 border-zinc-200 pl-4">
                      -- Designed a responsive website to showcase skills, projects, and contact details.
                    </p>
                  </div>
                  <div className="relative group">
                    <h3 className="font-extrabold text-lg mb-1">AMAZON PRIME CLONE USING (HTML&CSS)</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed italic border-l-2 border-zinc-200 pl-4">
                      -- Built a responsive clone of Amazon Prime's homepage UI
                    </p>
                  </div>
                  <div className="relative group">
                    <h3 className="font-extrabold text-lg mb-1">MAJOR PROJECT USING BOOTSTRAP 5 OR PYTHON</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed italic border-l-2 border-zinc-200 pl-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                      -- Currently is in progress
                    </p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-zinc-800 bg-zinc-950 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 font-mono uppercase">© {new Date().getFullYear()} Harsh Shrivastav • Digital Signature</p>
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-white hover:bg-zinc-200 text-black font-bold rounded-xl transition-all shadow-xl"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
