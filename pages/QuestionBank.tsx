
import React, { useState } from 'react';
import { 
  Database, 
  Search, 
  ChevronRight, 
  Sparkles, 
  Zap, 
  GraduationCap, 
  History,
  ShieldCheck,
  Lock,
  Plus,
  Trash2,
  Layers,
  Settings,
  ShieldAlert,
  HardDrive,
  Cpu,
  LayoutGrid,
  FileText,
  BadgeCheck,
  Calendar,
  BookOpen,
  Upload,
  X,
  CheckCircle2,
  FileUp,
  GanttChartSquare,
  Network,
  ListChecks,
  RefreshCw
} from 'lucide-react';
import { UserRole, QuestionPaper } from '../types';

const QuestionBank: React.FC<{ role: UserRole }> = ({ role }) => {
  const isSuperAdmin = role === UserRole.SUPER_ADMIN;
  const isCampusAdmin = role === UserRole.CAMPUS_ADMIN;
  const isAdminGroup = isSuperAdmin || isCampusAdmin;
  const isStudent = role === UserRole.STUDENT;

  const [activeTab, setActiveTab] = useState<'practice' | 'archive' | 'admin'>(isStudent ? 'practice' : 'admin');
  const [showCreatePaperModal, setShowCreatePaperModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState<string | null>(null);

  // Mock initial papers
  const [papers, setPapers] = useState<QuestionPaper[]>([
    { id: 'QP1', title: 'Final Assessment 2024', subject: 'Quantum Mechanics', year: '2024', examType: 'Final', questionCount: 45, difficulty: 'Hard' },
    { id: 'QP2', title: 'Mid-Term Dynamics', subject: 'Neural Logic', year: '2023', examType: 'Mid-term', questionCount: 30, difficulty: 'Medium' },
    { id: 'QP3', title: 'Unit Test: Wave Theory', subject: 'Physics G12', year: '2024', examType: 'Unit Test', questionCount: 15, difficulty: 'Easy' },
  ]);

  const [newPaper, setNewPaper] = useState({
    title: '',
    subject: 'Quantum Mechanics',
    year: '2024',
    examType: 'Final' as any,
    difficulty: 'Medium'
  });

  const handleCreatePaper = () => {
    const paper: QuestionPaper = {
      id: `QP${Date.now()}`,
      ...newPaper,
      questionCount: 0,
    };
    setPapers([paper, ...papers]);
    setShowCreatePaperModal(false);
  };

  const renderPracticeView = () => (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">Practice Inventory</h2>
          <p className="text-slate-500 font-medium mt-2">Access verified question papers and institutional assessments for mastery practice.</p>
        </div>
        <div className="relative w-full md:w-80 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
          <input type="text" placeholder="Filter by subject or year..." className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-medium outline-none focus:ring-4 focus:ring-indigo-500/5 transition-all" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {papers.map((paper) => (
          <div key={paper.id} className="enterprise-card p-8 group hover:border-indigo-600 transition-all flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                <FileText className="w-6 h-6" />
              </div>
              <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                paper.difficulty === 'Hard' ? 'bg-rose-50 text-rose-600' : paper.difficulty === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
              }`}>
                {paper.difficulty}
              </span>
            </div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2 group-hover:text-indigo-600 transition-colors">{paper.title}</h3>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-6 flex items-center">
              <BookOpen className="w-3 h-3 mr-2" /> {paper.subject}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-slate-50">
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Questions</p>
                <p className="text-sm font-black text-slate-900">{paper.questionCount > 0 ? paper.questionCount : 'No data'}</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Exam Type</p>
                <p className="text-sm font-black text-slate-900">{paper.examType}</p>
              </div>
            </div>

            <button className="w-full mt-8 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg active:scale-95 flex items-center justify-center">
              Begin Practice <ChevronRight className="w-3.5 h-3.5 ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSuperAdminQB = () => (
    <div className="space-y-10 animate-fade-in">
      {/* Hero Section for Super Admin */}
      <div className="bg-slate-900 p-12 rounded-[4rem] text-white flex flex-col lg:flex-row justify-between items-center relative overflow-hidden shadow-2xl border border-white/5">
        <Sparkles className="absolute top-0 right-0 w-80 h-80 p-12 opacity-5 text-indigo-400 animate-pulse" />
        <div className="relative z-10 lg:max-w-2xl">
          <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">Global Architecture</h2>
          <p className="text-xl text-slate-400 mt-6 font-medium leading-relaxed italic">Manage central question repositories, AI synthesis nodes, and system-wide difficulty calibration.</p>
          <div className="mt-12 flex flex-wrap gap-4">
            <button className="px-10 py-5 bg-indigo-600 rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-500 shadow-2xl shadow-indigo-100/10 flex items-center group">
               <Database className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" /> Create Global Question Bank
            </button>
            <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all flex items-center group">
               <Cpu className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" /> AI-Generate Questions
            </button>
          </div>
        </div>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 lg:mt-0">
          <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] text-center backdrop-blur-xl transition-all">
            <p className="text-[11px] font-black text-indigo-400 uppercase mb-2 tracking-widest">Global Items</p>
            <p className="text-4xl font-black tracking-tighter">1.2M+</p>
          </div>
          <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] text-center backdrop-blur-xl transition-all">
            <p className="text-[11px] font-black text-emerald-400 uppercase mb-2 tracking-widest">ML Readiness</p>
            <p className="text-4xl font-black tracking-tighter">98.4%</p>
          </div>
        </div>
      </div>
      
      {/* Super Admin Operations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         <div className="enterprise-card p-10 group border-t-4 border-t-rose-600">
            <Trash2 className="w-12 h-12 mb-8 text-rose-600" />
            <h4 className="text-2xl font-black uppercase tracking-tight">Approve / Delete</h4>
            <p className="text-sm text-slate-500 mt-2 font-medium leading-relaxed">System-wide governance for hard-deleting items or approving high-priority global sets.</p>
            <div className="mt-8 flex gap-3">
               <button className="flex-1 py-4 bg-rose-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-700 transition-all shadow-lg">Hard Delete Logs</button>
               <button className="flex-1 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all">Approve Stack</button>
            </div>
         </div>

         <div className="enterprise-card p-10 group border-t-4 border-t-indigo-600">
            <GanttChartSquare className="w-12 h-12 mb-8 text-indigo-600" />
            <h4 className="text-2xl font-black uppercase tracking-tight">Difficulty Matrix</h4>
            <p className="text-sm text-slate-500 mt-2 font-medium leading-relaxed">Tag Difficulty Index and manage ML scoring models across all educational levels.</p>
            <button className="mt-10 w-full py-5 bg-indigo-50 text-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center">
              <Network className="w-4 h-4 mr-2" /> Manage Scoring Node
            </button>
         </div>

         <div className="enterprise-card p-10 group border-t-4 border-t-amber-600">
            <RefreshCw className="w-12 h-12 mb-8 text-amber-600" />
            <h4 className="text-2xl font-black uppercase tracking-tight">Version Control</h4>
            <p className="text-sm text-slate-500 mt-2 font-medium leading-relaxed">Lock older question models or version history to ensure alignment with current syllabus.</p>
            <div className="mt-8 space-y-3">
               <div className="p-4 bg-slate-50 rounded-xl flex justify-between items-center border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-700">Legacy Set v2.4</span>
                  <button className="px-3 py-1 bg-amber-100 text-amber-700 rounded-lg text-[9px] font-black uppercase">Lock Version</button>
               </div>
               <button className="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl">Audit All Versions</button>
            </div>
         </div>
      </div>

      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden mt-10">
         <div className="px-10 py-10 border-b border-slate-50 bg-slate-50/20 flex justify-between items-center">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter flex items-center leading-none">
              <ListChecks className="w-8 h-8 mr-4 text-indigo-600" /> Global Approval Queue
            </h3>
            <span className="bg-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">142 Items Pending</span>
         </div>
         <div className="p-20 text-center opacity-30 flex flex-col items-center">
            <Database className="w-12 h-12 mb-4" />
            <p className="text-sm font-black uppercase tracking-widest">Awaiting Institutional Sync</p>
         </div>
      </div>
    </div>
  );

  const renderCampusAdminQB = () => (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">Institutional Operations</h2>
          <p className="text-slate-500 font-medium mt-2">Manage question papers, faculty contributions, and assemble local paper sets.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setShowCreatePaperModal(true)}
            className="px-8 py-4 bg-indigo-600 text-white rounded-3xl text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center group"
          >
             <Plus className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" /> Create Question Paper
          </button>
          <button className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-indigo-600 transition-all"><Settings className="w-6 h-6" /></button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {papers.map((paper) => (
          <div key={paper.id} className="enterprise-card p-8 group border-t-4 border-t-slate-200 hover:border-t-indigo-500 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none uppercase">{paper.title}</h3>
                <p className="text-[10px] text-slate-400 font-black uppercase mt-2 tracking-widest">{paper.subject} • {paper.year}</p>
              </div>
              <div className="p-2 bg-slate-50 text-slate-400 rounded-lg group-hover:text-indigo-600 transition-colors"><FileText className="w-5 h-5" /></div>
            </div>
            
            <div className="space-y-3 mb-8">
               <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  <span>Type:</span> <span className="text-slate-900 font-black">{paper.examType}</span>
               </div>
               <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  <span>Questions:</span> <span className="text-slate-900 font-black">{paper.questionCount}</span>
               </div>
            </div>

            <div className="flex gap-2 mt-auto">
              <button 
                onClick={() => setShowUploadModal(paper.id)}
                className="flex-1 py-3 bg-indigo-50 text-indigo-600 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center"
              >
                <Upload className="w-3.5 h-3.5 mr-2" /> Upload Qs
              </button>
              <button className="p-3 bg-slate-50 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-10 py-10 border-b border-slate-50 bg-slate-50/30 flex flex-col sm:flex-row justify-between items-center gap-6">
          <h3 className="text-2xl font-black text-slate-900 flex items-center uppercase tracking-tighter leading-none"><ShieldCheck className="w-8 h-8 mr-4 text-indigo-600" /> Pending Faculty Approval</h3>
          <div className="flex bg-white p-1 rounded-xl border border-slate-100 shadow-inner">
             <button className="px-4 py-1.5 text-[10px] font-black uppercase bg-indigo-600 text-white rounded-lg">Queue (12)</button>
             <button className="px-4 py-1.5 text-[10px] font-black uppercase text-slate-400">Archive</button>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {[1].map(i => (
            <div key={i} className="p-10 flex flex-col md:flex-row items-center justify-between group hover:bg-slate-50/50 transition-all gap-6">
              <div className="flex items-center space-x-8 flex-1">
                <div className="w-16 h-16 bg-white border-2 border-slate-100 text-indigo-600 rounded-2xl flex items-center justify-center font-black text-sm shadow-sm">#Q_AUX</div>
                <div>
                  <h4 className="text-lg font-black text-slate-900 tracking-tight leading-none uppercase">Auxiliary Logic Set: Mar Cycle</h4>
                  <p className="text-[10px] text-slate-400 font-black uppercase mt-2 tracking-widest italic">Submitted by: Prof. Miller • Mar 12, 10:42 AM</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-8 py-3 bg-emerald-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-emerald-500 transition-all">Approve</button>
              </div>
            </div>
          ))}
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
             <span className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.3em]">Knowledge Hub</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Question Bank</h1>
          <p className="text-slate-500 font-medium mt-4 tracking-tight text-lg max-w-2xl leading-relaxed">
            {isSuperAdmin ? 'Global Q-Bank orchestration, ML-difficulty indexing, and AI model governance.' : (isCampusAdmin ? 'Institution-level paper creation, faculty verification, and practice pool management.' : 'Verified question papers, practice nodes, and archived institutional assessments.')}
          </p>
        </div>
        <div className="flex bg-slate-100 p-1.5 rounded-[1.5rem] border border-slate-200 shadow-inner overflow-x-auto no-scrollbar">
           {[
             { id: 'practice', label: isAdminGroup ? 'Question Papers' : 'Practice Bank', icon: GraduationCap },
             { id: 'archive', label: 'Legacy Archive', icon: History },
             { id: 'admin', label: isSuperAdmin ? 'Architecture' : 'Admin Hub', icon: Settings, roles: [UserRole.SUPER_ADMIN, UserRole.CAMPUS_ADMIN] },
           ].filter(t => !t.roles || t.roles.includes(role)).map(tab => (
             <button 
               key={tab.id}
               onClick={() => { setActiveTab(tab.id as any); }}
               className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center whitespace-nowrap ${activeTab === tab.id ? 'bg-white text-indigo-600 shadow-md ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-700'}`}
             >
               <tab.icon className={`w-4 h-4 mr-2 ${activeTab === tab.id ? 'text-indigo-600' : 'text-slate-400'}`} /> {tab.label}
             </button>
           ))}
        </div>
      </header>

      {activeTab === 'practice' && renderPracticeView()}
      {activeTab === 'archive' && <div className="text-center py-40 opacity-20 uppercase font-black text-xs tracking-[1em] flex flex-col items-center"><History className="w-16 h-16 mb-8" /> Legacy Archive Node Rendering...</div>}
      {activeTab === 'admin' && (isSuperAdmin ? renderSuperAdminQB() : renderCampusAdminQB())}

      {/* Create Paper Modal */}
      {showCreatePaperModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
           <div className="bg-white w-full max-w-2xl rounded-[3rem] p-12 shadow-2xl animate-in zoom-in-95 duration-300 border border-slate-100">
              <div className="flex justify-between items-center mb-10">
                 <div>
                   <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">New Question Paper</h3>
                   <p className="text-slate-500 text-sm font-medium mt-2 italic">Define the institutional assessment context.</p>
                 </div>
                 <button onClick={() => setShowCreatePaperModal(false)} className="p-3 bg-slate-50 text-slate-400 hover:text-rose-500 rounded-2xl transition-all">
                   <X className="w-6 h-6" />
                 </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                 <div className="space-y-2 col-span-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Paper Title</label>
                    <input 
                      type="text" 
                      value={newPaper.title}
                      onChange={e => setNewPaper({...newPaper, title: e.target.value})}
                      placeholder="e.g. End Semester Exam 2024" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 text-sm font-black outline-none focus:border-indigo-500 transition-colors" 
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Subject Hub</label>
                    <select 
                      value={newPaper.subject}
                      onChange={e => setNewPaper({...newPaper, subject: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 text-sm font-black outline-none appearance-none"
                    >
                       <option>Quantum Mechanics</option>
                       <option>Neural Logic</option>
                       <option>Physics G12</option>
                       <option>Ethical Hacking</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Academic Year</label>
                    <input 
                      type="text" 
                      value={newPaper.year}
                      onChange={e => setNewPaper({...newPaper, year: e.target.value})}
                      placeholder="2024" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 text-sm font-black outline-none focus:border-indigo-500" 
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Exam Type</label>
                    <select 
                      value={newPaper.examType}
                      onChange={e => setNewPaper({...newPaper, examType: e.target.value as any})}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 text-sm font-black outline-none appearance-none"
                    >
                       <option>Final</option>
                       <option>Mid-term</option>
                       <option>Unit Test</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Initial Difficulty Index</label>
                    <select 
                      value={newPaper.difficulty}
                      onChange={e => setNewPaper({...newPaper, difficulty: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 text-sm font-black outline-none appearance-none"
                    >
                       <option>Easy</option>
                       <option>Medium</option>
                       <option>Hard</option>
                    </select>
                 </div>
              </div>

              <button 
                onClick={handleCreatePaper}
                disabled={!newPaper.title}
                className="w-full py-6 bg-slate-900 text-white font-black text-xs rounded-3xl uppercase tracking-[0.2em] hover:bg-indigo-600 shadow-2xl transition-all disabled:bg-slate-200 flex items-center justify-center group"
              >
                Initialize Registry Entry <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div>
      )}

      {/* Upload Questions Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
           <div className="bg-white w-full max-w-xl rounded-[3rem] p-12 shadow-2xl animate-in zoom-in-95 duration-300 border border-slate-100">
              <div className="flex justify-between items-center mb-8">
                 <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Upload Questions</h3>
                 <button onClick={() => setShowUploadModal(null)} className="p-2 text-slate-400 hover:text-rose-500 transition-all"><X className="w-5 h-5" /></button>
              </div>

              <div className="p-12 border-2 border-dashed border-slate-200 rounded-[2.5rem] bg-slate-50 flex flex-col items-center text-center group hover:border-indigo-400 transition-colors">
                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-slate-300 mb-4 group-hover:text-indigo-600 transition-colors">
                    <FileUp className="w-8 h-8" />
                 </div>
                 <p className="text-sm font-black text-slate-900 uppercase tracking-widest">Drop JSON/CSV/PDF Here</p>
                 <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Maximum file size: 10MB</p>
              </div>

              <div className="mt-8 bg-indigo-50 p-6 rounded-2xl flex items-center space-x-4 border border-indigo-100">
                 <Sparkles className="w-6 h-6 text-indigo-600" />
                 <p className="text-[10px] text-indigo-700 font-black uppercase leading-relaxed tracking-widest">AI Synthesis will automatically tag difficulty and topics based on file content.</p>
              </div>

              <button 
                onClick={() => setShowUploadModal(null)}
                className="w-full mt-10 py-5 bg-indigo-600 text-white font-black text-xs rounded-3xl uppercase tracking-widest hover:bg-indigo-700 shadow-xl transition-all"
              >
                Sync with Paper Node
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default QuestionBank;
