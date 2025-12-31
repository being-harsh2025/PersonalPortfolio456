
import React from 'react';
import { Cpu, Database, Code2 } from 'lucide-react';

const FloatingModels: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-5] overflow-hidden">
      <style>{`
        @keyframes drift-1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10vw, 15vh) rotate(120deg); }
          66% { transform: translate(-5vw, 25vh) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes drift-2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-15vw, -10vh) rotate(-120deg); }
          66% { transform: translate(5vw, -20vh) rotate(-240deg); }
          100% { transform: translate(0, 0) rotate(-360deg); }
        }
        @keyframes drift-3 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(8vw, -15vh) rotate(90deg); }
          66% { transform: translate(-12vw, 5vh) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        .model-float-1 { animation: drift-1 25s ease-in-out infinite; }
        .model-float-2 { animation: drift-2 30s ease-in-out infinite; }
        .model-float-3 { animation: drift-3 22s ease-in-out infinite; }
      `}</style>

      {/* Model 1: Neural Processor (CPU) */}
      <div className="absolute top-[15%] left-[10%] opacity-[0.07] model-float-1">
        <div className="relative p-12 glass rounded-[3rem] border-blue-500/30">
          <Cpu size={120} className="text-blue-500" />
          <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full"></div>
        </div>
      </div>

      {/* Model 2: Data Core (Database) */}
      <div className="absolute top-[60%] right-[12%] opacity-[0.05] model-float-2">
        <div className="relative p-16 glass rounded-full border-purple-500/30">
          <Database size={140} className="text-purple-500" />
          <div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full"></div>
        </div>
      </div>

      {/* Model 3: Logic Module (Code) */}
      <div className="absolute bottom-[10%] left-[20%] opacity-[0.06] model-float-3">
        <div className="relative p-10 glass rounded-2xl border-pink-500/30">
          <Code2 size={100} className="text-pink-500" />
          <div className="absolute inset-0 bg-pink-500/20 blur-[50px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingModels;
