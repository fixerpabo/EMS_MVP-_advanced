
import React from 'react';
import { 
  Users, 
  TrendingUp, 
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Activity,
  Calendar,
  Sparkles,
  BarChart3,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { UserRole } from '../types';

const data = [
  { name: 'Jan', students: 4000, engagement: 2400 },
  { name: 'Feb', students: 3000, engagement: 1398 },
  { name: 'Mar', students: 2000, engagement: 9800 },
  { name: 'Apr', students: 2780, engagement: 3908 },
  { name: 'May', students: 1890, engagement: 4800 },
  { name: 'Jun', students: 2390, engagement: 3800 },
];

const StatCard: React.FC<{
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}> = ({ title, value, change, isPositive, icon }) => (
  <div className="enterprise-card p-6 flex flex-col justify-between group">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-slate-50 rounded-xl text-slate-600 border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div className={`flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
        {isPositive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
        {change}
      </div>
    </div>
    <div>
      <h3 className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">{title}</h3>
      <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
    </div>
  </div>
);

const Dashboard: React.FC<{ role: UserRole }> = ({ role }) => {
  const isAdmin = [UserRole.SUPER_ADMIN, UserRole.CAMPUS_ADMIN].includes(role);

  return (
    <div className="space-y-8 animate-slide-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Institutional Dashboard</h1>
          <p className="text-slate-500 text-sm font-medium">Real-time intelligence and operational performance metrics.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="px-4 py-2 bg-white border border-slate-200 rounded-xl flex items-center shadow-sm">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">Live Sync</span>
          </div>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center shadow-sm">
            Operational Audit <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Enrollment" value="12,482" change="+12%" isPositive={true} icon={<Users className="w-5 h-5" />} />
        <StatCard title="Academic Index" value="94.2%" change="+3.4%" isPositive={true} icon={<Activity className="w-5 h-5" />} />
        <StatCard title="Retention" value="96.4%" change="-0.5%" isPositive={false} icon={<TrendingUp className="w-5 h-5" />} />
        <StatCard title="Presence Sync" value="98.5%" change="Stable" isPositive={true} icon={<Calendar className="w-5 h-5" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 enterprise-card p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Capacity Analysis</h3>
              <p className="text-slate-400 text-xs font-medium">User load vs resource optimization</p>
            </div>
            <div className="flex space-x-6">
              <span className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div> Load
              </span>
              <span className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <div className="w-3 h-3 bg-slate-200 rounded-full mr-2"></div> Limit
              </span>
            </div>
          </div>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorEng" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px'}}
                />
                <Area type="monotone" dataKey="engagement" stroke="#4f46e5" strokeWidth={3} fill="url(#colorEng)" />
                <Bar dataKey="students" fill="#f1f5f9" radius={[4, 4, 0, 0]} barSize={30} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 rounded-[1.5rem] p-8 text-white relative overflow-hidden group shadow-lg">
            <Sparkles className="absolute -top-4 -right-4 w-24 h-24 text-indigo-400/20 group-hover:scale-125 transition-transform duration-1000" />
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-amber-400 fill-amber-400" />
              AI Insights
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-8 italic">
              "Performance in Physics across Grade 12 indicates a 14% drop in participation. Automated tutoring modules deployed for at-risk cohorts."
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                <p className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest mb-1">Confidence</p>
                <p className="text-lg font-bold">98%</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                <p className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Impact</p>
                <p className="text-lg font-bold">High</p>
              </div>
            </div>
            <button className="w-full py-3 bg-indigo-600 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-md">
              Review Action Plan
            </button>
          </div>

          <div className="enterprise-card p-6">
             <h3 className="font-bold text-slate-900 mb-6 flex justify-between items-center">
               Recent Risk Alerts
               <span className="bg-rose-100 text-rose-600 text-[9px] px-2 py-0.5 rounded-full font-bold uppercase">Critical</span>
             </h3>
             <div className="space-y-4">
                {[
                  { name: 'Node 14', msg: 'IOT Connectivity Failure', time: '2m ago' },
                  { name: 'Physics G12', msg: 'Score Anomaly Detected', time: '14m ago' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-3 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-100 cursor-pointer">
                    <div className="w-1.5 h-8 bg-rose-500 rounded-full mr-4"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-900 truncate">{item.name}</p>
                      <p className="text-[10px] text-slate-400 font-medium truncate">{item.msg}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
