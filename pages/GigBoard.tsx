
import React, { useState } from 'react';
import { Zap, Search, Filter, DollarSign, Clock, LayoutGrid, List, ChevronRight, Sparkles, Building2, Briefcase, CheckCircle2, TrendingUp, UserCheck } from 'lucide-react';
import { UserRole } from '../types';

interface Gig {
  id: string;
  title: string;
  company: string;
  payout: string;
  duration: string;
  skills: string[];
  type: 'Design' | 'Code' | 'Admin' | 'Language';
  description: string;
}

const GigBoard: React.FC<{ role: UserRole }> = ({ role }) => {
  const [activeTab, setActiveTab] = useState<'market' | 'my-gigs'>('market');

  const gigs: Gig[] = [
    { id: 'G1', title: 'Logo Modernization', company: 'Physics Dept', payout: '500 Credits', duration: '3 Days', skills: ['Figma', 'Branding'], type: 'Design', description: 'Refresh the department logo for the upcoming symposium.' },
    { id: 'G2', title: 'React Component Library', company: 'EduVerse Labs', payout: '$120', duration: '1 Week', skills: ['React', 'TS'], type: 'Code', description: 'Develop a set of accessible UI components for the internal tool.' },
  ];

  const myApplications = [
    { id: 'A1', title: 'UI Translation', status: 'Interview', date: 'Yesterday' },
    { id: 'A2', title: 'Lab Data Entry', status: 'Payment Pending', date: '3d ago' },
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-10">
        <div>
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-1.5 h-8 bg-indigo-500 rounded-full"></div>
             <span className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.3em]">Skill Monetization</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Gig Board</h1>
          <p className="text-slate-500 font-medium mt-4 tracking-tight text-lg">Monetize your academic expertise via micro-projects.</p>
        </div>
        <div className="flex bg-slate-100 p-1.5 rounded-[1.5rem] border border-slate-200 shadow-inner">
           <button onClick={() => setActiveTab('market')} className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'market' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}>Marketplace</button>
           <button onClick={() => setActiveTab('my-gigs')} className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'my-gigs' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}>My Applications</button>
        </div>
      </div>

      {activeTab === 'market' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <div className="relative group">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
               <input type="text" placeholder="Search projects by skill or department..." className="w-full pl-16 pr-8 py-5 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm focus:ring-4 focus:ring-indigo-500/5 outline-none font-medium transition-all" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gigs.map(gig => (
                <div key={gig.id} className="enterprise-card p-10 flex flex-col group border-l-4 border-l-transparent hover:border-l-indigo-600">
                  <div className="flex justify-between items-start mb-8">
                     <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-indigo-50 transition-colors">
                        <Briefcase className="w-8 h-8 text-slate-400 group-hover:text-indigo-600" />
                     </div>
                     <span className="text-[10px] font-black bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg uppercase tracking-widest">{gig.type}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight tracking-tight">{gig.title}</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-6">{gig.company}</p>
                  <p className="text-sm text-slate-500 line-clamp-3 mb-10 leading-relaxed font-medium">{gig.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {gig.skills.map(s => <span key={s} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-lg uppercase border border-slate-100">{s}</span>)}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-50">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Project Reward</p>
                      <p className="text-2xl font-black text-emerald-600 tracking-tighter">{gig.payout}</p>
                    </div>
                    <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl active:scale-95 flex items-center">
                      Submit Proposal <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
             <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                <Sparkles className="absolute -top-10 -right-10 w-40 h-40 opacity-10 group-hover:scale-110 transition-transform duration-1000 text-indigo-400" />
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">Skill Matching</h4>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 mb-10 backdrop-blur-md">
                   <p className="text-xs text-indigo-300 font-bold mb-4 uppercase tracking-widest">Verified Badges</p>
                   <div className="flex gap-2">
                      <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">JS</div>
                      <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">UX</div>
                   </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-10 italic">"3 high-priority matching gigs found for your Profile. Earning potential: 1,800 Credits."</p>
                <button className="w-full py-5 bg-white text-slate-900 font-black text-[10px] rounded-3xl uppercase tracking-widest hover:bg-indigo-50 shadow-xl transition-all active:scale-95">Update Resume Node</button>
             </div>

             <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-8 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-3 text-indigo-600" /> Earning Velocity
                </h3>
                <div className="space-y-6">
                   <div className="flex justify-between items-center py-2 border-b border-slate-50 last:border-none">
                      <span className="text-[11px] text-slate-500 font-bold">Credits Earned (MTD)</span>
                      <span className="text-[11px] font-black text-emerald-600">1,400</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-slate-50 last:border-none">
                      <span className="text-[11px] text-slate-500 font-bold">Avg. Payout Rate</span>
                      <span className="text-[11px] font-black text-indigo-600">450 C/Gig</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm">
              <h3 className="text-3xl font-black text-slate-900 mb-10 flex items-center tracking-tighter uppercase">
                 <UserCheck className="w-8 h-8 mr-4 text-indigo-600" />
                 Active Pipeline
              </h3>
              <div className="space-y-6">
                 {myApplications.map(app => (
                   <div key={app.id} className="flex items-center justify-between p-8 bg-slate-50/50 rounded-[3rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center space-x-6">
                         <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-slate-100 flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-110 transition-transform">
                            <Briefcase className="w-8 h-8" />
                         </div>
                         <div>
                            <p className="text-xl font-black text-slate-900 tracking-tight">{app.title}</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Submitted {app.date}</p>
                         </div>
                      </div>
                      <span className={`px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest ${app.status === 'Interview' ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'}`}>
                         {app.status}
                      </span>
                   </div>
                 ))}
              </div>
           </div>
           <div className="bg-indigo-900 rounded-[4rem] p-12 text-white relative overflow-hidden flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter leading-none">Earnings Verified</h3>
                <p className="text-indigo-200 text-lg font-medium leading-relaxed italic mb-10">"Liam, your last gig payout of 400 Credits has been verified and synced with your EduWallet."</p>
                <div className="grid grid-cols-2 gap-6">
                   <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 text-center backdrop-blur-md">
                      <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Sync Status</p>
                      <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-400" />
                   </div>
                   <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 text-center backdrop-blur-md">
                      <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Total Income</p>
                      <p className="text-3xl font-black">4.8k</p>
                   </div>
                </div>
              </div>
              <button className="w-full mt-12 py-6 bg-white text-indigo-900 rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-indigo-50 transition-all active:scale-95">Open EduWallet Ledger</button>
           </div>
        </div>
      )}
    </div>
  );
};

export default GigBoard;
