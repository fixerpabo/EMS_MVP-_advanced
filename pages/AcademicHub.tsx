
import React, { useState } from 'react';
import { 
  GraduationCap, 
  Plus, 
  ChevronRight, 
  Sparkles, 
  X, 
  ArrowLeft, 
  Calendar,
  Layers,
  Settings2,
  Clock,
  User,
  Users,
  ShieldCheck,
  Globe,
  Database,
  Search,
  Settings,
  ShieldAlert,
  FileText,
  FileUp,
  Lock,
  Eye,
  Trash2,
  Zap,
  HardDrive,
  Cpu,
  Glasses,
  ListTree,
  ClipboardList,
  Server,
  Key,
  ShieldQuestion,
  FileJson,
  BarChart4,
  Copy,
  LayoutTemplate,
  PlayCircle,
  Upload,
  BookOpen,
  CheckCircle2,
  MessageSquare,
  BarChart3,
  History,
  Repeat,
  Archive,
  Star,
  MoreVertical,
  HelpCircle,
  Filter,
  CheckSquare,
  FileCode,
  ArrowRight,
  TrendingDown,
  AlertTriangle,
  Unlock,
  BookMarked,
  Flag,
  // Added missing Activity and Edit3 icons
  Activity,
  Edit3
} from 'lucide-react';
import { UserRole } from '../types';

