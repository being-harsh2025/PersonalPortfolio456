
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { getPortfolioAssistantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hi! I'm your Portfolio Assistant. Ask me anything about Harsh's skills, projects, or background!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const response = await getPortfolioAssistantResponse(userMessage, messages);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I lost my connection. Could you repeat that?" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Trigger Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="group w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 hover:scale-110 transition-all duration-300 relative overflow-hidden"
        >
          <Sparkles className="w-8 h-8 text-white" />
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 border border-zinc-800 text-white text-xs py-2 px-3 rounded-xl whitespace-nowrap shadow-xl">
             Chat with Gemini AI
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[90vw] md:w-[400px] h-[550px] bg-zinc-950 rounded-[2.5rem] border border-zinc-800 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="p-6 bg-zinc-900 flex justify-between items-center border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-white leading-none">Gemini Assistant</h4>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">AI Intelligence</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 p-4 rounded-2xl rounded-tl-none border border-zinc-800 flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce delay-150"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-zinc-900 border-t border-zinc-800">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Gemini about Harsh..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl py-4 pl-5 pr-14 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="absolute right-2 top-2 w-10 h-10 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:bg-zinc-800 text-white rounded-xl flex items-center justify-center transition-all"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[10px] text-zinc-600 text-center mt-4 uppercase tracking-tighter">
              Official Gemini Integration
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
