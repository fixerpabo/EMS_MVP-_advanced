
import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  UserPlus, 
  MoreVertical, 
  TrendingUp, 
  AlertCircle,
  Mail,
  Phone,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Sparkles,
  BarChart3,
  ShieldCheck,
  UserCheck,
  Zap,
  ArrowUpRight,
  History,
  Activity
} from 'lucide-react';
import { UserRole } from '../types';

interface PeopleManagementProps {
  role: UserRole;
}

const PeopleManagement: React.FC<PeopleManagementProps> = ({ role }) => {
  const [activeTab, setActiveTab] = useState('directory');
  
  const people = [
    { id: '1', name: 'Liam Chen', type: 'Student', class: 'Grade 12-B', status: 'At Risk', email: 'liam.c@edu.ai', score: '3.4/4.0' },
    { id: '2', name: 'Emma Watson', type: 'Student', class: 'Grade 10-A', status: 'Excelled', email: 'emma.w@edu.ai', score: '3.9/4.0' },
    { id: '3', name: 'Dr. Robert Miller', type: 'Faculty', class: 'Physics Dept', status: 'Active', email: 'r.miller@edu.ai', score: 'PHD' },
    { id: '4', name: 'Sophia Loren', type: 'Staff', class: 'Admin Ops', status: 'Active', email: 's.loren@edu.ai', score: 'MBA' },
  ];

  const recruitmentPool = [
    { name: 'James Wilson', role: 'Sr. Lecturer', match: 94, status: 'Shortlisted' },
    { name: 'Sarah Blake', role: 'Lab Head', match: 88, status: 'Interviewing' },
    { name: 'Michael Chen', role: 'Curriculum Dev', match: 72, status: 'Screening' },
  ];

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-10 gap-6">
        <div>
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
             <span className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.3em]">Directory Node</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Stakeholder Hub</h1>
          <p className="text-slate-500 font-medium mt-4 tracking-tight text-lg max-w-2xl leading-relaxed">
            Lifecycle management for staff and students. AI-driven recruitment ranking, digital onboarding, and high-fidelity performance profiling.
          </p>
        </div>
        <div className="flex bg-slate-100 p-1.5 rounded-[1.5rem] border border-slate-200 shadow-inner overflow-x-auto no-scrollbar">
           {[
             { id: 'directory', label: 'Active Directory' },
             { id: 'recruitment', label: 'AI Recruitment' },
             { id: 'onboarding', label: 'Staff Onboarding' },
           ].map(tab => (
             <button 
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-white text-indigo-600 shadow-md ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-700'}`}
             >
               {tab.label}
             </button>
           ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-indigo-600 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
          <TrendingUp className="absolute top-0 right-0 w-32 h-32 p-10 opacity-10 group-hover:scale-125 transition-transform duration-700" />
          <p className="text-indigo-200 text-[10px] font-black uppercase tracking-widest mb-1">Global Health Index</p>
          <h3 className="text-4xl font-black tracking-tighter">98.4%</h3>
          <div className="mt-8 flex items-center text-xs text-indigo-100 font-black uppercase tracking-tighter">
             <ArrowUpRight className="w-4 h-4 mr-1.5 text-emerald-400" /> Retention up 2% (MTD)
          </div>
        </div>
        <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm group">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Engagement Risk</p>
          <h3 className="text-4xl font-black text-slate-900 tracking-tighter">12 <span className="text-sm text-rose-500">Flags</span></h3>
          <div className="mt-8 flex items-center text-xs text-rose-500 font-black uppercase tracking-tighter">
             <AlertCircle className="w-4 h-4 mr-1.5" /> Manual Review Req.
          </div>
        </div>
        <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Utilization Index</p>
          <h3 className="text-4xl font-black text-slate-900 tracking-tighter">92.1%</h3>
          <div className="mt-8 flex items-center text-xs text-emerald-500 font-black uppercase tracking-tighter">
             <CheckCircle2 className="w-4 h-4 mr-1.5" /> Optimal Roster
          </div>
        </div>
        <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Onboarding Nodes</p>
          <h3 className="text-4xl font-black tracking-tighter">04 <span className="text-sm text-indigo-400">Live</span></h3>
          <div className="mt-8 flex items-center text-xs text-slate-400 font-black uppercase tracking-tighter">
             <History className="w-4 h-4 mr-1.5" /> Last Audit: 2h ago
          </div>
        </div>
      </div>

      {activeTab === 'directory' && (
        <div className="bg-white rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
          <div className="px-12 py-10 border-b border-slate-50 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-slate-50/20">
            <div className="flex items-center space-x-6 bg-white px-6 py-4 rounded-[2rem] border border-slate-200 flex-1 max-w-xl shadow-inner group focus-within:ring-4 focus-within:ring-indigo-500/5 transition-all">
              <Search className="w-6 h-6 text-slate-300 group-focus-within:text-indigo-600 transition-colors" />
              <input type="text" placeholder="Search by name, biometric ID or academic department..." className="bg-transparent border-none text-base outline-none w-full font-medium" />
            </div>
            <div className="flex items-center space-x-3">
               <button className="p-4 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all"><Filter className="w-6 h-6 text-slate-500" /></button>
               <button className="bg-indigo-600 text-white px-10 py-5 rounded-[2rem] text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-indigo-100 hover:bg-indigo-500 active:scale-95 transition-all">
                  <UserPlus className="w-4 h-4 mr-2" /> Add New Entry
               </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead className="bg-slate-50/50">
                 <tr className="text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                   <th className="px-12 py-6">Identity Node</th>
                   <th className="px-12 py-6">Domain / Cohort</th>
                   <th className="px-12 py-6">Performance Index</th>
                   <th className="px-12 py-6">Status</th>
                   <th className="px-12 py-6 text-right">Ops</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                 {people.map((p, idx) => (
                   <tr key={idx} className="group hover:bg-slate-50/40 transition-all duration-300 cursor-pointer">
                     <td className="px-12 py-8">
                        <div className="flex items-center space-x-6">
                           <div className="w-14 h-14 rounded-[1.5rem] bg-gradient-to-tr from-slate-50 to-white flex items-center justify-center font-black text-indigo-600 text-lg shadow-sm ring-1 ring-slate-100 group-hover:scale-110 transition-transform">
                             {p.name.split(' ').map(n => n[0]).join('')}
                           </div>
                           <div>
                              <p className="text-lg font-black text-slate-900 tracking-tight">{p.name}</p>
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Biometric ID: #ST-{2000 + idx}</p>
                           </div>
                        </div>
                     </td>
                     <td className="px-12 py-8">
                        <p className="text-sm font-bold text-slate-600 uppercase tracking-tighter">{p.type}</p>
                        <p className="text-xs text-slate-400 font-medium mt-1 italic">{p.class}</p>
                     </td>
                     <td className="px-12 py-8 font-black text-slate-900">{p.score}</td>
                     <td className="px-12 py-8">
                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                          p.status === 'At Risk' ? 'bg-rose-50 text-rose-700 border-rose-100' : p.status === 'Excelled' ? 'bg-indigo-50 text-indigo-700 border-indigo-100' : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                        }`}>
                          {p.status}
                        </span>
                     </td>
                     <td className="px-12 py-8 text-right">
                        <div className="flex justify-end space-x-2">
                           <button className="p-3 bg-white border border-slate-100 text-slate-300 hover:text-indigo-600 hover:shadow-md rounded-xl transition-all"><Mail className="w-4 h-4" /></button>
                           <button className="p-3 bg-white border border-slate-100 text-slate-300 hover:text-indigo-600 hover:shadow-md rounded-xl transition-all"><Phone className="w-4 h-4" /></button>
                           <button className="p-3 bg-white border border-slate-100 text-slate-300 hover:text-indigo-600 hover:shadow-md rounded-xl transition-all"><MoreVertical className="w-4 h-4" /></button>
                        </div>
                     </td>
                   </tr>
                 ))}
               </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'recruitment' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 animate-in slide-in-from-right-8 duration-500">
           <div className="lg:col-span-8 bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-center mb-12">
                 <div>
                    <h3 className="text-3xl font-black text-slate-900 flex items-center tracking-tighter uppercase leading-none">
                       <Briefcase className="w-10 h-10 mr-4 text-indigo-600" />
                       Talent Pipeline
                    </h3>
                    <p className="text-sm text-slate-500 mt-2 font-medium italic">Gemini-assisted resume ranking & cultural match analysis.</p>
                 </div>
                 <span className="text-[11px] bg-indigo-50 text-indigo-700 px-6 py-2 rounded-full font-black uppercase tracking-widest border border-indigo-100 shadow-sm">08 Open Positions</span>
              </div>
              <div className="space-y-6">
                 {recruitmentPool.map((job, i) => (
                    <div key={i} className="p-8 bg-slate-50/50 border border-slate-100 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all duration-500 group flex items-center justify-between">
                       <div className="flex items-center space-x-8">
                          <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-slate-100 flex items-center justify-center text-indigo-600 shadow-inner group-hover:scale-110 transition-transform">
                             <UserCheck className="w-8 h-8" />
                          </div>
                          <div>
                             <p className="text-xl font-black text-slate-900 tracking-tight">{job.name}</p>
                             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 italic">{job.role} • 42 Applied</p>
                          </div>
                       </div>
                       <div className="text-right flex flex-col items-end">
                          <div className="flex items-center gap-2 mb-2">
                             <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{job.match}% AI Match</span>
                             <div className="w-20 bg-slate-200 h-2 rounded-full overflow-hidden p-0.5"><div className="h-full bg-indigo-500 rounded-full" style={{width: `${job.match}%`}}></div></div>
                          </div>
                          <button className="flex items-center text-[10px] font-black text-slate-400 hover:text-indigo-600 uppercase tracking-widest transition-colors">
                             Full Profile Node <ArrowRight className="w-4 h-4 ml-2" />
                          </button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-4 space-y-10">
              <div className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden group shadow-2xl border border-white/5">
                 <Sparkles className="absolute top-0 right-0 w-48 h-48 p-12 opacity-10 group-hover:scale-110 transition-transform duration-1000 text-indigo-400" />
                 <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter leading-none">Smart Sourcing</h3>
                 <p className="text-base text-slate-400 leading-relaxed mb-10 font-medium italic">
                   "Scanning Global Partner Repos. 42 top-tier candidates identified with direct expertise in Quantum Mechanics. Recommendation: Automated outreach."
                 </p>
                 <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                       <span className="text-[11px] font-bold text-slate-300">Candidates Found</span>
                       <span className="text-lg font-black text-indigo-400">482</span>
                    </div>
                    <button className="w-full py-6 bg-indigo-600 hover:bg-indigo-500 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95">
                       Execute Auto-Outreach
                    </button>
                 </div>
              </div>

              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm text-center">
                 <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-indigo-600" />
                 <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-2 leading-none">Vetting Protocol</h4>
                 <p className="text-xs text-slate-500 font-medium mb-10 leading-relaxed italic">Verification status for all shortlisted candidates via global ID node.</p>
                 <div className="flex justify-center -space-x-3 mb-10">
                    {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400 shadow-sm">P{i}</div>)}
                 </div>
                 <button className="w-full py-4 border-2 border-slate-100 text-slate-500 hover:bg-slate-50 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">Audit Vetting Logs</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default PeopleManagement;