const AcademicHub: React.FC<{ role: UserRole; defaultTab?: string }> = ({ role, defaultTab }) => {
  const isSuperAdmin = role === UserRole.SUPER_ADMIN || role === UserRole.CAMPUS_ADMIN; // Merged Admin + Super Admin
  const isTeacher = role === UserRole.TEACHER;
  const isHOD = role === UserRole.HOD_DEAN;
  const isStudent = role === UserRole.STUDENT;
  
  const [activeTab, setActiveTab] = useState<'topics' | 'lms' | 'tasks' | 'vrlab'>(
    defaultTab === 'lms' ? 'lms' : (defaultTab === 'vrlab' ? 'vrlab' : (defaultTab === 'topics' ? 'topics' : 'tasks'))
  );
  
  // Topic Management State
  const [topicView, setTopicView] = useState<'list' | 'builder' | 'approval' | 'governance'>('list');
  const [selectedTopic, setSelectedTopic] = useState<any>(null);

  // --- TOPIC MANAGEMENT MODULE ---
  const renderTopicLibrary = () => {
    // 1. SUPER ADMIN VIEW: Master Registry & Governance
    if (isSuperAdmin) {
      return (
        <div className="space-y-10 animate-fade-in">
          <div className="bg-slate-900 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group border border-white/5">
            <Globe className="absolute top-0 right-0 w-80 h-80 opacity-5 -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
               <div className="max-w-xl">
                  <h2 className="text-5xl font-black tracking-tighter uppercase leading-none mb-6">Master Curriculum</h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed italic">
                    Centralized architecture for all departments. Versioning, licensing, and mass deployment orchestration.
                  </p>
               </div>
               <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-10 py-5 bg-white text-slate-900 rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-50 shadow-xl flex items-center">
                    <FileUp className="w-4 h-4 mr-2" /> Bulk CSV Import
                  </button>
                  <button className="px-10 py-5 bg-indigo-600 text-white rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-500 shadow-xl flex items-center">
                    <History className="w-4 h-4 mr-2" /> Clone Version
                  </button>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="enterprise-card p-10 group border-t-4 border-t-indigo-600">
                <div className="flex justify-between items-start mb-8">
                   <LayoutTemplate className="w-10 h-10 text-indigo-600" />
                   <span className="text-[9px] font-black bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full uppercase">Template Node</span>
                </div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">Standard AI Tree</h4>
                <p className="text-sm text-slate-500 mt-2 font-medium">Apply this hierarchy across Computer Science departments globally.</p>
                <div className="mt-8 pt-8 border-t border-slate-50 space-y-3">
                   <button className="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all">Apply to Campus A/B</button>
                   <button className="w-full py-4 border border-slate-200 text-slate-500 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all">Define Permissions</button>
                </div>
             </div>

             <div className="enterprise-card p-10 group border-t-4 border-t-emerald-600">
                <div className="flex justify-between items-start mb-8">
                   <History className="w-10 h-10 text-emerald-600" />
                   <span className="text-[9px] font-black bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full uppercase">v2024.1 Active</span>
                </div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">Syllabus Versioning</h4>
                <p className="text-sm text-slate-500 mt-2 font-medium">Maintain historical records and push academic updates to live batches.</p>
                <div className="mt-8 pt-8 border-t border-slate-50 space-y-3">
                   <div className="flex justify-between items-center px-2">
                      <span className="text-[10px] font-bold text-slate-400">Next Audit</span>
                      <span className="text-[10px] font-black text-slate-900">MAR 24</span>
                   </div>
                   <button className="w-full py-4 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-2xl text-[10px] font-black uppercase tracking-widest">Push Updates</button>
                </div>
             </div>

             <div className="bg-slate-50 border-2 border-dashed border-slate-200 p-10 rounded-[3rem] flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity">
                <Plus className="w-12 h-12 text-slate-300 mb-4" />
                <h4 className="text-lg font-black text-slate-400 uppercase tracking-tighter">New Master Node</h4>
                <button className="mt-6 px-6 py-2 bg-white border border-slate-200 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:shadow-md transition-all">Initialize Tree</button>
             </div>
          </div>
          
          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
             <div className="p-10 border-b border-slate-50 flex justify-between items-center bg-slate-50/20">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter flex items-center">
                   <Activity className="w-8 h-8 mr-4 text-indigo-600" /> Multi-Campus Compliance Dashboard
                </h3>
             </div>
             <div className="p-10 text-center text-slate-400 font-black text-[10px] uppercase tracking-[0.5em] py-24">
                Loading Global Analytic Streams...
             </div>
          </div>
        </div>
      );
    }

    // 2. HOD VIEW: Approval & Compliance
    if (isHOD) {
      return (
        <div className="space-y-10 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
             <div className="lg:col-span-8 space-y-8">
                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
                   <div className="flex justify-between items-center mb-10">
                      <div>
                         <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter flex items-center">
                            <ShieldCheck className="w-7 h-7 mr-3 text-emerald-600" /> Approval Queue
                         </h3>
                         <p className="text-sm text-slate-500 font-medium mt-1">Pending topics and resources requiring quality check.</p>
                      </div>
                      <span className="bg-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase">12 Pending</span>
                   </div>
                   <div className="space-y-4">
                      {[
                        { title: 'Neural Ethics v2', faculty: 'Dr. Thompson', type: 'New Topic', status: 'Pending' },
                        { title: 'Optics Lab PDF', faculty: 'Prof. Miller', type: 'Content Update', status: 'Pending' },
                      ].map((item, i) => (
                        <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] flex items-center justify-between group hover:bg-white hover:shadow-xl transition-all">
                           <div className="flex items-center space-x-6">
                              <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-indigo-600 font-black text-xs shadow-sm">#{i+1}</div>
                              <div>
                                 <p className="text-base font-black text-slate-900">{item.title}</p>
                                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">By {item.faculty} • {item.type}</p>
                              </div>
                           </div>
                           <div className="flex gap-2">
                              <button className="p-3 bg-emerald-100 text-emerald-700 rounded-xl hover:bg-emerald-600 hover:text-white transition-all"><CheckCircle2 className="w-4 h-4" /></button>
                              <button className="p-3 bg-rose-100 text-rose-700 rounded-xl hover:bg-rose-600 hover:text-white transition-all"><X className="w-4 h-4" /></button>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
                   <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-8 flex items-center">
                      <BarChart3 className="w-7 h-7 mr-3 text-indigo-600" /> Section Comparison
                   </h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Section A (Regular)</p>
                         <div className="flex justify-between items-end">
                            <p className="text-4xl font-black text-slate-900">82%</p>
                            <p className="text-[10px] text-emerald-600 font-black uppercase">On Schedule</p>
                         </div>
                      </div>
                      <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Section B (Advance)</p>
                         <div className="flex justify-between items-end">
                            <p className="text-4xl font-black text-slate-900">94%</p>
                            <p className="text-[10px] text-indigo-600 font-black uppercase">Pacing High</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="lg:col-span-4 space-y-8">
                <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group border border-white/5">
                   <Lock className="absolute top-0 right-0 w-32 h-32 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700 text-indigo-400" />
                   <h3 className="text-2xl font-black mb-4 tracking-tighter uppercase leading-none">Curriculum Lock</h3>
                   <p className="text-sm text-slate-400 leading-relaxed mb-10">Freeze topic structures across all departments to maintain semester uniformity.</p>
                   <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-black/20 hover:bg-indigo-500 active:scale-95 transition-all">Activate Hard Lock</button>
                </div>

                <div className="bg-rose-50 p-8 rounded-[3rem] border border-rose-100 border-l-8 border-l-rose-500">
                   <h4 className="text-rose-900 font-black text-sm uppercase tracking-widest flex items-center mb-3">
                      <ShieldAlert className="w-5 h-5 mr-2" /> Compliance Alert
                   </h4>
                   <p className="text-xs text-rose-700 font-medium leading-relaxed italic">
                      "Batch 2024 Science has dropped 14% below the required syllabus coverage. AI recommends pushing a forced revision block next week."
                   </p>
                   <button className="mt-6 w-full py-3 bg-white border border-rose-200 text-rose-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all">Schedule Revision</button>
                </div>
             </div>
          </div>
        </div>
      );
    }

    // 3. TEACHER VIEW: Builder & Support
    if (isTeacher) {
      return (
        <div className="space-y-10 animate-fade-in">
           <div className="flex justify-between items-center px-4">
              <div>
                 <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">My Delivery Roadmap</h2>
                 <p className="text-slate-500 font-medium mt-2 italic">Map topics to delivery dates, upload content, and respond to help requests.</p>
              </div>
              <button className="bg-indigo-600 text-white px-8 py-5 rounded-3xl text-[10px] font-black uppercase tracking-widest shadow-2xl flex items-center group">
                 <Plus className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" /> Initialize Topic Node
              </button>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-6">
                 {['Fundamental Wave Mechanics', 'Schrödinger Equations', 'Observer Effect'].map((topic, i) => (
                    <div key={i} className="enterprise-card p-10 group flex flex-col md:flex-row md:items-center justify-between gap-10">
                       <div className="flex items-center space-x-6">
                          <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-inner font-black text-xl">{i+1}</div>
                          <div>
                             <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-1">{topic}</h3>
                             <div className="flex gap-3 mt-3">
                                <span className="text-[9px] font-black bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-lg uppercase border border-emerald-100 flex items-center">
                                   <CheckSquare className="w-3 h-3 mr-1.5" /> Published
                                </span>
                                <span className="text-[9px] font-black bg-slate-100 text-slate-400 px-2.5 py-1 rounded-lg uppercase flex items-center">
                                   <Clock className="w-3 h-3 mr-1.5" /> Scheduled: Mar {15 + i}
                                </span>
                             </div>
                          </div>
                       </div>
                       <div className="flex gap-2">
                          <button className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-slate-100"><Upload className="w-6 h-6" /></button>
                          <button className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-slate-100"><Edit3 className="w-6 h-6" /></button>
                          <button className="px-6 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl">Mark Delivered</button>
                       </div>
                    </div>
                 ))}
              </div>

              <div className="space-y-8">
                 <div className="bg-indigo-600 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                    <Sparkles className="absolute top-0 right-0 w-32 h-32 p-8 opacity-20 group-hover:scale-125 transition-transform" />
                    <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter leading-none">Instructor AI</h4>
                    <div className="space-y-3 mb-10">
                       <button className="w-full py-4 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-indigo-600 transition-all flex items-center justify-center">
                          <FileCode className="w-4 h-4 mr-2" /> Auto-Gen Lesson Notes
                       </button>
                       <button className="w-full py-4 bg-white/10 border border-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-indigo-600 transition-all flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 mr-2" /> AI Quiz Generator
                       </button>
                    </div>
                    <p className="text-xs text-indigo-100 font-medium italic">"Current batch shows 42% difficulty on Schrödinger derivation. Recommendation: Insert a remedial simulation."</p>
                 </div>

                 <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <h3 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-6 flex items-center">
                       <MessageSquare className="w-5 h-5 mr-3 text-rose-500" /> Student Help Tickets
                    </h3>
                    <div className="space-y-4">
                       {[
                         { user: 'Liam Chen', topic: 'Observer Effect', time: '10m ago' },
                         { user: 'Emma Watson', topic: 'Equation Logic', time: '2h ago' },
                       ].map((tic, i) => (
                          <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl group hover:bg-white hover:shadow-lg transition-all flex items-center justify-between">
                             <div>
                                <p className="text-sm font-bold text-slate-900">{tic.user}</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase">{tic.topic}</p>
                             </div>
                             <button className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all"><ArrowRight className="w-4 h-4" /></button>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      );
    }

    // 4. STUDENT VIEW: Study & Interactive roadmap
    if (isStudent) {
      return (
        <div className="space-y-12 animate-fade-in pb-20">
           <div className="bg-indigo-50 p-12 rounded-[4rem] border border-indigo-100 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
                 <div className="max-w-xl">
                    <h3 className="text-4xl font-black text-indigo-900 tracking-tighter uppercase leading-none mb-4">My Academic Roadmap</h3>
                    <p className="text-lg text-indigo-700 font-medium leading-relaxed italic">
                       "Liam, you are 74% through the Physics syllabus. Your next milestone is 'Quantum Tunneling' scheduled for tomorrow."
                    </p>
                 </div>
                 <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-3xl font-black text-indigo-600 shadow-2xl ring-8 ring-indigo-100">
                    74%
                 </div>
              </div>
              <Sparkles className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 text-indigo-600 group-hover:scale-125 transition-transform duration-1000" />
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              <div className="lg:col-span-3 space-y-6">
                 {[
                   { title: 'Neural Architectures', units: 4, status: 'Completed', color: 'indigo' },
                   { title: 'Computational Logic', units: 6, status: 'Active', color: 'emerald' },
                   { title: 'Applied Ethical AI', units: 3, status: 'Locked', color: 'slate' },
                 ].map((mod, i) => (
                    <div key={i} className={`enterprise-card p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 border-l-8 ${mod.status === 'Completed' ? 'border-l-indigo-600' : mod.status === 'Active' ? 'border-l-emerald-600 animate-pulse' : 'border-l-slate-200'}`}>
                       <div className="flex items-center space-x-8">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-inner ${mod.status === 'Locked' ? 'bg-slate-50 text-slate-300' : 'bg-indigo-50 text-indigo-600'}`}>
                             {mod.status === 'Locked' ? <Lock className="w-7 h-7" /> : (i + 1)}
                          </div>
                          <div>
                             <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-1 uppercase">{mod.title}</h4>
                             <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">{mod.units} Detailed Learning Units</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-4">
                          {mod.status !== 'Locked' && (
                             <>
                                <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl">Launch Content Hub</button>
                                <button className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:text-indigo-600 transition-all"><BookMarked className="w-6 h-6" /></button>
                             </>
                          )}
                          {mod.status === 'Locked' && <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-4">Completion of Mod 2 Required</span>}
                       </div>
                    </div>
                 ))}
              </div>

              <div className="space-y-8">
                 <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                    <Sparkles className="absolute top-0 right-0 w-32 h-32 p-8 opacity-10 group-hover:scale-125 transition-transform text-indigo-400" />
                    <h4 className="text-2xl font-black mb-6 tracking-tighter uppercase leading-none">Topic Difficulty</h4>
                    <p className="text-sm text-slate-400 mb-8 font-medium italic leading-relaxed">"Mark how you feel about current topics. AI will adjust your revision intensity."</p>
                    <div className="flex gap-2">
                       <button className="flex-1 py-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">Easy</button>
                       <button className="flex-1 py-3 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all">Medium</button>
                       <button className="flex-1 py-3 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all">Hard</button>
                    </div>
                 </div>

                 <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm text-center">
                    <HelpCircle className="w-12 h-12 mx-auto mb-6 text-indigo-600" />
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-4">Request Help</h4>
                    <p className="text-sm text-slate-500 font-medium mb-8 leading-relaxed italic">"Feeling stuck on a specific derivation? Alert your instructor immediately."</p>
                    <button className="w-full py-4 bg-indigo-50 text-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all active:scale-95">Send Request Flag</button>
                 </div>
              </div>
           </div>
        </div>
      );
    }

    return <div className="text-center py-40 opacity-20 uppercase font-black text-xs tracking-[0.5em] flex flex-col items-center"><ListTree className="w-16 h-16 mb-8" /> Topic Library Node Rendering...</div>;
  };

  // --- LMS Hub ---
  const renderLMSModule = () => {
    if (isSuperAdmin) {
      return (
        <div className="space-y-10 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm group">
              <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 mb-6 inline-block group-hover:scale-110 transition-transform"><HardDrive className="w-8 h-8" /></div>
              <h3 className="text-xl font-black text-slate-900 uppercase">Storage Policy</h3>
              <p className="text-sm text-slate-500 mt-2">Manage global CDN rules and per-tenant storage quotas.</p>
              <div className="mt-8 space-y-4">
                <div className="flex justify-between text-[10px] font-black uppercase text-slate-400"><span>Global Cap: 500TB</span><span>Active: 124TB</span></div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-indigo-500 w-[24%]"></div></div>
                <button className="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all">Configure Quotas</button>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm group">
              <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-600 mb-6 inline-block group-hover:scale-110 transition-transform"><ShieldCheck className="w-8 h-8" /></div>
              <h3 className="text-xl font-black text-slate-900 uppercase">Global LMS Rules</h3>
              <p className="text-sm text-slate-500 mt-2">Define completion thresholds and access restrictions for all tenants.</p>
              <div className="mt-8 space-y-3">
                <div className="p-4 bg-slate-50 rounded-xl flex justify-between items-center"><span className="text-[10px] font-bold text-slate-700">Min Watch %</span><span className="text-[10px] font-black">80%</span></div>
                <div className="p-4 bg-slate-50 rounded-xl flex justify-between items-center"><span className="text-[10px] font-bold text-slate-700">Certificate Generation</span><span className="text-[10px] font-black text-emerald-600">ON</span></div>
                <button className="w-full mt-2 py-4 border-2 border-slate-100 text-slate-600 rounded-2xl text-[10px] font-black uppercase hover:bg-slate-50 transition-all">Edit Global Policy</button>
              </div>
            </div>

            <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="p-4 bg-white/10 rounded-2xl text-indigo-400 mb-6 inline-block backdrop-blur-md"><Globe className="w-8 h-8" /></div>
              <h3 className="text-xl font-black uppercase">Tenant Control</h3>
              <p className="text-sm text-slate-400 mt-2">Enable or disable LMS modules across institutional instances.</p>
              <div className="mt-10 space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-xs font-bold">Inst_A_North</span>
                  <div className="w-8 h-4 bg-emerald-500 rounded-full"></div>
                </div>
                <button className="w-full py-4 bg-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-50 transition-all">Batch Deactivate</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div className="text-center py-40 opacity-20 uppercase font-black text-xs tracking-[0.5em] flex flex-col items-center"><GraduationCap className="w-16 h-16 mb-8" /> LMS Portal Rendering...</div>;
  };

  // --- TAXONOMY HUB ---
  const renderLearningNode = () => {
    if (isSuperAdmin) {
      return (
        <div className="space-y-10 animate-fade-in">
          <div className="bg-slate-900 p-12 rounded-[4rem] text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">Global Learning Taxonomy</h2>
                <p className="text-lg text-slate-400 mt-4 max-w-md font-medium">Orchestrate the system-wide Course → Unit → Topic hierarchy for all tenants.</p>
             </div>
             <div className="relative z-10 flex gap-4">
                <button className="px-10 py-5 bg-white text-slate-900 rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-50 transition-all flex items-center shadow-xl">
                   <FileUp className="w-4 h-4 mr-2" /> Bulk CSV Import
                </button>
                <button className="p-5 bg-indigo-600 rounded-3xl hover:bg-indigo-500 transition-all"><Plus className="w-6 h-6" /></button>
             </div>
             <Sparkles className="absolute -bottom-12 -right-12 w-64 h-64 opacity-5 text-indigo-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="enterprise-card p-10 flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg uppercase tracking-widest">Global Taxonomy Node #{i}</span>
                    <button className="p-2 text-slate-300 hover:text-indigo-600 transition-colors"><Settings2 className="w-5 h-5" /></button>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Computer Science (Gen 4)</h3>
                  <p className="text-sm text-slate-500 mt-4 leading-relaxed font-medium">Standard structure for 2024-25. Includes 12 unit constraints and auto-assign rules.</p>
                </div>
                <div className="mt-12 flex gap-3">
                  <button className="flex-1 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg">Permissions</button>
                  <button className="flex-1 py-4 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-100 transition-all">Activated</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return <div className="text-center py-40 opacity-20 uppercase font-black text-xs tracking-[0.5em] flex flex-col items-center"><ClipboardList className="w-16 h-16 mb-8" /> Learning Taxonomy Node Rendering...</div>;
  };

  // --- VR Labs Hub ---
  const renderVRLab = () => {
    if (isSuperAdmin) {
      return (
        <div className="space-y-10 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-10">
                   <div>
                     <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">VR Vendor Integration</h3>
                     <p className="text-sm text-slate-500 mt-2 font-medium">Manage WebXR, Unity, and Unreal SDK keys for simulation nodes.</p>
                   </div>
                   <div className="p-4 bg-indigo-50 rounded-3xl text-indigo-600 shadow-inner"><Key className="w-10 h-10" /></div>
                </div>
                <div className="space-y-4">
                  {['Meta SDK Entry', 'Unity WebXR Hub', 'Unreal Portal Key'].map(sdk => (
                    <div key={sdk} className="flex justify-between items-center p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:bg-white hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-4">
                         <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                         <span className="font-bold text-slate-700">{sdk}</span>
                      </div>
                      <button className="px-6 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-indigo-600 uppercase hover:bg-indigo-600 hover:text-white transition-all shadow-sm">Update Key</button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 p-8 bg-slate-900 rounded-[3rem] text-white flex items-center justify-between shadow-2xl">
                 <div className="flex items-center space-x-5">
                    <ShieldQuestion className="w-10 h-10 text-indigo-400" />
                    <div>
                       <p className="text-sm font-black uppercase tracking-tight">Privacy Guard: Enabled</p>
                       <p className="text-xs text-slate-400">VR session data retention policy active.</p>
                    </div>
                 </div>
                 <button className="p-3 bg-white/10 rounded-2xl hover:bg-white/20 transition-all"><Settings2 className="w-5 h-5" /></button>
              </div>
            </div>
            <div className="bg-indigo-600 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between group">
              <Cpu className="absolute top-0 right-0 w-64 h-64 opacity-10 -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative z-10">
                <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter leading-none">Global Asset Repository</h3>
                <p className="text-lg text-indigo-100 font-medium leading-relaxed">Inventory management of 14,200 interactive VR assets and commercial rights.</p>
              </div>
              <div className="mt-12 space-y-6 relative z-10">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-8 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/10 text-center">
                       <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300 mb-1">Asset Sync</p>
                       <p className="text-2xl font-black">98.2%</p>
                    </div>
                    <div className="p-8 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/10 text-center">
                       <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300 mb-1">Total Licenses</p>
                       <p className="text-2xl font-black">42</p>
                    </div>
                 </div>
                 <button className="w-full py-6 bg-slate-900 text-white rounded-[2.5rem] font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-2xl flex items-center justify-center">
                    Manage Global Asset Licenses <ChevronRight className="w-4 h-4 ml-2" />
                 </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div className="text-center py-40 opacity-20 uppercase font-black text-xs tracking-[0.5em] flex flex-col items-center"><Glasses className="w-16 h-16 mb-8" /> VR Labs Hub Rendering...</div>;
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-fade-in pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-10 gap-6">
        <div>
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
             <span className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.3em]">
                {isSuperAdmin ? 'Global Administrative Node' : (isHOD ? 'Department Control Node' : 'Learning Ecosystem')}
             </span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
             {activeTab === 'topics' ? 'Topic Hub' : 'System Hub'}
          </h1>
          <p className="text-slate-500 font-medium mt-4 tracking-tight text-lg max-w-2xl leading-relaxed">
             {activeTab === 'topics' 
               ? (isSuperAdmin ? 'Global curriculum architecture, version control, and template deployment.' : isHOD ? 'Quality assurance, teacher tasking, and completion pacing oversight.' : isTeacher ? 'Course delivery mapping, AI content generation, and student support.' : 'Your personal learning roadmap, topic mastery, and AI tutor sync.')
               : 'Integrated educational operations for academic and administrative excellence.'}
          </p>
        </div>
        <div className="flex bg-slate-100 p-1.5 rounded-[1.5rem] border border-slate-200 shadow-inner overflow-x-auto no-scrollbar">
           {[
             { id: 'topics', label: 'Topic Mgmt', icon: ListTree },
             { id: 'lms', label: 'LMS Center', icon: GraduationCap },
             { id: 'tasks', label: 'Taxonomy', icon: ClipboardList },
             { id: 'vrlab', label: 'VR Hub', icon: Glasses },
           ].map(tab => (
             <button key={tab.id} onClick={() => { setActiveTab(tab.id as any); }} className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center whitespace-nowrap ${activeTab === tab.id ? 'bg-white text-indigo-600 shadow-md ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-700'}`}>
               <tab.icon className={`w-4 h-4 mr-2 ${activeTab === tab.id ? 'text-indigo-600' : 'text-slate-400'}`} /> {tab.label}
             </button>
           ))}
        </div>
      </header>

      {activeTab === 'topics' && renderTopicLibrary()}
      {activeTab === 'lms' && renderLMSModule()}
      {activeTab === 'tasks' && renderLearningNode()}
      {activeTab === 'vrlab' && renderVRLab()}
    </div>
  );
};

export default AcademicHub;
