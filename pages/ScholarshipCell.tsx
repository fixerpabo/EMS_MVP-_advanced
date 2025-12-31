
import React, { useState } from 'react';
import { 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ArrowUpRight, 
  Search,
  Zap,
  DollarSign,
  Plus,
  Users,
  Filter,
  MoreVertical,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  X
} from 'lucide-react';
import { UserRole } from '../types';

interface ScholarshipCellProps {
  role: UserRole;
}

const ScholarshipCell: React.FC<ScholarshipCellProps> = ({ role }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const isAdmin = [UserRole.SUPER_ADMIN, UserRole.CAMPUS_ADMIN, UserRole.FINANCE_OFFICER].includes(role);

  const scholarships = [
    { id: 1, name: 'AI Innovation Excellence', provider: 'EduVerse Global', amount: '$5,000', deadline: 'Apr 20', match: '98%', status: 'Applied', applicants: 42, fund: '$210,000' },
    { id: 2, name: 'Global Merit Scholar 2024', provider: 'Ministry of Edu', amount: '$12,000', deadline: 'May 15', match: '82%', status: 'Eligible', applicants: 156, fund: '$1.8M' },
    { id: 3, name: 'STEM Diversity Grant', provider: 'TechCorp Foundation', amount: '$2,500', deadline: 'Apr 30', match: '74%', status: 'Draft', applicants: 18, fund: '$45,000' },
  ];

  const adminStats = [
    { label: 'Total Grant Fund', value: '$2.4M', icon: DollarSign, color: 'text-indigo-600' },
    { label: 'Active Applicants', value: '216', icon: Users, color: 'text-emerald-600' },
    { label: 'Disbursement Rate', value: '74%', icon: TrendingUp, color: 'text-amber-600' },
    { label: 'Audit Readiness', value: 'High', icon: ShieldCheck, color: 'text-indigo-600' },
  ];

  const renderStudentView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
         <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search grants, foundations or criteria..." 
              className="w-full pl-12 pr-6 py-4 bg-white rounded-[2rem] border border-slate-100 shadow-sm focus:ring-2 focus:ring-indigo-500/20 outline-none font-medium"
            />
         </div>

         <div className="space-y-4">
            {scholarships.map((s) => (
              <div key={s.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6">
                 <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shadow-inner">
                       <Trophy className="w-8 h-8" />
                    </div>
                    <div>
                       <h3 className="text-lg font-black text-slate-900 leading-tight">{s.name}</h3>
                       <p className="text-xs text-slate-500 font-bold uppercase mt-0.5">{s.provider}</p>
                       <div className="flex gap-2 mt-3">
                          <span className="text-[9px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md font-black uppercase tracking-widest">{s.match} Match</span>
                          <span className="text-[9px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-black uppercase tracking-widest">{s.amount}</span>
                       </div>
                    </div>
                 </div>
                 <div className="flex items-center space-x-4">
                    <div className="text-right">
                       <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Deadline</p>
                       <p className="text-sm font-black text-slate-900">{s.deadline}</p>
                    </div>
                    <button className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      s.status === 'Applied' ? 'bg-emerald-500 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-500'
                    }`}>
                      {s.status === 'Applied' ? 'Track Status' : 'Apply Now'}
                    </button>
                 </div>
              </div>
            ))}
         </div>
      </div>

      <div className="space-y-8">
         <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
            <Zap className="absolute top-0 right-0 w-32 h-32 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700" />
            <h3 className="text-xl font-black mb-4 flex items-center">
               <Sparkles className="w-5 h-5 mr-3 text-indigo-400" />
               AI Grant Predictor
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
               We've analyzed your 94.2% GPA and research participation. You are eligible for 14 additional grants worth $28,000.
            </p>
            <button className="w-full py-4 bg-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all hover:bg-indigo-500 shadow-xl">
               Update Profile
            </button>
         </div>

         <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-6 flex items-center">
               <Clock className="w-5 h-5 mr-3 text-amber-500" /> Recent Activity
            </h3>
            <div className="space-y-6">
               {[
                 { event: 'Application Verified', sub: 'STEM Diversity Grant', time: '2h ago' },
                 { event: 'Document Requested', sub: 'Global Merit Scholar', time: '1d ago' },
               ].map((act, i) => (
                  <div key={i} className="flex items-start space-x-4">
                     <div className="w-1 h-10 bg-slate-100 rounded-full mt-1"></div>
                     <div>
                        <p className="text-xs font-bold text-slate-900">{act.event}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">{act.sub}</p>
                        <p className="text-[9px] text-slate-300 font-black mt-1 uppercase">{act.time}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );

  const renderAdminView = () => (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminStats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 border-l-4 border-l-indigo-500">
            <div className="flex justify-between items-start mb-4">
               <div className={`p-3 rounded-2xl bg-indigo-50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
               </div>
            </div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
            <p className="text-3xl font-black text-slate-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-10 py-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center">
              <FileText className="w-7 h-7 mr-4 text-indigo-600" />
              Institutional Programs
            </h3>
            <p className="text-sm text-slate-500 font-medium italic mt-1">Manage active scholarship pools, grant rules, and applicant verification.</p>
          </div>
          <div className="flex gap-2">
             <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 transition-all border border-slate-100"><Filter className="w-5 h-5" /></button>
             <button 
               onClick={() => setShowCreateModal(true)}
               className="bg-indigo-600 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center"
             >
               <Plus className="w-4 h-4 mr-2" /> New Program
             </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50">
              <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                <th className="px-10 py-5">Program Domain</th>
                <th className="px-10 py-5">Applicant Pool</th>
                <th className="px-10 py-5">Grant Pool</th>
                <th className="px-10 py-5">Cycle End</th>
                <th className="px-10 py-5 text-right">Operations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {scholarships.map((s, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-all group">
                  <td className="px-10 py-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-[10px] border border-indigo-100">{s.id}</div>
                      <div>
                        <p className="text-sm font-black text-slate-900">{s.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{s.provider}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-slate-900">{s.applicants}</span>
                      <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-widest">+12% this week</span>
                    </div>
                  </td>
                  <td className="px-10 py-6 font-black text-slate-900">{s.fund}</td>
                  <td className="px-10 py-6 text-xs font-bold text-slate-500 uppercase tracking-widest">{s.deadline}</td>
                  <td className="px-10 py-6 text-right">
                    <div className="flex justify-end gap-2">
                       <button className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[9px] font-black uppercase rounded-lg hover:bg-indigo-600 hover:text-white transition-all">Verify Apps</button>
                       <button className="p-2 text-slate-300 hover:text-indigo-600 rounded-lg transition-colors"><MoreVertical className="w-5 h-5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 pb-10">
        <div>
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
             <span className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.3em]">Financial Node</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Scholarship Cell</h1>
          <p className="text-slate-500 font-medium tracking-tight text-lg mt-4 max-w-2xl">
            {isAdmin ? 'End-to-end program lifecycle management, AI eligibility analysis, and disbursement orchestration.' : 'AI-matched financial aid, merit-based grants, and application lifecycle tracking.'}
          </p>
        </div>
        {!isAdmin && (
          <div className="flex bg-slate-100 p-1.5 rounded-[1.5rem] border border-slate-200">
             {['all', 'applied', 'eligible'].map(tab => (
               <button 
                 key={tab}
                 onClick={() => setActiveFilter(tab)}
                 className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === tab ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
               >
                 {tab}
               </button>
             ))}
          </div>
        )}
      </div>

      {isAdmin ? renderAdminView() : renderStudentView()}

      {/* Create Program Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
           <div className="bg-white w-full max-w-2xl rounded-[3rem] p-12 shadow-2xl animate-in zoom-in-95 duration-300 border border-slate-100">
              <div className="flex justify-between items-center mb-10">
                 <div>
                   <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">New Program</h3>
                   <p className="text-slate-500 text-sm font-medium mt-2 italic">Provisioning a new institutional grant ledger.</p>
                 </div>
                 <button onClick={() => setShowCreateModal(false)} className="p-3 bg-slate-50 text-slate-400 hover:text-rose-500 rounded-2xl transition-all border border-slate-100">
                   <X className="w-6 h-6" />
                 </button>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Program Identity</label>
                    <input type="text" placeholder="e.g. Summer AI Fellowship" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 text-sm font-black outline-none focus:border-indigo-500 transition-colors" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Grant Amount</label>
                    <input type="text" placeholder="$0.00" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 text-sm font-black outline-none focus:border-indigo-500 transition-colors" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Minimum CGPA Requirement</label>
                    <input type="number" step="0.1" placeholder="3.5" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 text-sm font-black outline-none focus:border-indigo-500 transition-colors" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Application Deadline</label>
                    <input type="date" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 text-sm font-black outline-none focus:border-indigo-500 transition-colors" />
                 </div>
              </div>

              <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100 mb-12 flex items-center space-x-6">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                   <ShieldCheck className="w-8 h-8 text-emerald-600" />
                 </div>
                 <div>
                   <p className="text-sm text-emerald-900 font-black uppercase tracking-tight">Compliance Verified</p>
                   <p className="text-xs text-emerald-700 font-medium leading-relaxed mt-1">This program aligns with institutional policy. AI will auto-match students above 3.5 CGPA from the Computer Science department.</p>
                 </div>
              </div>

              <button 
                onClick={() => setShowCreateModal(false)}
                className="w-full py-6 bg-slate-900 text-white font-black text-xs rounded-3xl uppercase tracking-[0.2em] hover:bg-slate-800 shadow-2xl transition-all active:scale-95 flex items-center justify-center group"
              >
                Activate Program <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default ScholarshipCell;
