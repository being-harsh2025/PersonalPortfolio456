
import React from 'react';
import { USER_DATA } from '../constants';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xs font-mono text-purple-500 uppercase tracking-widest mb-3">Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h3>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto">
            A curated selection of my latest work, optimized for performance and user experience.
          </p>
        </div>

        {/* Changed to 3 columns on desktop and reduced gap for compactness */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USER_DATA.projects.map((project) => (
            <div key={project.id} className="group relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 flex flex-col shadow-xl transition-all duration-500 hover:border-zinc-700 hover:shadow-2xl">
              {/* Reduced aspect ratio height */}
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                {/* Compact Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-[9px] font-bold uppercase tracking-widest text-white border border-white/10 shadow-lg">
                  {project.category}
                </div>
              </div>
              
              {/* Reduced internal padding (p-8 to p-6) */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-zinc-800/50 text-[9px] font-mono text-zinc-400 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[9px] font-mono text-zinc-600 self-center">+{project.tags.length - 3}</span>
                  )}
                </div>
                
                <h4 className="text-lg font-bold mb-2 flex items-center justify-between">
                  {project.title}
                  <Code2 size={12} className="text-zinc-600" />
                </h4>
                
                {/* Line clamping for consistent height and smaller text */}
                <p className="text-zinc-500 text-sm mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                {/* Pushed buttons to bottom */}
                <div className="mt-auto flex gap-3">
                  <a href="#" className="flex-1 py-2.5 bg-zinc-800/80 hover:bg-zinc-700 text-white text-[10px] font-bold rounded-xl flex items-center justify-center gap-2 transition-all border border-zinc-700">
                    <Github size={12} /> Code
                  </a>
                  <a href="#" className="flex-1 py-2.5 bg-white hover:bg-zinc-200 text-black text-[10px] font-bold rounded-xl flex items-center justify-center gap-2 transition-all">
                    Live <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 glass border border-zinc-800 rounded-xl text-zinc-400 hover:text-white hover:border-zinc-600 transition-all font-bold text-sm">
            Explore More on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
