
import React from 'react';
import { 
  Globe, 
  Flag, 
  Target, 
  BarChart3, 
  Activity, 
  CheckCircle2, 
  TrendingUp, 
  Database,
  ShieldCheck,
  AlertTriangle,
  Trophy
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip
} from 'recharts';
import { UserRole } from '../types';

const heatmapData = [
  { region: 'Campus A', score: 84 },
  { region: 'Campus B', score: 92 },
  { region: 'Campus C', score: 76 },
  { region: 'Campus D', score: 88 },
];

const Governance: React.FC<{ role: UserRole }> = ({ role }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Governance & Compliance</h1>
          <p className="text-slate-500 font-medium">Global Accreditation, Ranking BI, and Research IP Ledger.</p>
        </div>
        <div className="flex space-x-3">
           <div className="bg-emerald-50 text-emerald-700 px-5 py-2.5 rounded-2xl border border-emerald-100 flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              <span className="text-xs font-black uppercase tracking-widest">Compliance: AAA Grade</span>
           </div>
           <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-indigo-100">Global Audit Report</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: 'NIRF Prediction', value: '#12 Rank', change: '+4 pos', icon: Trophy, color: 'bg-amber-500' },
           { label: 'NAAC A++ Readiness', value: '98.4%', change: 'Audit Ready', icon: ShieldCheck, color: 'bg-emerald-600' },
           { label: 'Research IP Value', value: '$4.2M', change: '+0.8M', icon: Activity, color: 'bg-indigo-600' },
           { label: 'UGC Compliance', value: '100%', change: 'Passed', icon: Flag, color: 'bg-slate-900' },
         ].map((stat, i) => (
           <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
             <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${stat.color} text-white`}>
                   <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase tracking-tighter">{stat.change}</div>
             </div>
             <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
             <p className="text-2xl font-black text-slate-900 mt-1">{stat.value}</p>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
           <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-black text-slate-900 flex items-center">
                 <Globe className="w-6 h-6 mr-3 text-indigo-600" />
                 Multi-Campus Performance Heatmap
              </h3>
              <div className="flex gap-4">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Year: 2024-25</span>
              </div>
           </div>
           <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={heatmapData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="region" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                    <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                    <Bar dataKey="score" fill="#6366f1" radius={[8, 8, 0, 0]} barSize={40} />
                 </BarChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
              <Database className="absolute top-0 right-0 w-32 h-32 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700" />
              <h3 className="text-xl font-black mb-4">Accreditation Evidence</h3>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">AI-driven automated collection for NIRF/NAAC reporting. 940/950 parameters documented and verified via blockchain ledger.</p>
              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl text-[10px] font-black uppercase tracking-widest">Run Smart Audit</button>
           </div>

           <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h3 className="font-black text-slate-900 mb-6 flex items-center text-sm uppercase tracking-widest">
                 <AlertTriangle className="w-5 h-5 mr-3 text-rose-500" /> Compliance Alerts
              </h3>
              <div className="space-y-4">
                 {[
                   { label: 'Dept Physics', issue: 'Research citation gap identified', risk: 'Medium' },
                   { label: 'Campus Logistics', issue: 'Safety audit due in 4 days', risk: 'High' },
                 ].map((alert, i) => (
                    <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl group hover:bg-white hover:shadow-lg transition-all">
                       <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                          <span className="text-slate-900">{alert.label}</span>
                          <span className={`px-2 py-0.5 rounded ${alert.risk === 'High' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>{alert.risk} Risk</span>
                       </div>
                       <p className="text-xs text-slate-500 font-medium">{alert.issue}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Governance;
