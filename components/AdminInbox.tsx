
import React, { useState, useEffect } from 'react';
import { DB } from '../services/database';
import { ContactMessage } from '../types';
import { X, Mail, User, Clock, Trash2, Inbox, MessageCircle, CheckCircle, ShieldAlert, Lock, Terminal } from 'lucide-react';

interface AdminInboxProps {
  onClose: () => void;
}

const AdminInbox: React.FC<AdminInboxProps> = ({ onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  
  useEffect(() => {
    if (isAuthenticated) {
      setMessages(DB.getContactMessages());
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default Dev Pass: 2025 (or any string)
    if (password === 'admin' || password === '2025') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid Access Key');
      setPassword('');
    }
  };

  const handleDelete = (id: string) => {
    const updated = DB.deleteContactMessage(id);
    setMessages(updated);
  };

  const handleMarkRead = (id: string) => {
    const updated = DB.markContactMessageRead(id);
    setMessages(updated);
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to delete ALL messages?')) {
      const updated = DB.clearAllContactMessages();
      setMessages(updated);
    }
  };

  const unreadCount = messages.filter(m => !m.isRead).length;

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-in fade-in duration-300">
        <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl" onClick={onClose}></div>
        <div className="relative w-full max-w-md glass border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-500">
           <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20">
                <Lock size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-2">Developer Access</h2>
              <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">Encrypted Area</p>
           </div>

           <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest px-1">Security Key</label>
                <div className="relative">
                   <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                   <input 
                    autoFocus
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter passphrase..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors font-mono"
                  />
                </div>
              </div>

              {error && <p className="text-red-500 text-xs font-mono text-center flex items-center justify-center gap-2">
                <ShieldAlert size={14} /> {error}
              </p>}

              <button 
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-500/20"
              >
                Unlock Dashboard
              </button>
           </form>

           <button onClick={onClose} className="w-full mt-4 py-2 text-zinc-600 hover:text-zinc-400 text-xs font-mono uppercase transition-colors">
              Cancel
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl h-[85vh] glass border border-zinc-800 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-500">
        {/* Header */}
        <div className="p-8 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 relative">
              <Inbox size={24} />
              {unreadCount > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-zinc-900">
                  {unreadCount}
                </div>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold">Inquiry Management</h2>
              <p className="text-sm text-zinc-500 font-mono uppercase tracking-wider">Owner Dashboard: Harsh Shrivastav</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {messages.length > 0 && (
              <button 
                onClick={handleClearAll}
                className="px-4 py-2 border border-zinc-800 hover:border-red-500/50 hover:bg-red-500/5 text-zinc-500 hover:text-red-500 rounded-xl text-xs font-mono uppercase tracking-tighter transition-all"
              >
                Wipe Inbox
              </button>
            )}
            <button 
              onClick={onClose}
              className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-all"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
              <MessageCircle size={64} className="text-zinc-600" />
              <h3 className="text-xl font-bold">No Messages Captured</h3>
              <p className="max-w-xs text-sm">When someone submits your contact form, you'll see it here in real-time.</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {messages.map((msg) => (
                <div key={msg.id} className={`glass p-6 rounded-3xl border transition-all group relative ${msg.isRead ? 'border-zinc-800/50 opacity-70' : 'border-blue-500/30 bg-blue-500/5 shadow-xl shadow-blue-500/5'}`}>
                  {!msg.isRead && (
                    <div className="absolute -top-2 -right-2 px-3 py-1 bg-blue-500 text-[10px] font-bold text-white rounded-full uppercase tracking-widest shadow-lg">
                      New Lead
                    </div>
                  )}
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${msg.isRead ? 'bg-zinc-800 text-zinc-600' : 'bg-blue-600/20 text-blue-400'}`}>
                        <User size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg flex items-center gap-2">
                          {msg.name} 
                        </h4>
                        <div className="flex items-center gap-3 text-sm text-zinc-500 font-mono">
                          <span className="flex items-center gap-1 text-[11px]"><Mail size={12} /> {msg.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-zinc-600 bg-zinc-900 px-3 py-1 rounded-full flex items-center gap-1">
                        <Clock size={12} /> {msg.date}
                      </span>
                      {!msg.isRead && (
                        <button 
                          onClick={() => handleMarkRead(msg.id)}
                          className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all"
                          title="Mark as Read"
                        >
                          <CheckCircle size={18} />
                        </button>
                      )}
                      <button 
                        onClick={() => handleDelete(msg.id)}
                        className="p-2 text-zinc-600 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                        title="Delete Permanently"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <div className={`rounded-2xl p-6 border transition-colors ${msg.isRead ? 'bg-zinc-900/30 border-zinc-800' : 'bg-zinc-900/60 border-blue-500/20'}`}>
                    <div className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.2em] mb-3 font-bold">Subject: {msg.subject}</div>
                    <p className="text-zinc-300 leading-relaxed text-sm whitespace-pre-wrap">
                      {msg.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Area */}
        <div className="p-6 border-t border-zinc-800 bg-zinc-900/30 flex items-center justify-between">
          <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
            {unreadCount} Unread • {messages.length} Total Leads Captured
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-700">
             <ShieldAlert size={12} /> Local Storage Mode Active
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInbox;
