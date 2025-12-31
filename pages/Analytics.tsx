
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line
} from 'recharts';
import { Target, TrendingUp, Users, Wallet, Calendar } from 'lucide-react';
import { UserRole } from '../types';

interface AnalyticsProps {
  role: UserRole;
}

const enrollmentData = [
  { name: '2020', value: 8400 },
  { name: '2021', value: 9100 },
  { name: '2022', value: 10400 },
  { name: '2023', value: 11800 },
  { name: '2024', value: 12482 },
];

const revenueData = [
  { month: 'Jan', rev: 400 },
  { month: 'Feb', rev: 300 },
  { month: 'Mar', rev: 600 },
  { month: 'Apr', rev: 800 },
  { month: 'May', rev: 500 },
  { month: 'Jun', rev: 900 },
];

const genderDist = [
  { name: 'Male', value: 52 },
  { name: 'Female', value: 48 },
];

const COLORS = ['#6366f1', '#a855f7', '#ec4899', '#f97316'];

const Analytics: React.FC<AnalyticsProps> = ({ role }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Institutional Insights</h1>
        <p className="text-slate-500">Big-data analytics and institutional performance KPIs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: 'Overall Retention', value: '96.2%', icon: Target, color: 'text-indigo-600' },
           { label: 'Avg. Course GPA', value: '3.42', icon: TrendingUp, color: 'text-emerald-600' },
           { label: 'Facility Usage', value: '82%', icon: Users, color: 'text-amber-600' },
           { label: 'Revenue Yield', value: '11.4%', icon: Wallet, color: 'text-rose-600' },
         ].map((stat, i) => (
           <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
             <div className="flex items-center space-x-3 mb-2">
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
             </div>
             <p className="text-2xl font-black text-slate-900">{stat.value}</p>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-6">Enrollment Growth Trend</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Bar dataKey="value" fill="#6366f1" radius={[8, 8, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-6">Financial Yield (Revenue $K)</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip />
                <Line type="monotone" dataKey="rev" stroke="#6366f1" strokeWidth={3} dot={{r: 4, fill: '#6366f1'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
