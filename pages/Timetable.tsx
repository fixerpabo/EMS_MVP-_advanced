
import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Users, 
  ChevronRight,
  Plus,
  Sparkles,
  Settings,
  Zap,
  Info,
  Layers,
  ShieldCheck,
  Cpu,
  Mail,
  MoreVertical,
  Activity,
  ToggleRight,
  ToggleLeft,
  CalendarDays,
  ShieldAlert,
  Edit3,
  CalendarX,
  Megaphone,
  Building2,
  Trash2,
  CheckCircle2,
  X,
  ArrowRight,
  Loader2,
  Search,
  Filter,
  Navigation,
  ExternalLink,
  PlayCircle,
  LayoutGrid,
  List
} from 'lucide-react';
import { UserRole } from '../types';

interface TimetableProps {
  role: UserRole;
  defaultTab?: string;
}

const Timetable: React.FC<TimetableProps> = ({ role, defaultTab }) => {
  const isSuperAdmin = role === UserRole.SUPER_ADMIN;
  const isCampusAdmin = role === UserRole.CAMPUS_ADMIN;
  const isAdminGroup = isSuperAdmin || isCampusAdmin || role === UserRole.HOD_DEAN;
  const isStudent = role === UserRole.STUDENT;

  const getInitialView = () => {
    if (defaultTab === 'auto') return 'scheduler';
    if (defaultTab === 'rooms') return 'rooms';
    if (defaultTab === 'view' || isStudent) return 'student';
    return isAdminGroup ? 'scheduler' : 'student';
  };

  const [activeView, setActiveView] = useState<'scheduler' | 'rooms' | 'faculty' | 'student'>(getInitialView());
  const [studentSubView, setStudentSubView] = useState<'daily' | 'weekly'>('daily');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);

  useEffect(() => {
    if (defaultTab) {
      if (defaultTab === 'auto') setActiveView('scheduler');
      else if (defaultTab === 'rooms') setActiveView('rooms');
      else if (defaultTab === 'view') setActiveView('student');
    }
  }, [defaultTab]);

  const startSmartGenerator = () => {
    setIsGenerating(true);
    setGenerationProgress(0);
    const interval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsGenerating(false), 800);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  const renderStudentSchedule = () => {
    const dailySchedule = [
      { id: 1, subject: 'Quantum Mechanics', time: '09:00 AM', teacher: 'Dr. Sarah Thompson', node: 'Node B-402', type: 'Theory', status: 'Upcoming' },
      { id: 2, subject: 'Neural Ethics Seminar', time: '11:00 AM', teacher: 'James Wilson', node: 'Virtual Hub 4', type: 'Seminar', status: 'Upcoming' },
      { id: 3, subject: 'Lunch & Peer Networking', time: '12:00 PM', teacher: 'N/A', node: 'Central Commons', type: 'Break', status: 'Break' },
      { id: 4, subject: 'Applied AI Lab', time: '01:00 PM', teacher: 'Prof. Miller', node: 'Laboratory 02', type: 'Practical', status: 'Upcoming' },
    ];

    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM'];

    const matrixData: any = {
      'Mon-09:00 AM': { subject: 'Quantum', color: 'border-l-indigo-600 bg-indigo-50/50' },
      'Tue-11:00 AM': { subject: 'AI Ethics', color: 'border-l-purple-600 bg-purple-50/50' },
      'Wed-01:00 PM': { subject: 'Robotics', color: 'border-l-emerald-600 bg-emerald-50/50' },
      'Thu-09:00 AM': { subject: 'Quantum', color: 'border-l-indigo-600 bg-indigo-50/50' },
      'Fri-02:00 PM': { subject: 'Lab 4', color: 'border-l-amber-600 bg-amber-50/50' },
    };

    return (
      <div className="space-y-10 animate-fade-in pb-20">
         <div className="bg-slate-900 px-10 py-12 rounded-3xl text-white shadow-xl relative overflow-hidden group">
            <CalendarIcon className="absolute top-0 right-0 w-64 h-64 opacity-5 -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
               <div className="max-w-2xl">
                  <div className="flex items-center space-x-2 mb-4">
                     <div className="w-10 h-0.5 bg-indigo-500 rounded-full"></div>
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Academic Roster v4.2</span>
                  </div>
                  <h2 className="text-4xl font-extrabold tracking-tight uppercase leading-none mb-3">Academic Roadmap</h2>
                  <p className="text-lg text-slate-400 font-medium leading-relaxed">
                    Hello Liam, you have <span className="text-white">3 sessions</span> scheduled for today. Your first entry is at 09:00 AM.
                  </p>
               </div>
               <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <button 
                    onClick={() => setStudentSubView('daily')}
                    className={`px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center ${studentSubView === 'daily' ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white'}`}
                  >
                    <List className="w-4 h-4 mr-2" /> Timeline
                  </button>
                  <button 
                    onClick={() => setStudentSubView('weekly')}
                    className={`px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center ${studentSubView === 'weekly' ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white'}`}
                  >
                    <LayoutGrid className="w-4 h-4 mr-2" /> Matrix
                  </button>
               </div>
            </div>
         </div>

         {studentSubView === 'daily' ? (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
               <div className="lg:col-span-3 space-y-4">
                  {dailySchedule.map((session, i) => (
                     <div key={session.id} className={`bg-white p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-indigo-300 hover:shadow-md transition-all duration-300`}>
                        <div className="flex items-center space-x-8">
                           <div className="w-20 h-20 bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-center border border-slate-100 shadow-sm">
                              <p className="text-[9px] font-bold text-slate-400 uppercase">Slot</p>
                              <p className="text-xl font-black text-slate-900">{i + 1}</p>
                           </div>
                           <div>
                              <div className="flex items-center gap-3 mb-1.5">
                                 <h4 className="text-xl font-bold text-slate-900 tracking-tight leading-none">{session.subject}</h4>
                                 <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase ${session.type === 'Theory' ? 'bg-indigo-50 text-indigo-700' : session.type === 'Practical' ? 'bg-amber-50 text-amber-700' : 'bg-slate-50 text-slate-600'}`}>
                                    {session.type}
                                 </span>
                              </div>
                              <div className="flex flex-wrap gap-5 mt-3">
                                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide flex items-center"><Clock className="w-3.5 h-3.5 mr-1.5 text-indigo-500" /> {session.time}</span>
                                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide flex items-center"><MapPin className="w-3.5 h-3.5 mr-1.5 text-rose-500" /> {session.node}</span>
                                 {session.teacher !== 'N/A' && <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide flex items-center"><Users className="w-3.5 h-3.5 mr-1.5 text-indigo-500" /> {session.teacher}</span>}
                              </div>
                           </div>
                        </div>
                        <div className="flex items-center gap-3">
                           {session.node.includes('Virtual') ? (
                              <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-md hover:bg-indigo-700 transition-all flex items-center group">
                                 Join Link <ExternalLink className="w-3.5 h-3.5 ml-2 group-hover:scale-110" />
                              </button>
                           ) : session.status !== 'Break' ? (
                              <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-md hover:bg-indigo-600 transition-all flex items-center group">
                                 Navigate <Navigation className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5" />
                              </button>
                           ) : null}
                        </div>
                     </div>
                  ))}
               </div>

               <div className="space-y-6">
                  <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                     <Sparkles className="absolute top-0 right-0 w-24 h-24 p-6 opacity-10 text-indigo-600" />
                     <h4 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">Sync Status</h4>
                     <p className="text-sm text-slate-500 mb-6 leading-relaxed italic">
                       "AI suggests reviewing 'Matrix Calculus' before your 01:00 PM Applied Lab."
                     </p>
                     <button className="w-full py-3 bg-slate-100 text-slate-600 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-all">Open Session Notes</button>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
                     <Activity className="w-10 h-10 mx-auto mb-4 text-indigo-600" />
                     <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-2">Academic Intensity</h4>
                     <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-indigo-500 w-[72%]"></div>
                     </div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase">72% Weekly Load</p>
                  </div>
               </div>
            </div>
         ) : (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-in zoom-in-98 duration-300">
               <div className="px-8 py-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50">
                  <div className="flex items-center space-x-4">
                     <CalendarDays className="w-7 h-7 text-indigo-600" />
                     <div>
                        <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight leading-none">Weekly Planner</h3>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.1em] mt-1">Mar 12 - Mar 18 • Semester Sync</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="flex items-center space-x-2">
                        <div className="w-2.5 h-2.5 bg-indigo-500 rounded"></div>
                        <span className="text-[9px] font-bold uppercase text-slate-500">Lecture</span>
                     </div>
                     <div className="flex items-center space-x-2">
                        <div className="w-2.5 h-2.5 bg-amber-500 rounded"></div>
                        <span className="text-[9px] font-bold uppercase text-slate-500">Practical</span>
                     </div>
                  </div>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                     <thead>
                        <tr className="bg-slate-50">
                           <th className="w-24 px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center border-r border-slate-100">Time</th>
                           {weekDays.map(day => (
                              <th key={day} className="px-4 py-6 border-r border-slate-100 text-xs font-bold text-slate-900 uppercase tracking-widest">{day}</th>
                           ))}
                        </tr>
                     </thead>
                     <tbody>
                        {timeSlots.map(time => (
                           <tr key={time} className="border-t border-slate-100">
                              <td className="px-4 py-8 border-r border-slate-100 text-center">
                                 <span className="text-[9px] font-bold text-slate-400 uppercase whitespace-nowrap">{time}</span>
                              </td>
                              {weekDays.map(day => {
                                 const slotKey = `${day}-${time}`;
                                 const slot = matrixData[slotKey];
                                 return (
                                    <td key={slotKey} className="p-1 border-r border-slate-100 group transition-all">
                                       {slot ? (
                                          <div className={`border-l-4 ${slot.color} p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer h-full flex flex-col justify-center`}>
                                             <p className="text-[10px] font-bold text-slate-900 uppercase leading-none">{slot.subject}</p>
                                             <p className="text-[8px] font-medium text-slate-400 mt-1 uppercase">Hall 402</p>
                                          </div>
                                       ) : (
                                          <div className="w-full h-16 rounded-lg group-hover:bg-slate-50/50 transition-colors"></div>
                                       )}
                                    </td>
                                 );
                              })}
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         )}
      </div>
    );
  };

  const renderScheduler = () => (
    <div className="space-y-8 animate-fade-in">
       <div className="bg-indigo-700 px-10 py-14 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <Cpu className="absolute top-0 right-0 w-72 h-72 opacity-5 -mr-16 -mt-16" />
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
             <div className="max-w-2xl">
                <h2 className="text-4xl font-extrabold tracking-tight uppercase mb-4">Orchestration Hub</h2>
                <p className="text-lg text-indigo-100 font-medium leading-relaxed">
                  Utilize advanced constraint satisfaction logic to generate optimal schedules, resolve teacher overlaps, and maximize room utilization.
                </p>
             </div>
             <button 
               onClick={startSmartGenerator}
               disabled={isGenerating}
               className="px-10 py-5 bg-white text-indigo-700 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-slate-50 transition-all flex items-center relative overflow-hidden group"
             >
                <Sparkles className={`w-4 h-4 mr-2 ${isGenerating ? 'animate-spin' : ''}`} />
                {isGenerating ? `Synthesizing ${generationProgress}%` : 'Compute Global Roster'}
             </button>
          </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
             <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                   <h3 className="text-base font-bold text-slate-900 uppercase tracking-tight flex items-center">
                      <ShieldAlert className="w-5 h-5 mr-2.5 text-amber-500" />
                      Constraint Resolution Feed
                   </h3>
                </div>
                <div className="divide-y divide-slate-100">
                   {[
                     { label: 'Conflict ST-22: Dr. Miller', status: 'Resolved', meta: 'Shifted to Node B-401', color: 'text-emerald-600' },
                     { label: 'Resource Buffer: Physics Lab', status: 'Optimized', meta: 'Efficiency 94.2%', color: 'text-indigo-600' },
                     { label: 'Faculty Workload Audit', status: 'Passed', meta: 'Compliance v4.0', color: 'text-emerald-600' },
                   ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-6 hover:bg-slate-50 transition-colors">
                         <div className="flex items-center space-x-5">
                            <div className="w-1 h-8 bg-slate-200 rounded-full"></div>
                            <div>
                               <p className="text-sm font-bold text-slate-900">{item.label}</p>
                               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">{item.meta}</p>
                            </div>
                         </div>
                         <span className={`px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest bg-slate-100 ${item.color}`}>
                            {item.status}
                         </span>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
             <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group">
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Solver Logs</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-8 italic">
                   "Processed 1,240 node permutations. Global efficiency optimized at 98.4%. One manual override detected for 'Advanced Ethics'."
                </p>
                <div className="grid grid-cols-2 gap-3">
                   <button className="py-3 bg-indigo-600 rounded-xl font-bold text-[9px] uppercase tracking-widest hover:bg-indigo-500 transition-all">Approve Set</button>
                   <button className="py-3 bg-slate-800 rounded-xl font-bold text-[9px] uppercase tracking-widest border border-white/5 hover:bg-slate-700 transition-all">Manual Edit</button>
                </div>
             </div>

             <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-6 flex items-center">
                   <Layers className="w-4 h-4 mr-2 text-indigo-600" /> Active Constraints
                </h3>
                <div className="space-y-4">
                   {[
                     { label: 'Room Buffer', value: '15%', active: true },
                     { label: 'Teacher Load', value: '6h/d', active: true },
                     { label: 'Lunch Offset', value: '30m', active: false },
                   ].map((ctrl, i) => (
                      <div key={i} className="flex justify-between items-center py-1">
                         <span className="text-[11px] text-slate-500 font-bold uppercase">{ctrl.label}</span>
                         <div className={`w-8 h-4 rounded-full transition-all ${ctrl.active ? 'bg-emerald-400' : 'bg-slate-200'}`}></div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
       </div>
    </div>
  );

  const renderRooms = () => (
    <div className="space-y-8 animate-fade-in">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-4">
          <div>
             <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">Spatial Inventory</h2>
             <p className="text-slate-500 font-medium mt-2 italic">Institutional infrastructure nodes and dynamic occupancy monitoring.</p>
          </div>
          <button className="bg-slate-900 text-white px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center transition-all hover:bg-indigo-600">
             <Plus className="w-4 h-4 mr-2" /> Register Resource
          </button>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Capacity', value: '4,280', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { label: 'Occupancy', value: '82%', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Laboratory', value: '12', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
            { label: 'Downtime', value: '0', icon: ShieldCheck, color: 'text-slate-400', bg: 'bg-slate-50' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 group hover:border-indigo-300 transition-all">
               <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6`}>
                  <stat.icon className="w-5 h-5" />
               </div>
               <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
               <h3 className="text-3xl font-extrabold text-slate-900">{stat.value}</h3>
            </div>
          ))}
       </div>

       <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50">
             <div className="flex items-center space-x-4 bg-white border border-slate-200 px-4 py-2.5 rounded-xl flex-1 max-w-lg shadow-sm group focus-within:ring-2 focus-within:ring-indigo-500/10">
                <Search className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-600" />
                <input type="text" placeholder="Search by building, floor or room ID..." className="bg-transparent border-none text-sm outline-none w-full font-medium" />
             </div>
             <div className="flex gap-2">
                <button className="p-2.5 border border-slate-200 rounded-xl hover:bg-slate-50"><Filter className="w-4 h-4 text-slate-500" /></button>
                <button className="p-2.5 border border-slate-200 rounded-xl hover:bg-slate-50"><Settings className="w-4 h-4 text-slate-500" /></button>
             </div>
          </div>
          <div className="overflow-x-auto">
             <table className="w-full text-left">
                <thead className="bg-slate-50/80">
                   <tr className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100">
                      <th className="px-8 py-5">Node Identity</th>
                      <th className="px-8 py-5">Node Type</th>
                      <th className="px-8 py-5">Occupancy Profile</th>
                      <th className="px-8 py-5 text-right">Status</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {[
                     { id: 'B-402', building: 'Engineering Node', type: 'Lecture Theatre', load: 85, status: 'Occupied' },
                     { id: 'L-102', building: 'Science Node', type: 'Bio-VR Lab', load: 42, status: 'Available' },
                     { id: 'CH-Main', building: 'Administrative', type: 'Exhibition Hall', load: 12, status: 'Maintenance' },
                   ].map((node, i) => (
                      <tr key={i} className="hover:bg-slate-50/30 transition-all group">
                         <td className="px-8 py-6">
                            <div className="flex items-center space-x-4">
                               <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center font-bold text-indigo-600 shadow-sm">#{node.id.split('-')[1] || node.id}</div>
                               <div>
                                  <p className="text-sm font-bold text-slate-900">{node.id}</p>
                                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">{node.building}</p>
                               </div>
                            </div>
                         </td>
                         <td className="px-8 py-6">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{node.type}</span>
                         </td>
                         <td className="px-8 py-6">
                            <div className="flex items-center space-x-3">
                               <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden"><div className="h-full bg-indigo-500" style={{width: `${node.load}%`}}></div></div>
                               <span className="text-[10px] font-bold text-slate-700">{node.load}%</span>
                            </div>
                         </td>
                         <td className="px-8 py-6 text-right">
                            <span className={`px-2.5 py-1 rounded text-[8px] font-black uppercase tracking-widest ${node.status === 'Available' ? 'bg-emerald-50 text-emerald-700' : node.status === 'Occupied' ? 'bg-indigo-50 text-indigo-700' : 'bg-rose-50 text-rose-700'}`}>{node.status}</span>
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
    <div className="space-y-10 animate-fade-in pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-10 gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
             <div className="w-1 h-6 bg-slate-900 rounded-full"></div>
             <span className="text-[10px] font-black uppercase text-slate-900 tracking-[0.2em]">Institutional Scheduler</span>
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">Smart Schedule</h1>
          <p className="text-slate-500 font-medium mt-4 tracking-tight text-lg max-w-2xl leading-relaxed italic">
            {isSuperAdmin ? 'Global scheduling policy orchestration, AI multi-tenant conflict resolution, and architectural week templates.' : (isAdminGroup ? 'Control node for institutional roster generation, resource mapping, and session oversight.' : 'Your personal academic timeline, laboratory nodes, and session participation sync.')}
          </p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200 shadow-inner overflow-x-auto no-scrollbar">
           {[
             { id: 'student', label: 'My Roadmap', roles: [UserRole.STUDENT, UserRole.PARENT] },
             { id: 'scheduler', label: 'AI Solver', roles: [UserRole.SUPER_ADMIN, UserRole.CAMPUS_ADMIN, UserRole.HOD_DEAN] },
             { id: 'rooms', label: 'Registry', roles: [UserRole.SUPER_ADMIN, UserRole.CAMPUS_ADMIN] },
             { id: 'faculty', label: 'Faculty Matrix', roles: [UserRole.SUPER_ADMIN, UserRole.CAMPUS_ADMIN, UserRole.HOD_DEAN] },
           ].filter(v => !v.roles || v.roles.includes(role)).map(view => (
             <button 
               key={view.id} 
               onClick={() => setActiveView(view.id as any)} 
               className={`px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${activeView === view.id ? 'bg-white text-slate-900 shadow-md ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-700'}`}
             >
               {view.label}
             </button>
           ))}
        </div>
      </header>

      {activeView === 'student' && renderStudentSchedule()}
      {activeView === 'scheduler' && renderScheduler()}
      {activeView === 'rooms' && renderRooms()}
      {activeView === 'faculty' && (
        <div className="text-center py-40 opacity-20 uppercase font-black text-xs tracking-[0.5em] flex flex-col items-center">
           <Users className="w-16 h-16 mb-8" />
           Matrix Rendering...
        </div>
      )}
    </div>
  );
};

export default Timetable;
