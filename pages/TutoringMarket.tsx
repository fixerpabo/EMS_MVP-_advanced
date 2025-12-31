
import React, { useState } from 'react';
import { Users, Search, Filter, Star, Clock, DollarSign, Heart, Sparkles, ChevronRight, CheckCircle, HelpCircle, MessageCircle, X } from 'lucide-react';
import { UserRole } from '../types';

interface Tutor {
  id: string;
  name: string;
  expertise: string[];
  rating: number;
  sessions: number;
  price: string;
  type: 'paid' | 'volunteer';
  avatar: string;
}

const TutoringMarket: React.FC<{ role: UserRole }> = ({ role }) => {
  const [filterType, setFilterType] = useState<'all' | 'paid' | 'volunteer'>('all');
  const [activeTab, setActiveTab] = useState<'market' | 'tickets'>('market');

  const tutors: Tutor[] = [
    { id: 'T1', name: 'Dr. Sarah Thompson', expertise: ['Quantum AI', 'Neural Ethics'], rating: 4.9, sessions: 142, price: '$45/hr', type: 'paid', avatar: 'https://i.pravatar.cc/150?u=sarah' },
    { id: 'T2', name: 'James Wilson', expertise: ['Linear Algebra', 'Physics'], rating: 4.8, sessions: 89, price: 'Free', type: 'volunteer', avatar: 'https://i.pravatar.cc/150?u=james' },
  ];

  const tickets = [
    { id: 'TIC-042', topic: 'Equation Derivation', status: 'Expert Review', date: '2h ago' },
    { id: 'TIC-081', topic: 'Backpropagation Logic', status: 'Resolved', date: '1d ago' },
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-10">
        <div>
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-1.5 h-8 bg-amber-500 rounded-full"></div>
             <span className="text-[10px] font-black uppercase text-amber-600 tracking-[0.3em]">Knowledge Exchange</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Expert Market</h1>
          <p className="text-slate-500 font-medium mt-4 tracking-tight text-lg">Elite industry veterans and peer tutors at your service.</p>
        </div>
        <div className="flex bg-slate-100 p-1.5 rounded-[1.5rem] border border-slate-200 shadow-inner">
           <button 
             onClick={() => setActiveTab('market')}
             className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'market' ? 'bg-white text-amber-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
           >
             Browse Experts
           </button>
           <button 
             onClick={() => setActiveTab('tickets')}
             className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'tickets' ? 'bg-white text-amber-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
           >
             Doubt Tickets
           </button>
        </div>
      </div>

      {activeTab === 'market' ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {tutors.map(tutor => (
              <div key={tutor.id} className="enterprise-card p-8 flex flex-col justify-between group">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center space-x-5">
                    <img src={tutor.avatar} className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-50 shadow-sm" alt="" />
                    <div>
                      <h3 className="text-xl font-black text-slate-900">{tutor.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span className="text-xs font-black text-slate-700">{tutor.rating}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">• {tutor.sessions} Sessions</span>
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${tutor.type === 'volunteer' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                    {tutor.type}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {tutor.expertise.map(skill => (
                    <span key={skill} className="px-2.5 py-1 bg-slate-50 text-slate-500 text-[10px] font-black rounded-lg border border-slate-100 uppercase">{skill}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pricing</p>
                    <p className="text-xl font-black text-slate-900">{tutor.price}</p>
                  </div>
                  <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center shadow-xl active:scale-95">
                    Book Session <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-10">
             <div className="bg-amber-500 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <Sparkles className="absolute top-0 right-0 w-32 h-32 p-10 opacity-20 group-hover:scale-125 transition-transform duration-700" />
                <h4 className="font-black text-2xl mb-4 tracking-tighter uppercase leading-none">Smart Matching</h4>
                <p className="text-amber-50 text-sm leading-relaxed mb-10 italic">"Liam, Dr. Thompson specializes in the Wave Functions you marked as difficult today."</p>
                <button className="w-full py-5 bg-white text-amber-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-amber-50 transition-all shadow-xl active:scale-95">Accept Matching</button>
             </div>

             <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-6 flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-indigo-600" /> Planned Sessions
                </h3>
                <div className="space-y-4">
                   <div className="p-5 bg-slate-50/50 rounded-3xl border border-slate-50">
                      <p className="text-xs font-black text-slate-900 uppercase">Math Deep Dive</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Today • 2:00 PM</p>
                      <button className="mt-4 w-full py-2 bg-indigo-600 text-white text-[9px] font-black uppercase rounded-xl">Join Link Active</button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center tracking-tighter">
                <HelpCircle className="w-7 h-7 mr-4 text-amber-500" />
                My Active Doubt Tickets
              </h3>
              <div className="space-y-4">
                 {tickets.map(tic => (
                   <div key={tic.id} className="flex items-center justify-between p-7 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center space-x-6">
                         <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-amber-600 shadow-sm">
                            <MessageCircle className="w-7 h-7" />
                         </div>
                         <div>
                            <p className="text-lg font-black text-slate-900 tracking-tight">{tic.topic}</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ref: {tic.id} • {tic.date}</p>
                         </div>
                      </div>
                      <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${tic.status === 'Resolved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                         {tic.status}
                      </span>
                   </div>
                 ))}
              </div>
           </div>
           <div className="bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col justify-between shadow-2xl">
              <div>
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">Create New Ticket</h3>
                <p className="text-slate-400 text-sm mb-10 leading-relaxed italic">"Experiencing a specific cognitive blocker? Describe it here and our pool of experts will pick it up within 4 hours."</p>
                <div className="space-y-6">
                   <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-white outline-none">
                      <option>Select Related Topic...</option>
                      <option>Quantum Superposition</option>
                      <option>Linear Models</option>
                   </select>
                   <textarea placeholder="Describe the blocker in detail..." className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-5 text-sm font-medium text-white outline-none min-h-[150px]"></textarea>
                </div>
              </div>
              <button className="w-full mt-10 py-5 bg-indigo-600 rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-indigo-500 transition-all active:scale-95">Transmit to Expert Pool</button>
           </div>
        </div>
      )}
    </div>
  );
};

export default TutoringMarket;
