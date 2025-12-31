
import React, { useState } from 'react';
import { MessageCircle, Send, Users, User, Bell, Search, MoreVertical, Plus, CheckCircle2, Info } from 'lucide-react';
import { UserRole } from '../types';

const ClassroomMessaging: React.FC<{ role: UserRole }> = ({ role }) => {
  const [activeThread, setActiveThread] = useState(0);

  const threads = [
    { id: 1, name: 'Physics Grade 12', lastMsg: 'Don\'t forget the optics assignment due...', time: '10:42 AM', unread: 2, type: 'group' },
    { id: 2, name: 'Dr. Robert Miller', lastMsg: 'Your question on wave-particle duality...', time: 'Yesterday', unread: 0, type: 'direct' },
    { id: 3, name: 'Campus Announcements', lastMsg: 'Holiday scheduled for March 22nd...', time: '2d ago', unread: 0, type: 'broadcast' },
  ];

  const messages = [
    { id: 1, sender: 'Dr. Robert Miller', text: 'Hi class, I\'ve uploaded the reference PDF for Chapter 4.', time: '09:00 AM', isMe: false },
    { id: 2, sender: 'Liam Chen', text: 'Thank you Professor! Will we cover the math derivation today?', time: '09:15 AM', isMe: true },
    { id: 3, sender: 'Dr. Robert Miller', text: 'Yes, we will focus on the Schrödinger derivation specifically.', time: '09:42 AM', isMe: false },
  ];

  return (
    <div className="h-[calc(100vh-120px)] flex gap-8 animate-fade-in">
      {/* Sidebar: Threads */}
      <div className="w-80 flex flex-col gap-6">
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col flex-1">
           <div className="p-8 border-b border-slate-50 flex justify-between items-center">
              <h3 className="font-black text-slate-900 uppercase tracking-tighter text-xl">Inbox</h3>
              <button className="p-2 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all"><Plus className="w-4 h-4" /></button>
           </div>
           <div className="p-4">
              <div className="relative group">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                 <input type="text" placeholder="Search conversations..." className="w-full pl-10 pr-4 py-2 bg-slate-50 border-transparent rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500/10 outline-none" />
              </div>
           </div>
           <div className="flex-1 overflow-y-auto custom-scrollbar">
              {threads.map((thread, i) => (
                <div 
                  key={thread.id} 
                  onClick={() => setActiveThread(i)}
                  className={`px-8 py-6 cursor-pointer transition-all border-l-4 border-transparent hover:bg-slate-50 flex items-center gap-4 ${activeThread === i ? 'bg-indigo-50/50 border-indigo-600' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${thread.type === 'group' ? 'bg-indigo-100 text-indigo-600' : thread.type === 'broadcast' ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-600'}`}>
                     {thread.type === 'group' ? <Users className="w-6 h-6" /> : thread.type === 'broadcast' ? <Bell className="w-6 h-6" /> : <User className="w-6 h-6" />}
                  </div>
                  <div className="flex-1 min-w-0">
                     <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-black text-slate-900 truncate tracking-tight">{thread.name}</p>
                        <span className="text-[9px] font-bold text-slate-400 uppercase">{thread.time}</span>
                     </div>
                     <p className="text-xs text-slate-500 truncate leading-relaxed">{thread.lastMsg}</p>
                  </div>
                  {thread.unread > 0 && (
                    <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center text-[9px] font-black text-white shadow-lg shadow-indigo-100">{thread.unread}</div>
                  )}
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden relative">
         {/* Chat Header */}
         <div className="px-10 py-6 border-b border-slate-50 bg-slate-50/20 flex justify-between items-center">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-indigo-600 rounded-[1.25rem] shadow-lg shadow-indigo-100 flex items-center justify-center text-white">
                  <Users className="w-6 h-6" />
               </div>
               <div>
                  <h3 className="font-black text-slate-900 tracking-tight text-lg">{threads[activeThread]?.name}</h3>
                  <div className="flex items-center space-x-2 mt-0.5">
                     <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                     <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active & Secure</p>
                  </div>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <button className="p-3 bg-white border border-slate-100 text-slate-400 rounded-2xl hover:text-indigo-600 hover:shadow-md transition-all"><Info className="w-5 h-5" /></button>
               <button className="p-3 bg-white border border-slate-100 text-slate-400 rounded-2xl hover:text-indigo-600 hover:shadow-md transition-all"><MoreVertical className="w-5 h-5" /></button>
            </div>
         </div>

         {/* Messages Section */}
         <div className="flex-1 overflow-y-auto p-10 space-y-8 custom-scrollbar bg-slate-50/10">
            <div className="flex flex-col items-center mb-10">
               <div className="px-4 py-1.5 bg-slate-100 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] shadow-sm">Conversation started on March 10th</div>
            </div>
            
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                 <div className="flex flex-col gap-2 max-w-[70%]">
                    {!msg.isMe && <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">{msg.sender}</p>}
                    <div className={`px-6 py-4 rounded-[2rem] text-sm leading-relaxed shadow-sm ${
                      msg.isMe 
                      ? 'bg-indigo-600 text-white rounded-tr-none shadow-indigo-100' 
                      : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'
                    }`}>
                       {msg.text}
                    </div>
                    <div className={`flex items-center gap-2 px-1 ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                       <span className="text-[8px] font-bold text-slate-300 uppercase">{msg.time}</span>
                       {msg.isMe && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                    </div>
                 </div>
              </div>
            ))}
         </div>

         {/* Message Input */}
         <div className="p-8 border-t border-slate-50 bg-slate-50/30">
            <div className="relative">
               <input 
                 type="text" 
                 placeholder="Compose institutional message..." 
                 className="w-full pl-6 pr-24 py-5 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-slate-100 outline-none focus:ring-4 focus:ring-indigo-500/5 font-medium transition-all"
               />
               <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button className="p-3 text-slate-400 hover:text-indigo-600 transition-colors"><Plus className="w-5 h-5" /></button>
                  <button className="bg-indigo-600 text-white p-4 rounded-3xl shadow-xl shadow-indigo-100 hover:bg-indigo-500 active:scale-95 transition-all">
                     <Send className="w-6 h-6" />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ClassroomMessaging;
