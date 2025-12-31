
import React from 'react';
import { Building, Globe, Briefcase, Award, ArrowUpRight, Search, Filter, Sparkles, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { UserRole } from '../types';

const CorporateHub: React.FC<{ role: UserRole }> = ({ role }) => {
  const opportunities = [
    { id: 'C1', title: 'Summer AI Residency', company: 'Google DeepMind', location: 'London / Remote', type: 'Internship', duration: '12 Weeks', deadline: 'May 15', logo: 'G' },
    { id: 'C2', title: 'Decentralized Finance Challenge', company: 'Chainlink Labs', location: 'Global', type: 'Hackathon', reward: '$10,000 Pool', deadline: 'Jun 02', logo: 'C' },
    { id: 'C3', title: 'Sustainable Supply Chain Project', company: 'Tesla Corp', location: 'Austin, TX', type: 'Industrial Project', duration: '6 Months', deadline: 'Apr 30', logo: 'T' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-10">
        <div>
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
             <span className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.3em]">Corporate Ecosystem</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Corporate Hub</h1>
          <p className="text-slate-500 font-medium mt-4 tracking-tight text-lg">Elite industrial partnerships, global projects, and high-impact hackathons.</p>
        </div>
        <div className="flex space-x-3">
           <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-slate-800 transition-all flex items-center">
             Become a Partner <ArrowUpRight className="w-3 h-3 ml-2" />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
           <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Live Opportunities</h3>
                <div className="flex gap-2">
                   <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 border border-slate-100"><Filter className="w-5 h-5" /></button>
                </div>
              </div>

              <div className="space-y-6">
                {opportunities.map(op => (
                  <div key={op.id} className="p-8 border border-slate-100 rounded-[2.5rem] bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-110 transition-transform">
                          {op.logo}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                             <h4 className="text-xl font-black text-slate-900 tracking-tight">{op.title}</h4>
                             <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[9px] font-black uppercase rounded-md">{op.type}</span>
                          </div>
                          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{op.company}</p>
                          <div className="flex flex-wrap gap-4 mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                             <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1.5 text-rose-500" /> {op.location}</span>
                             <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1.5 text-indigo-500" /> Deadline: {op.deadline}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl">Review Specs</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
           <div className="bg-indigo-600 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <Sparkles className="absolute top-0 right-0 w-32 h-32 p-8 opacity-20 group-hover:scale-125 transition-transform" />
              <h4 className="text-2xl font-black mb-4 tracking-tighter uppercase leading-tight">Partner Mentorship</h4>
              <p className="text-sm text-indigo-100 leading-relaxed mb-10 font-medium">
                "Direct mentorship available from 42 Fortune-500 experts. Unlock these via skill certifications in the Academic Hub."
              </p>
              <button className="w-full py-5 bg-white text-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-xl">Apply for Mentor</button>
           </div>

           <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm text-center">
              <Building className="w-12 h-12 mx-auto mb-6 text-slate-300" />
              <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter mb-2">Partner Directory</h4>
              <p className="text-xs text-slate-500 font-medium mb-8">Access private repos and tools provided by institutional partners.</p>
              <div className="flex justify-center -space-x-2">
                 {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400">P{i}</div>)}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateHub;
