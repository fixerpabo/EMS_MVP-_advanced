
import React, { useState, useEffect } from 'react';
import { 
  FileSpreadsheet, 
  Search, 
  ChevronRight, 
  TrendingUp, 
  Sparkles, 
  Plus, 
  Clock, 
  Layers, 
  Zap, 
  HardDrive, 
  Settings, 
  ShieldCheck, 
  Scale, 
  Lock, 
  Unlock, 
  UserCheck, 
  FileCheck2, 
  Archive,
  MonitorCheck,
  Video,
  UserX,
  Fingerprint,
  AlertCircle,
  CalendarClock,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  MonitorDot,
  CheckCircle2,
  FileBadge,
  Eye,
  Activity,
  History,
  ShieldQuestion
} from 'lucide-react';
import { UserRole } from '../types';

interface ExamsProps {
  role: UserRole;
  defaultTab?: string;
}

const Exams: React.FC<ExamsProps> = ({ role, defaultTab }) => {
  const isSuperAdmin = role === UserRole.SUPER_ADMIN;
  const isCampusAdmin = role === UserRole.CAMPUS_ADMIN;
  const isAdminGroup = isSuperAdmin || isCampusAdmin || role === UserRole.TEACHER;
  const isStudent = role === UserRole.STUDENT;

  const [activeTab, setActiveTab] = useState<'overview' | 'scheduling' | 'secure-hub' | 'reports'>(
    (defaultTab as any) || 'overview'
  );

  // Sync state if defaultTab changes via Sidebar navigation
  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab as any);
    }
  }, [defaultTab]);

  // Expanded Concrete Mock Data for Scheduled Exams
  const scheduledExams = [
    { id: 'EX-101', title: 'Quantum Mechanics Final', date: 'Mar 24, 2024', time: '09:00 AM', duration: '3h', mode: 'Online (Secure Hub)', room: 'Virtual Node 4', invigilator: 'Dr. Thompson', status: 'Ready', credit: 4 },
    { id: 'EX-102', title: 'Neural Logic Mid-term', date: 'Mar 26, 2024', time: '11:30 AM', duration: '2h', mode: 'Offline', room: 'Hall B-201', invigilator: 'Prof. Miller', status: 'Scheduled', credit: 3 },
    { id: 'EX-103', title: 'Ethical Hacking Lab', date: 'Mar 28, 2024', time: '02:00 PM', duration: '4h', mode: 'Online (Secure Hub)', room: 'Virtual Node 1', invigilator: 'James Wilson', status: 'Scheduled', credit: 4 },
    { id: 'EX-104', title: 'Physics G12 Unit Test', date: 'Apr 02, 2024', time: '10:00 AM', duration: '1h', mode: 'Offline', room: 'Lab 4', invigilator: 'Sophia Loren', status: 'Scheduled', credit: 2 },
    { id: 'EX-105', title: 'Advanced Calculus', date: 'Apr 05, 2024', time: '09:00 AM', duration: '3h', mode: 'Online (Secure Hub)', room: 'Virtual Node 2', invigilator: 'Dr. Sarah Smith', status: 'Pending', credit: 4 },
    { id: 'EX-106', title: 'AI Ethics Seminar Paper', date: 'Apr 10, 2024', time: '02:00 PM', duration: '2h', mode: 'Online (Secure Hub)', room: 'Virtual Node 3', invigilator: 'Michael Bay', status: 'Pending', credit: 2 },
  ];

  // --- SECURE EXAMINATION HUB (Online Assessments & Proctoring Control) ---
  const renderSecureHub = () => (
    <div className="space-y-10 animate-fade-in">
       <div className="bg-slate-900 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group border border-white/5">
          <MonitorCheck className="absolute top-0 right-0 w-80 h-80 opacity-5 -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-1000" />
          <div className="relative z-10">
             <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-1 bg-indigo-500 rounded-full"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Cyber-Secure Node</span>
             </div>
             <h2 className="text-4xl font-black tracking-tighter uppercase leading-none mb-4">Secure Examination Hub</h2>
             <h3 className="text-xl text-slate-400 font-medium italic">Online Assessments & Proctoring Control</h3>
          </div>
       </div>

       {isAdminGroup ? (
         <>
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="enterprise-card p-8 bg-white border-t-4 border-t-emerald-500">
                 <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Active Streams</p>
                 <h3 className="text-4xl font-black text-slate-900">482</h3>
                 <div className="mt-4 flex items-center text-[10px] font-bold text-emerald-600">
                    <Activity className="w-3 h-3 mr-1" /> Live Telemetry Synced
                 </div>
              </div>
              <div className="enterprise-card p-8 bg-white border-t-4 border-t-rose-500">
                 <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Cheating Alerts</p>
                 <h3 className="text-4xl font-black text-rose-600">03</h3>
                 <div className="mt-4 flex items-center text-[10px] font-bold text-rose-500">
                    <ShieldAlert className="w-3 h-3 mr-1" /> Immediate Audit Req.
                 </div>
              </div>
              <div className="enterprise-card p-8 bg-white border-t-4 border-t-indigo-500">
                 <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Lockdown Active</p>
                 <h3 className="text-4xl font-black text-indigo-600">100%</h3>
                 <div className="mt-4 flex items-center text-[10px] font-bold text-indigo-400">
                    <Lock className="w-3 h-3 mr-1" /> Browser sandbox forced
                 </div>
              </div>
              <div className="enterprise-card p-8 bg-white border-t-4 border-t-amber-500">
                 <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Network Quality</p>
                 <h3 className="text-4xl font-black text-slate-900">High</h3>
                 <div className="mt-4 flex items-center text-[10px] font-bold text-amber-600">
                    <Zap className="w-3 h-3 mr-1" /> Latency: 12ms
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
                 <div className="px-10 py-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/20">
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center">
                       <MonitorDot className="w-6 h-6 mr-3 text-indigo-600 animate-pulse" />
                       Proctoring Control Panel
                    </h3>
                    <div className="flex gap-2">
                       <button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Global Lockdown</button>
                       <button className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50"><Settings className="w-4 h-4" /></button>
                    </div>
                 </div>
                 <div className="p-10 space-y-4">
                    {[
                      { id: 'STU-42', name: 'Liam Chen', issue: 'External device detected', severity: 'Critical', stream: 'Feed A-12' },
                      { id: 'STU-81', name: 'Emma Watson', issue: 'Eye-tracking anomaly', severity: 'Medium', stream: 'Feed B-04' },
                      { id: 'STU-102', name: 'James Doe', issue: 'Multiple faces present', severity: 'High', stream: 'Feed C-22' },
                    ].map((alert, i) => (
                       <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                          <div className="flex items-center space-x-6">
                             <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-sm ${alert.severity === 'Critical' ? 'bg-rose-50 border-rose-100 text-rose-500' : 'bg-amber-50 border-amber-100 text-amber-500'}`}>
                                <Video className="w-6 h-6" />
                             </div>
                             <div>
                                <p className="text-sm font-black text-slate-900">{alert.name} <span className="text-[10px] text-slate-400 font-bold ml-2">ID: {alert.id}</span></p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{alert.issue} • {alert.stream}</p>
                             </div>
                          </div>
                          <div className="flex gap-2">
                             <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-[9px] font-black uppercase hover:bg-indigo-600">Audit Stream</button>
                             <button className="px-4 py-2 bg-rose-600 text-white rounded-lg text-[9px] font-black uppercase">Lock Terminal</button>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="lg:col-span-4 space-y-6">
                 <div className="bg-indigo-600 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                    <Sparkles className="absolute top-0 right-0 w-32 h-32 p-8 opacity-20 group-hover:scale-125 transition-transform" />
                    <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">AI Proctor Co-Pilot</h4>
                    <p className="text-sm text-indigo-100 leading-relaxed mb-8 italic">
                       "Scanning all 482 streams. Behavioral patterns indicate 99% session integrity. 3 anomalies flagged for manual human review."
                    </p>
                    <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl">Synthesize Incident Log</button>
                 </div>
                 
                 <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Proctoring Protocols</h4>
                    <div className="space-y-4">
                       <div className="flex justify-between items-center py-2 border-b border-slate-50">
                          <span className="text-xs font-bold text-slate-700">Webcam Required</span>
                          <div className="w-8 h-4 bg-emerald-500 rounded-full"></div>
                       </div>
                       <div className="flex justify-between items-center py-2 border-b border-slate-50">
                          <span className="text-xs font-bold text-slate-700">Audio Analytics</span>
                          <div className="w-8 h-4 bg-emerald-500 rounded-full"></div>
                       </div>
                       <div className="flex justify-between items-center py-2">
                          <span className="text-xs font-bold text-slate-700">Keystroke Monitor</span>
                          <div className="w-8 h-4 bg-indigo-500 rounded-full"></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
         </>
       ) : (
         <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm text-center">
            <ShieldAlert className="w-16 h-16 mx-auto mb-6 text-slate-300" />
            <h3 className="text-2xl font-black text-slate-900 uppercase">Candidate Hub Unavailable</h3>
            <p className="text-slate-500 mt-2 max-w-sm mx-auto">This node is only active during live scheduled assessments for candidates.</p>
         </div>
       )}
    </div>
  );

  // --- SCHEDULING REGISTRY (Admin + Student Views) ---
  const renderScheduling = () => {
    if (isAdminGroup) {
      return (
        <div className="space-y-10 animate-fade-in">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-4">
              <div>
                 <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">Scheduling Registry</h2>
                 <p className="text-slate-500 font-medium mt-2 italic">Institutional assessment lifecycle management across all departments.</p>
              </div>
              <button className="bg-indigo-600 text-white px-8 py-5 rounded-3xl text-[10px] font-black uppercase tracking-widest shadow-2xl flex items-center hover:bg-indigo-500 transition-all">
                 <Plus className="w-4 h-4 mr-2" /> Assign New Slot
              </button>
           </div>

           <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-10 py-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/20">
                 <div className="flex items-center space-x-4">
                    <CalendarClock className="w-6 h-6 text-indigo-600" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Institutional Assessment Master</span>
                 </div>
                 <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="text" placeholder="Search exams..." className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium outline-none focus:ring-4 focus:ring-indigo-500/5 transition-all" />
                 </div>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-slate-50/50">
                       <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                          <th className="px-10 py-5">Assessment</th>
                          <th className="px-10 py-5">DateTime</th>
                          <th className="px-10 py-5">Mode/Node</th>
                          <th className="px-10 py-5">Staff</th>
                          <th className="px-10 py-5 text-right">Ops</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                       {scheduledExams.map((exam, i) => (
                          <tr key={i} className="hover:bg-slate-50/30 transition-all group">
                             <td className="px-10 py-6">
                                <div>
                                   <p className="text-sm font-black text-slate-900">{exam.title}</p>
                                   <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">ID: {exam.id}</p>
                                </div>
                             </td>
                             <td className="px-10 py-6">
                                <div className="flex items-center space-x-2">
                                   <Clock className="w-3.5 h-3.5 text-indigo-500" />
                                   <span className="text-xs font-bold text-slate-700">{exam.date} • {exam.time}</span>
                                </div>
                             </td>
                             <td className="px-10 py-6">
                                <span className={`px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest ${exam.mode.includes('Online') ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-100 text-slate-600'}`}>{exam.mode}</span>
                                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{exam.room}</p>
                             </td>
                             <td className="px-10 py-6 text-xs font-black text-slate-700">{exam.invigilator}</td>
                             <td className="px-10 py-6 text-right">
                                <button className="p-2 text-slate-300 hover:text-indigo-600 transition-colors"><Settings className="w-5 h-5" /></button>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>
      );
    }

    // Student Scheduling View - Personalized Assessment Roadmap
    return (
      <div className="space-y-12 animate-fade-in">
         <div className="bg-indigo-50 p-12 rounded-[4rem] border border-indigo-100 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
               <div className="max-w-xl">
                  <h3 className="text-4xl font-black text-indigo-900 tracking-tighter uppercase leading-none mb-4">My Examination Roadmap</h3>
                  <p className="text-lg text-indigo-700 font-medium leading-relaxed italic">
                     "Liam, you have {scheduledExams.length} scheduled assessments for the current cycle. Your first exam begins in 2 days."
                  </p>
               </div>
               <div className="w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl ring-8 ring-indigo-100">
                  <span className="text-3xl font-black text-indigo-600 leading-none">{scheduledExams.length}</span>
                  <span className="text-[8px] font-black uppercase text-indigo-400 mt-1">Scheduled</span>
               </div>
            </div>
            <Sparkles className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 text-indigo-600 group-hover:scale-125 transition-transform duration-1000" />
         </div>

         <div className="space-y-6">
            <div className="flex items-center justify-between px-4">
               <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Upcoming Sessions</h3>
               <button className="text-[10px] font-black text-indigo-600 uppercase hover:underline">Download Admit Cards</button>
            </div>
            
            {scheduledExams.map((exam, i) => (
               <div key={i} className={`enterprise-card p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-l-8 ${exam.status === 'Ready' ? 'border-l-emerald-500 animate-pulse' : 'border-l-slate-200'}`}>
                  <div className="flex items-center space-x-10">
                     <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center font-black text-xl shadow-inner ${exam.status === 'Ready' ? 'bg-emerald-50 text-emerald-600 shadow-emerald-100' : 'bg-slate-50 text-slate-400'}`}>
                        <CalendarClock className="w-10 h-10" />
                     </div>
                     <div className="space-y-2">
                        <div className="flex items-center gap-3">
                           <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-none uppercase">{exam.title}</h4>
                           <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[9px] font-black uppercase rounded-md">{exam.credit} Credits</span>
                        </div>
                        <div className="flex flex-wrap gap-6 mt-3">
                           <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center"><Clock className="w-4 h-4 mr-2 text-indigo-500" /> {exam.date} • {exam.time}</span>
                           <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center"><Layers className="w-4 h-4 mr-2 text-indigo-500" /> Duration: {exam.duration}</span>
                           <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center"><HardDrive className="w-4 h-4 mr-2 text-indigo-500" /> {exam.room}</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     {exam.mode.includes('Online') ? (
                        <button className="px-10 py-5 bg-slate-900 text-white rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:bg-indigo-600 transition-all flex items-center group">
                           Enter Secure Hub <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                     ) : (
                        <button className="px-10 py-5 bg-white border border-slate-200 text-slate-500 rounded-3xl font-black text-[10px] uppercase tracking-widest flex items-center">
                           Offline Seat: {exam.room.split(' ')[1]} <MonitorCheck className="w-4 h-4 ml-3" />
                        </button>
                     )}
                  </div>
               </div>
            ))}
         </div>
      </div>
    );
  };

  // --- OVERVIEW SUB-MODULES ---
  const renderSuperAdminExams = () => (
    <div className="space-y-10 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group border border-white/5">
          <Scale className="absolute top-0 right-0 w-32 h-32 opacity-5 p-8 text-indigo-400 group-hover:scale-110 transition-transform duration-700" />
          <Settings className="w-12 h-12 mb-8 text-indigo-400" />
          <h3 className="text-2xl font-black uppercase tracking-tight">Global Evaluation Rules</h3>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">Configure CGPA calibration, GPA bands, and grade normalization for the 2024-25 system-wide cycle.</p>
          <button className="mt-10 w-full py-4 bg-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-xl">Configure Logic Node</button>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm group">
          <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 mb-8 inline-block group-hover:scale-110 transition-transform"><Zap className="w-10 h-10" /></div>
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">AI-Grading Engine</h3>
          <p className="text-sm text-slate-500 mt-2">Active across 14 tenants. Performance index: 98.4%. Toggle global synthesis.</p>
          <div className="mt-10 flex items-center justify-between">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Engine Status</span>
            <button className="px-6 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-[10px] font-black uppercase border border-emerald-100 shadow-sm">Active & Synced</button>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm group">
          <div className="p-4 bg-slate-50 rounded-2xl text-slate-600 mb-8 inline-block group-hover:scale-110 transition-transform"><Archive className="w-10 h-10" /></div>
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Data Governance</h3>
          <p className="text-sm text-slate-500 mt-2">Approve or hard-delete institutional exam data blocks for compliance audit.</p>
          <button className="mt-10 w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 transition-all shadow-xl">Audit Registry</button>
        </div>
      </div>
      
      <div className="bg-indigo-50 p-12 rounded-[4rem] border border-indigo-100 flex items-center justify-between shadow-inner">
         <div className="flex items-center space-x-8">
            <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-indigo-600 shadow-xl border border-indigo-100"><FileCheck2 className="w-10 h-10" /></div>
            <div>
               <h3 className="text-3xl font-black text-indigo-900 tracking-tighter uppercase leading-none">Compliance Formats</h3>
               <p className="text-lg text-indigo-700 font-medium mt-2">Push system-wide result templates for governmental compliance.</p>
            </div>
         </div>
         <button className="px-10 py-5 bg-indigo-600 text-white rounded-3xl font-black text-[10px] uppercase tracking-widest shadow-2xl hover:bg-indigo-500">Deploy Global Format</button>
      </div>
    </div>
  );

  const renderCampusAdminExams = () => (
    <div className="space-y-10 animate-fade-in">
      <div className="flex justify-between items-center px-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">Examination Control</h2>
          <p className="text-slate-500 font-medium mt-2 italic">Institutional session scheduling, result release, and locking.</p>
        </div>
        <button className="bg-indigo-600 text-white px-8 py-5 rounded-3xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 flex items-center shadow-2xl">
          <Plus className="w-4 h-4 mr-2" /> Initialize Session
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {[1, 2].map(i => (
          <div key={i} className="enterprise-card p-12 group">
            <div className="flex justify-between items-start mb-10">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  <FileSpreadsheet className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none uppercase">Term {i} Final</h3>
                  <p className="text-[10px] text-slate-400 font-black uppercase mt-2 tracking-widest">{isSuperAdmin ? 'Master Global' : 'Institutional'} 2024-25</p>
                </div>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[9px] font-black uppercase tracking-widest border border-emerald-100">Released</span>
            </div>
            <div className="space-y-6 mb-12">
               <div className="flex justify-between items-center py-4 border-b border-slate-100 group/row hover:bg-slate-50/50 px-2 rounded-xl transition-all">
                  <div className="flex items-center space-x-3 text-slate-400 group-hover/row:text-indigo-500 transition-colors">
                     <UserCheck className="w-5 h-5" />
                     <span className="text-[10px] font-black uppercase tracking-widest">Invigilators Tasked</span>
                  </div>
                  <span className="text-base font-black text-slate-900">42 Teachers</span>
               </div>
               <div className="flex justify-between items-center py-4 border-b border-slate-100 group/row hover:bg-slate-50/50 px-2 rounded-xl transition-all">
                  <div className="flex items-center space-x-3 text-slate-400 group-hover/row:text-indigo-500 transition-colors">
                     <Layers className="w-5 h-5" />
                     <span className="text-[10px] font-black uppercase tracking-widest">Seating Capacity</span>
                  </div>
                  <span className="text-base font-black text-slate-900">1,200 Seats</span>
               </div>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 py-5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl">Release Results</button>
              <button className="p-5 bg-slate-100 text-slate-400 rounded-2xl hover:text-indigo-600 transition-all"><Lock className="w-6 h-6" /></button>
              <button className="p-5 bg-slate-100 text-slate-400 hover:text-indigo-600 rounded-2xl transition-all"><HardDrive className="w-6 h-6" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStudentExams = () => (
    <div className="space-y-10 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="enterprise-card p-10 border-l-4 border-l-indigo-600 group">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-indigo-600 transition-colors">Rank Analytics</p>
          <h3 className="text-4xl font-black text-slate-900 tracking-tighter">Percentile: 96.4</h3>
          <div className="flex items-center text-emerald-600 text-xs font-bold mt-4">
            <TrendingUp className="w-4 h-4 mr-1.5" /> Top 5 in Physics Cohort
          </div>
        </div>
        <div className="enterprise-card p-10 border-l-4 border-l-emerald-600">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Verified Credentials</p>
          <h3 className="text-4xl font-black text-slate-900 tracking-tighter">3.92 GPA</h3>
          <p className="text-xs text-slate-500 font-medium mt-4 italic uppercase">Academic Cycle 2024-25</p>
        </div>
        <div className="bg-slate-900 p-10 rounded-[3rem] shadow-2xl text-white relative overflow-hidden group">
          <Sparkles className="absolute -right-4 -top-4 w-40 h-40 opacity-10 group-hover:scale-125 transition-transform duration-1000" />
          <h3 className="text-2xl font-black mb-1 uppercase tracking-tighter">AI Score Predictor</h3>
          <p className="text-sm text-slate-400 mt-2 mb-10 leading-relaxed font-medium">Predicting 98% mastery in next Neural logic module based on current pace.</p>
          <button className="w-full py-4 bg-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-xl">Review Learning Roadmap</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-10 gap-6">
        <div>
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
             <span className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.3em]">Institutional node</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Assessment Hub</h1>
          <p className="text-slate-500 font-medium mt-4 tracking-tight text-lg max-w-2xl leading-relaxed">
            {isSuperAdmin ? 'Global exam policy orchestration, AI engine calibration, and system-wide compliance monitoring.' : (isCampusAdmin ? 'Institution-level session scheduling, faculty tasking, and result release management.' : 'Systematic performance tracking, verified results, and AI-driven growth forecasting.')}
          </p>
        </div>
        <div className="flex bg-slate-100 p-1.5 rounded-[1.5rem] border border-slate-200 shadow-inner overflow-x-auto no-scrollbar">
           {[
             { id: 'overview', label: 'Overview' },
             { id: 'scheduling', label: 'Scheduling' },
             { id: 'secure-hub', label: 'Secure Hub', roles: [UserRole.SUPER_ADMIN, UserRole.CAMPUS_ADMIN, UserRole.TEACHER] },
             { id: 'reports', label: 'Reports' },
           ].filter(t => !t.roles || t.roles.includes(role)).map(tab => (
             <button 
               key={tab.id}
               onClick={() => setActiveTab(tab.id as any)}
               className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-white text-indigo-600 shadow-md ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-700'}`}
             >
               {tab.label}
             </button>
           ))}
        </div>
      </header>

      {activeTab === 'overview' && (isSuperAdmin ? renderSuperAdminExams() : (isCampusAdmin ? renderCampusAdminExams() : renderStudentExams()))}
      {activeTab === 'scheduling' && renderScheduling()}
      {activeTab === 'secure-hub' && renderSecureHub()}
      {activeTab === 'reports' && <div className="text-center py-40 opacity-20 uppercase font-black text-xs tracking-[1em] flex flex-col items-center"><FileSpreadsheet className="w-16 h-16 mb-8" /> Analytical Report Streams Rendering...</div>}
    </div>
  );
};

export default Exams;
