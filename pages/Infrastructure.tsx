
import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Truck, 
  MapPin, 
  ShieldAlert, 
  ChevronRight,
  Sparkles,
  Home,
  Users,
  Navigation,
  Clock,
  Wifi,
  CheckCircle2,
  Activity,
  Zap,
  HardDrive,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { UserRole } from '../types';

interface InfrastructureProps {
  role: UserRole;
}

const Infrastructure: React.FC<InfrastructureProps> = ({ role }) => {
  const [activeTab, setActiveTab] = useState('transport');
  const [busData, setBusData] = useState({ load: 24, speed: 42, eta: 4 });

  // Simulate real-time bus telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setBusData(prev => ({
        ...prev,
        load: Math.min(50, Math.max(10, prev.load + (Math.random() > 0.5 ? 1 : -1))),
        speed: Math.min(60, Math.max(20, prev.speed + (Math.random() > 0.5 ? 2 : -2)))
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-10 gap-6">
        <div>
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-1.5 h-8 bg-amber-500 rounded-full"></div>
             <span className="text-[10px] font-black uppercase text-amber-600 tracking-[0.3em]">Logistics Node</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Institutional Logistics</h1>
          <p className="text-slate-500 font-medium mt-4 tracking-tight text-lg max-w-2xl leading-relaxed">
            Real-time fleet telemetry, IoT-enabled hostel management, and multi-campus resource orchestration.
          </p>
        </div>
        <div className="flex bg-slate-100 p-1.5 rounded-[1.5rem] border border-slate-200 shadow-inner overflow-x-auto no-scrollbar">
           {[
             { id: 'transport', label: 'Fleet Tracking', icon: Truck },
             { id: 'hostel', label: 'Hostel Matrix', icon: Home },
             { id: 'iot', label: 'IoT Sensors', icon: Zap },
           ].map(tab => (
             <button 
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center whitespace-nowrap ${activeTab === tab.id ? 'bg-white text-indigo-600 shadow-md ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-700'}`}
             >
               <tab.icon className="w-4 h-4 mr-2" /> {tab.label}
             </button>
           ))}
        </div>
      </header>

      {activeTab === 'transport' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 animate-in slide-in-from-bottom-8 duration-500">
           <div className="lg:col-span-8 space-y-10">
              <div className="bg-slate-900 h-[500px] rounded-[4rem] relative overflow-hidden shadow-2xl flex items-center justify-center group border border-white/5">
                 <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/mapnode/1200/800')] opacity-20 grayscale contrast-150 transition-all duration-[10000ms] group-hover:scale-110"></div>
                 <div className="relative z-10 p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] text-white flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 shadow-2xl">
                    <div className="p-6 bg-indigo-600 rounded-[2rem] shadow-2xl shadow-indigo-500/20 animate-bounce">
                       <Navigation className="w-10 h-10" />
                    </div>
                    <div>
                       <h3 className="text-3xl font-black tracking-tighter uppercase leading-none">Bus 12: Suburban Gateway</h3>
                       <p className="text-sm text-indigo-300 font-bold uppercase tracking-[0.2em] mt-3 flex items-center">
                          <Activity className="w-4 h-4 mr-2" /> Live Status: On-Route • 4.2 KM from Hub
                       </p>
                    </div>
                 </div>
                 <div className="absolute bottom-12 left-12 flex space-x-6">
                    <div className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 text-white">
                       <p className="text-[10px] font-black uppercase text-indigo-400 mb-1">Velocity</p>
                       <p className="text-xl font-black">{busData.speed} km/h</p>
                    </div>
                    <div className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 text-white">
                       <p className="text-[10px] font-black uppercase text-indigo-400 mb-1">Load Index</p>
                       <p className="text-xl font-black">{busData.load}/50</p>
                    </div>
                 </div>
              </div>
              <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
                 <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center tracking-tighter uppercase leading-none">
                    <Truck className="w-8 h-8 mr-4 text-indigo-600" />
                    Fleet Management Registry
                 </h3>
                 <div className="space-y-6">
                    {[
                      { id: 'BUS-04', route: 'North Campus Hub', status: 'On-Time', eta: '4 min', driver: 'Robert T.' },
                      { id: 'BUS-12', route: 'Suburban Gateway', status: 'On-Route', eta: '8 min', driver: 'Elena K.' },
                      { id: 'BUS-08', route: 'Urban Express', status: 'Maintenance', eta: 'N/A', driver: 'Mark S.' },
                    ].map((bus, i) => (
                       <div key={i} className="flex items-center justify-between p-8 bg-slate-50/50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group cursor-pointer duration-500">
                          <div className="flex items-center space-x-8">
                             <div className="w-16 h-16 bg-white border border-slate-100 rounded-[1.5rem] flex items-center justify-center font-black text-indigo-600 text-lg shadow-sm group-hover:scale-110 transition-transform">#{bus.id.split('-')[1]}</div>
                             <div>
                                <p className="text-xl font-black text-slate-900 tracking-tight">{bus.route}</p>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Driver: {bus.driver} • ETA: {bus.eta}</p>
                             </div>
                          </div>
                          <span className={`px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border ${
                            bus.status === 'On-Time' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                            bus.status === 'On-Route' ? 'bg-indigo-50 text-indigo-700 border-indigo-100' :
                            'bg-rose-50 text-rose-700 border-rose-100'
                          }`}>{bus.status}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
           <div className="lg:col-span-4 space-y-10">
              <div className="bg-indigo-600 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group border border-white/10">
                 <Sparkles className="absolute top-0 right-0 w-48 h-48 p-12 opacity-20 group-hover:scale-125 transition-transform duration-1000 text-white" />
                 <h4 className="text-3xl font-black mb-6 uppercase tracking-tighter leading-none">AI Route Optimizer</h4>
                 <p className="text-lg text-indigo-100 leading-relaxed mb-12 font-medium italic">
                    "Liam, the 05:30 PM shuttle is predicted to reach 95% capacity. We recommend the 05:15 PM 'Suburban Express' node for higher comfort."
                 </p>
                 <button className="w-full py-6 bg-white text-indigo-600 font-black text-xs rounded-[2rem] uppercase tracking-[0.2em] hover:bg-indigo-50 transition-all shadow-2xl active:scale-95">Reserve Node Slot</button>
              </div>
              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm group">
                 <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.3em] mb-8 flex items-center">
                    <Wifi className="w-5 h-5 mr-3 text-indigo-600" /> Infrastructure Health
                 </h3>
                 <div className="space-y-6">
                    <div className="flex justify-between items-center py-4 border-b border-slate-50 last:border-none group/row">
                       <span className="text-xs text-slate-500 font-bold uppercase group-hover/row:text-slate-900 transition-colors">Bus Wi-Fi Mesh</span>
                       <span className="text-[10px] font-black text-emerald-600 uppercase">Operational</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-slate-50 last:border-none group/row">
                       <span className="text-xs text-slate-500 font-bold uppercase group-hover/row:text-slate-900 transition-colors">GPS Sync Latency</span>
                       <span className="text-[10px] font-black text-indigo-600 uppercase">12ms (Low)</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-slate-50 last:border-none group/row">
                       <span className="text-xs text-slate-500 font-bold uppercase group-hover/row:text-slate-900 transition-colors">Route Efficiency</span>
                       <span className="text-[10px] font-black text-emerald-600 uppercase">98% Score</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {activeTab === 'hostel' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-in slide-in-from-right-8 duration-500">
           <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                 <h3 className="text-4xl font-black text-slate-900 mb-6 flex items-center uppercase tracking-tighter leading-none">
                    <Home className="w-10 h-10 mr-4 text-indigo-600" />
                    Hostel Node Matrix
                 </h3>
                 <p className="text-lg text-slate-500 font-medium mb-12 italic leading-relaxed">Dynamic accommodation status, IoT utility sensing, and maintenance orchestration.</p>
                 <div className="grid grid-cols-2 gap-8">
                    <div className="p-10 bg-slate-50 rounded-[3.5rem] border border-slate-100 shadow-inner group hover:bg-white hover:shadow-2xl transition-all duration-500">
                       <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Residential Wing</p>
                       <p className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Wing B</p>
                    </div>
                    <div className="p-10 bg-slate-50 rounded-[3.5rem] border border-slate-100 shadow-inner group hover:bg-white hover:shadow-2xl transition-all duration-500">
                       <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Assigned Room</p>
                       <p className="text-4xl font-black text-indigo-600 tracking-tighter">#402</p>
                    </div>
                 </div>
              </div>
              <div className="mt-12 p-10 bg-emerald-50 rounded-[3.5rem] border border-emerald-100 flex items-center justify-between shadow-xl shadow-emerald-100/10">
                 <div className="flex items-center space-x-6 text-emerald-700">
                    <ShieldCheck className="w-10 h-10" />
                    <div>
                       <p className="text-lg font-black uppercase tracking-tight leading-none">Utility Status: Stable</p>
                       <p className="text-sm font-medium mt-1">Smart sensing active for Node #402.</p>
                    </div>
                 </div>
                 <button className="text-[10px] font-black bg-emerald-600 text-white px-8 py-4 rounded-[1.5rem] uppercase tracking-widest shadow-2xl hover:bg-emerald-500 transition-all">IoT Console</button>
              </div>
           </div>
           <div className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl border border-white/5 group">
              <Zap className="absolute top-0 right-0 w-64 h-64 opacity-5 p-12 text-indigo-400 group-hover:scale-125 transition-transform duration-1000" />
              <div>
                 <h3 className="text-3xl font-black mb-10 uppercase tracking-tighter leading-none">Maintenance Ledger</h3>
                 <div className="space-y-6">
                    {[
                      { id: 'TK-1042', issue: 'AC Filter Optimization', status: 'In-Queue', date: 'Today' },
                      { id: 'TK-0981', issue: 'Smart Lock Calibration', status: 'Resolved', date: 'Yesterday' },
                    ].map((t, i) => (
                       <div key={i} className="p-8 bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-between group/ticket hover:bg-white/10 transition-all duration-300">
                          <div>
                             <p className="text-xl font-bold tracking-tight">{t.issue}</p>
                             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1 italic">Ref: {t.id} • {t.date}</p>
                          </div>
                          <span className={`px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                            t.status === 'Resolved' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                          }`}>{t.status}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <button className="w-full mt-12 py-6 bg-indigo-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-indigo-500 transition-all active:scale-95">Open Ticket Node</button>
           </div>
        </div>
      )}

      {activeTab === 'iot' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in zoom-in-95 duration-700">
           {[
             { label: 'Air Quality Node', value: 'Excellent', icon: Globe, color: 'text-emerald-500' },
             { label: 'Thermal Index', value: '24°C', icon: Activity, color: 'text-indigo-400' },
             { label: 'Network Mesh', value: 'Synced', icon: HardDrive, color: 'text-amber-400' },
           ].map((iot, i) => (
             <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm text-center group hover:shadow-2xl transition-all duration-500">
                <div className={`w-16 h-16 rounded-[1.5rem] bg-slate-50 ${iot.color} flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:scale-110 transition-transform`}>
                   <iot.icon className="w-8 h-8" />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{iot.label}</p>
                <p className="text-3xl font-black text-slate-900 tracking-tighter">{iot.value}</p>
                <button className="mt-8 text-[9px] font-black text-indigo-600 uppercase tracking-widest hover:underline">Node Telemetry</button>
             </div>
           ))}
        </div>
      )}
    </div>
  );
};

export default Infrastructure;
