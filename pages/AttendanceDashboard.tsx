
import React from 'react';
import { UserCheck, Calendar, Clock, AlertTriangle, TrendingUp, CheckCircle2, ChevronRight, BarChart2 } from 'lucide-react';
import { UserRole } from '../types';

const AttendanceDashboard: React.FC<{ role: UserRole }> = ({ role }) => {
  const stats = [
    { label: 'Overall Presence', value: '94.8%', icon: UserCheck, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Consecutive Days', value: '12 Days', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Late Entries', value: '2', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Risk Flags', value: '0', icon: AlertTriangle, color: 'text-slate-400', bg: 'bg-slate-50' },
  ];

  const subjectAttendance = [
    { subject: 'Quantum Mechanics', presence: '98%', sessions: '42/43', status: 'Healthy' },
    { subject: 'Neural Networks', presence: '88%', sessions: '38/43', status: 'Warning' },
    { subject: 'Linear Algebra', presence: '100%', sessions: '12/12', status: 'Healthy' },
    { subject: 'Ethics in AI', presence: '92%', sessions: '11/12', status: 'Healthy' },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-10 gap-6">
        <div>
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-1.5 h-8 bg-emerald-500 rounded-full"></div>
             <span className="text-[10px] font-bold uppercase text-emerald-600 tracking-[0.3em]">Engagement Node</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Attendance Matrix</h1>
          <p className="text-slate-500 font-medium mt-4 tracking-tight text-lg">Verified biometric presence logs and subject-wise participation analytics.</p>
        </div>
        <div className="flex gap-3">
           <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all flex items-center">
             Download Report <ChevronRight className="w-3 h-3 ml-2" />
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="enterprise-card p-8 group">
            <div className="flex justify-between items-start mb-4">
               <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} transition-all group-hover:scale-110`}>
                  <stat.icon className="w-6 h-6" />
               </div>
            </div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-10 py-8 border-b border-slate-50 bg-slate-50/20 flex justify-between items-center">
             <h3 className="text-xl font-black text-slate-900 flex items-center">
                <BarChart2 className="w-6 h-6 mr-3 text-indigo-600" />
                Subject-wise Breakdown
             </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50">
                <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                  <th className="px-10 py-5">Subject</th>
                  <th className="px-10 py-5">Presence %</th>
                  <th className="px-10 py-5">Total Sessions</th>
                  <th className="px-10 py-5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {subjectAttendance.map((item, i) => (
                  <tr key={i} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="px-10 py-6">
                       <p className="text-sm font-black text-slate-900">{item.subject}</p>
                    </td>
                    <td className="px-10 py-6 font-black text-indigo-600">{item.presence}</td>
                    <td className="px-10 py-6 text-sm text-slate-500 font-medium">{item.sessions}</td>
                    <td className="px-10 py-6 text-right">
                       <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${item.status === 'Healthy' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                          {item.status}
                       </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
           <div className="bg-indigo-600 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <CheckCircle2 className="absolute top-0 right-0 w-32 h-32 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700" />
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">AI Consistency Check</h4>
              <p className="text-sm text-indigo-100 leading-relaxed mb-10 italic">
                "Liam, your consistency in 8 AM sessions is in the top 5% of your batch. This high reliability score has been updated in your Success Portfolio."
              </p>
              <button className="w-full py-4 bg-white text-indigo-600 font-black text-[10px] rounded-2xl uppercase tracking-widest hover:bg-indigo-50 transition-all">View Reliability Index</button>
           </div>

           <div className="enterprise-card p-8">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center">
                 <Calendar className="w-5 h-5 mr-3 text-indigo-600" /> Recent Logins
              </h3>
              <div className="space-y-4">
                 {[
                   { site: 'Main Gate', time: '08:02 AM', status: 'Marked' },
                   { site: 'Physics Lab', time: '10:15 AM', status: 'Marked' },
                   { site: 'Library', time: '01:30 PM', status: 'Marked' },
                 ].map((log, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-none">
                       <div>
                          <p className="text-xs font-bold text-slate-700">{log.site}</p>
                          <p className="text-[9px] text-slate-400 font-bold uppercase">{log.time}</p>
                       </div>
                       <span className="text-[8px] font-black text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded-md">Verified</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDashboard;
