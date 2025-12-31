
import React, { useState } from 'react';
import { 
  DollarSign, 
  ArrowUpRight,
  ShieldAlert,
  CreditCard,
  BadgeDollarSign,
  Briefcase,
  Landmark,
  ShieldCheck,
  Zap,
  TrendingUp,
  Filter,
  Download,
  Search,
  ChevronRight,
  Plus,
  CheckCircle2,
  Receipt,
  Scale,
  Settings2,
  PieChart
} from 'lucide-react';
import { UserRole } from '../types';

interface OperationsProps {
  role: UserRole;
}

const Operations: React.FC<OperationsProps> = ({ role }) => {
  const [activeSubTab, setActiveSubTab] = useState('finance');
  
  const isFinanceRole = [UserRole.SUPER_ADMIN, UserRole.CAMPUS_ADMIN, UserRole.FINANCE_OFFICER, UserRole.UNIVERSITY_GOV].includes(role);

  const stats = [
    { label: 'Collection Rate', value: '94.2%', trend: 'up', change: '+12%', icon: DollarSign, bg: 'bg-emerald-50', color: 'text-emerald-600' },
    { label: 'Payroll Index', value: '100%', trend: 'stable', change: 'Synced', icon: Briefcase, bg: 'bg-indigo-50', color: 'text-indigo-600' },
    { label: 'Grant Ledger', value: '$2.4M', trend: 'up', change: '+8%', icon: Landmark, bg: 'bg-blue-50', color: 'text-blue-600' },
    { label: 'Institutional Risk', value: 'Low', trend: 'down', change: '-4%', icon: ShieldCheck, bg: 'bg-slate-900', color: 'text-white' },
  ];

  if (!isFinanceRole) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] text-center p-12 bg-white rounded-[4rem] border border-slate-100 shadow-sm animate-in fade-in duration-500">
         <div className="w-24 h-24 bg-rose-50 rounded-[2rem] flex items-center justify-center text-rose-500 mb-8 border-2 border-rose-100 shadow-lg shadow-rose-100/50">
            <ShieldAlert className="w-12 h-12" />
         </div>
         <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Security Lockdown</h2>
         <p className="text-slate-500 font-medium max-w-sm mt-3 leading-relaxed">Financial ledgers, payroll records, and ERP systems are role-restricted to Authorized Administrative Personnel only.</p>
         <div className="mt-10 flex gap-4">
            <button className="px-10 py-5 bg-slate-900 text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest shadow-2xl transition-all hover:bg-slate-800 active:scale-95">Request Access Hub</button>
            <button className="px-10 py-5 bg-white border border-slate-200 text-slate-500 rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all hover:bg-slate-50 active:scale-95">Institutional Dashboard</button>
         </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-10 gap-6">
        <div>
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
             <span className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.3em]">Financial Node</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Admin Operations</h1>
          <p className="text-slate-500 font-medium mt-4 tracking-tight text-lg max-w-2xl leading-relaxed">
            Institutional ERP hub managing financial invoicing, payroll disbursement, grant ledgers, and AI-driven fiscal forecasting.
          </p>
        </div>
        <div className="flex bg-slate-100 p-1.5 rounded-[1.5rem] border border-slate-200 shadow-inner overflow-x-auto no-scrollbar">
           {['finance', 'payroll', 'grants'].map(tab => (
             <button 
               key={tab}
               onClick={() => setActiveSubTab(tab)}
               className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeSubTab === tab ? 'bg-white text-indigo-600 shadow-md ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-700'}`}
             >
               {tab} Engine
             </button>
           ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="enterprise-card p-10 group border-l-8 border-l-transparent hover:border-l-indigo-600">
             <div className="flex items-center justify-between mb-8">
                <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform shadow-inner`}>
                   <stat.icon className="w-8 h-8" />
                </div>
                <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${stat.trend === 'up' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                   {stat.change}
                </div>
             </div>
             <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest">{stat.label}</p>
             <h3 className="text-4xl font-black text-slate-900 mt-1 tracking-tighter leading-none">{stat.value}</h3>
          </div>
        ))}
      </div>

      {activeSubTab === 'finance' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 animate-in slide-in-from-bottom-8 duration-500">
          <div className="lg:col-span-8 space-y-10">
             <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
                   <div>
                      <h3 className="text-3xl font-black text-slate-900 flex items-center tracking-tighter uppercase leading-none">
                        <CreditCard className="w-10 h-10 mr-4 text-indigo-600" />
                        Fee Concession Engine
                      </h3>
                      <p className="text-sm text-slate-500 mt-2 font-medium italic">Automated logic applied via merit-tier & socioeconomic profiles.</p>
                   </div>
                   <div className="flex gap-3">
                      <button className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-slate-100"><Filter className="w-6 h-6" /></button>
                      <button className="bg-indigo-600 text-white px-10 py-5 rounded-[2rem] text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-2xl">Initialize Batch Invoice</button>
                   </div>
                </div>

                <div className="space-y-6">
                   {[
                     { label: 'Merit-Based Waivers', tier: 'Top 5%', applied: '42 Students', value: '-$84,000', status: 'Active' },
                     { label: 'Economic Concessions', tier: 'Tier 1/2', applied: '112 Students', value: '-$56,200', status: 'Applied' },
                     { label: 'Sibling Continuity Grant', tier: 'Institutional', applied: '08 Students', value: '-$12,400', status: 'Auto-Rule' },
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between p-8 bg-slate-50/50 rounded-[3rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer">
                        <div className="flex items-center space-x-8">
                           <div className="w-1.5 h-16 bg-indigo-500 rounded-full group-hover:scale-y-125 transition-transform"></div>
                           <div>
                              <p className="text-xl font-black text-slate-900 tracking-tight">{item.label}</p>
                              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{item.tier} Criteria • {item.applied}</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-2xl font-black text-rose-500 tracking-tighter">{item.value}</p>
                           <p className="text-[10px] text-emerald-600 font-black uppercase tracking-widest flex items-center justify-end mt-1">
                              <CheckCircle2 className="w-4 h-4 mr-1.5" /> {item.status}
                           </p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <div className="bg-white rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="px-12 py-10 border-b border-slate-50 bg-slate-50/20 flex justify-between items-center">
                   <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center">
                      <Receipt className="w-7 h-7 mr-3 text-indigo-600" />
                      Pending Collections Node
                   </h3>
                </div>
                <div className="p-20 text-center opacity-20 uppercase font-black text-xs tracking-[1em] flex flex-col items-center">
                   <PieChart className="w-16 h-16 mb-8" /> 
                   Dynamic Revenue Ledger Streaming...
                </div>
             </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
             <div className="bg-slate-900 rounded-[4rem] p-12 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group min-h-[500px] border border-white/5">
                <Zap className="absolute top-0 right-0 w-48 h-48 opacity-10 p-12 text-indigo-500 group-hover:scale-125 transition-transform duration-1000" />
                <div className="relative z-10">
                   <h3 className="font-black text-3xl mb-10 flex items-center uppercase tracking-tighter">
                      <BadgeDollarSign className="w-10 h-10 mr-4 text-indigo-400" />
                      Fiscal IQ
                   </h3>
                   <div className="space-y-10">
                      <div>
                         <div className="flex justify-between text-[11px] font-black uppercase text-indigo-300 mb-4 tracking-widest">
                            <span>Campus Liquidity</span>
                            <span>84% Capacity</span>
                         </div>
                         <div className="w-full bg-white/10 h-4 rounded-full overflow-hidden shadow-inner p-1">
                            <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 w-[84%] rounded-full transition-all duration-2000"></div>
                         </div>
                      </div>
                      <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-xl group-hover:bg-white/10 transition-colors">
                         <p className="text-sm text-slate-300 leading-relaxed italic font-medium">
                           "Prediction: Semester 2 collection velocity will exceed Semester 1 by 14.2% based on scholarship rollout patterns. Recommend: Immediate capital allocation to Infrastructure Node 4."
                         </p>
                         <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">Confidence: 98.4%</span>
                            <button className="text-[10px] font-black text-white uppercase hover:underline">Commit Allocation</button>
                         </div>
                      </div>
                   </div>
                </div>
                <button className="w-full mt-12 py-6 bg-white text-slate-900 font-black text-xs rounded-[2rem] hover:bg-indigo-50 transition-all uppercase tracking-[0.2em] shadow-2xl active:scale-95">
                   Synthesize Audit Ledger
                </button>
             </div>

             <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm group">
                <h3 className="font-black text-slate-900 text-xs uppercase tracking-[0.2em] mb-8 flex items-center">
                   <Settings2 className="w-5 h-5 mr-3 text-indigo-600 group-hover:rotate-90 transition-transform duration-700" /> Operational Matrix
                </h3>
                <div className="space-y-6">
                   {[
                     { label: 'Grant Burn Velocity', value: 'Optimal', color: 'text-emerald-500' },
                     { label: 'Payroll Latency', value: '0.0ms', color: 'text-indigo-600' },
                     { label: 'Tax Compliance', value: 'Verified', color: 'text-emerald-500' },
                   ].map((kpi, i) => (
                      <div key={i} className="flex justify-between items-center py-4 border-b border-slate-50 last:border-none group/row">
                         <span className="text-xs text-slate-500 font-bold uppercase group-hover/row:text-slate-900 transition-colors">{kpi.label}</span>
                         <span className={`text-xs font-black uppercase tracking-widest ${kpi.color}`}>{kpi.value}</span>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Operations;
