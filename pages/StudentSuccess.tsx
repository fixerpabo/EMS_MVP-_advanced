
import React, { useState } from 'react';
import { 
  Heart, 
  Briefcase, 
  Award, 
  Search, 
  Plus, 
  Sparkles, 
  MessageCircle, 
  UserCircle,
  Trophy,
  ArrowUpRight,
  GraduationCap,
  Activity,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  BrainCircuit,
  Zap,
  Target,
  Send,
  Loader2
} from 'lucide-react';
import { UserRole } from '../types';

interface StudentSuccessProps {
  role: UserRole;
}

const StudentSuccess: React.FC<StudentSuccessProps> = ({ role }) => {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [wellnessStatus, setWellnessStatus] = useState<'neutral' | 'calm' | 'focused' | 'stressed'>('neutral');
  const [isTyping, setIsTyping] = useState(false);
  const isStudent = role === UserRole.STUDENT;

  const handleWellnessCheck = (status: any) => {
    setIsTyping(true);
    setTimeout(() => {
      setWellnessStatus(status);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-10 gap-6">
        <div>
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-1.5 h-8 bg-rose-500 rounded-full"></div>
             <span className="text-[10px] font-black uppercase text-rose-600 tracking-[0.3em]">Growth Node</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Success Ecosystem</h1>
          <p className="text-slate-500 font-medium mt-4 tracking-tight text-lg max-w-2xl leading-relaxed">
            Personalized wellness monitoring, digital placement cell, and AI-optimized skill portfolio for the future-ready professional.
          </p>
        </div>
        <div className="flex bg-slate-100 p-1.5 rounded-[1.5rem] border border-slate-200 shadow-inner overflow-x-auto no-scrollbar">
          {[
            { id: 'portfolio', label: 'AI Portfolio' },
            { id: 'wellness', label: 'Wellness AI' },
            { id: 'career', label: 'Placement Hub' },
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-white text-rose-600 shadow-md ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {activeTab === 'portfolio' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 animate-in slide-in-from-bottom-8 duration-500">
           <div className="lg:col-span-8 space-y-10">
              <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                 <div className="flex items-center space-x-8 mb-12">
                    <div className="w-28 h-28 bg-gradient-to-br from-indigo-500 via-purple-600 to-rose-500 rounded-[2.5rem] flex items-center justify-center text-white text-4xl font-black shadow-2xl ring-8 ring-slate-50 group-hover:rotate-6 transition-transform duration-700">
                       LC
                    </div>
                    <div>
                       <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Liam Chen</h2>
                       <p className="text-lg text-slate-500 font-medium italic mt-2">Quantum AI Researcher • Batch 2025</p>
                       <div className="flex gap-3 mt-4">
                          <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-lg uppercase border border-indigo-100 shadow-sm">AI Certified</span>
                          <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-lg uppercase border border-emerald-100 shadow-sm">3.94 CGPA</span>
                          <span className="px-3 py-1 bg-amber-50 text-amber-600 text-[10px] font-black rounded-lg uppercase border border-amber-100 shadow-sm">G-Level Mastery</span>
                       </div>
                    </div>
                 </div>
                 
                 <div className="space-y-8">
                    <div className="flex justify-between items-center px-4">
                       <h3 className="font-black text-slate-900 text-xs uppercase tracking-[0.2em] flex items-center">
                          <Trophy className="w-6 h-6 mr-3 text-amber-500" /> 
                          Verified Skill Credentials
                       </h3>
                       <button className="text-[10px] font-black text-indigo-600 uppercase hover:underline">Open Ledger</button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                       {[
                         { title: 'LLM Architect', issuer: 'EduVerse AI', date: 'Jan 2024', node: 'Node 42' },
                         { title: 'Neural Systems', issuer: 'DeepMind Labs', date: 'Dec 2023', node: 'Node 18' },
                         { title: 'Ethical Hacking', issuer: 'Global Security', date: 'Nov 2023', node: 'Node 04' },
                       ].map((badge, i) => (
                         <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-[2.5rem] text-center group/badge hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                            <div className="w-14 h-14 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner border border-slate-100 group-hover/badge:scale-110 transition-transform">
                               <Award className="w-7 h-7 text-indigo-600" />
                            </div>
                            <p className="text-sm font-black text-slate-900 leading-tight uppercase tracking-tight">{badge.title}</p>
                            <p className="text-[9px] text-slate-400 font-bold mt-2 uppercase tracking-widest">{badge.issuer}</p>
                            <p className="text-[8px] text-indigo-400 font-black mt-3 uppercase tracking-[0.2em]">{badge.node}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="bg-slate-900 rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden group border border-white/5">
                 <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-8">
                       <BrainCircuit className="w-10 h-10 text-indigo-400" />
                       <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">AI Profile Synthesizer</h3>
                    </div>
                    <p className="text-lg text-slate-400 mb-12 max-w-lg leading-relaxed font-medium italic">
                      "EduVerse Gen-AI is continuously indexing your research logs, GPA shifts, and gig participation to build a dynamic institutional resume node."
                    </p>
                    <div className="flex flex-wrap gap-4">
                       <button className="px-10 py-5 bg-indigo-600 text-white font-black text-[10px] rounded-3xl uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-100/10">Download Digital CV</button>
                       <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black text-[10px] rounded-3xl uppercase tracking-widest hover:bg-white/10 transition-all">Publish to Partner Hub</button>
                    </div>
                 </div>
                 <Sparkles className="absolute -bottom-16 -right-16 w-80 h-80 opacity-5 text-white animate-pulse" />
              </div>
           </div>

           <div className="lg:col-span-4 space-y-10">
              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm group">
                 <h3 className="font-black text-slate-900 text-xs uppercase tracking-[0.2em] mb-8 flex items-center">
                    <Target className="w-5 h-5 mr-3 text-indigo-600 group-hover:scale-110 transition-transform" /> Career Milestones
                 </h3>
                 <div className="space-y-6">
                    {[
                      { title: 'Project: Neural Hub', status: 'Published', score: '98/100' },
                      { title: 'Semester 4 GPA Audit', status: 'Verified', score: '3.92' },
                      { title: 'Industrial Intern v1', status: 'In Progress', score: 'Week 4' },
                    ].map((s, i) => (
                       <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-300">
                          <div className="flex justify-between items-start mb-4">
                             <p className="text-sm font-black text-slate-900 leading-tight uppercase tracking-tight">{s.title}</p>
                             <span className="text-[9px] bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md font-black uppercase tracking-tighter border border-emerald-100">{s.status}</span>
                          </div>
                          <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Mastery Index: {s.score}</p>
                       </div>
                    ))}
                 </div>
                 <button className="w-full mt-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all">Audit My Timeline</button>
              </div>

              <div className="bg-rose-600 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                 <Zap className="absolute top-0 right-0 w-32 h-32 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700" />
                 <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter leading-none">Smart Placements</h3>
                 <p className="text-sm text-rose-100 leading-relaxed mb-10 font-medium italic">
                   "Liam, 4 Fortune-500 companies have flagged your profile for the Upcoming Summer AI Residency."
                 </p>
                 <button className="w-full py-5 bg-white text-rose-600 font-black text-[10px] rounded-[2rem] transition-all shadow-xl hover:bg-rose-50 uppercase tracking-widest active:scale-95">
                    Review Offers
                 </button>
              </div>
           </div>
        </div>
      )}

      {activeTab === 'wellness' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 animate-in slide-in-from-bottom-8 duration-500 pb-20">
           <div className="lg:col-span-8 bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col min-h-[700px]">
              <div className="flex justify-between items-start mb-12">
                 <div>
                    <h3 className="text-3xl font-black text-slate-900 flex items-center tracking-tighter uppercase leading-none">
                       <Heart className="w-10 h-10 mr-4 text-rose-500" />
                       Wellness Co-Pilot
                    </h3>
                    <p className="text-lg text-slate-500 font-medium mt-2 italic">A secure, private encryption node for resilience & support.</p>
                 </div>
                 <div className={`p-6 rounded-[2.5rem] text-center border-2 transition-all duration-700 ${
                   wellnessStatus === 'stressed' ? 'bg-rose-50 border-rose-100 text-rose-600' : 
                   wellnessStatus === 'calm' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' :
                   'bg-slate-50 border-slate-100 text-slate-600'
                 }`}>
                    <p className="text-[10px] font-black uppercase mb-1 tracking-widest">Resilience State</p>
                    <p className="text-2xl font-black uppercase tracking-tighter">{wellnessStatus === 'neutral' ? 'Awaiting Data' : wellnessStatus}</p>
                 </div>
              </div>
              
              <div className="flex-1 space-y-8 bg-slate-50/50 p-10 rounded-[3.5rem] border border-slate-100 shadow-inner flex flex-col justify-between relative overflow-hidden">
                 <div className="space-y-6">
                    <div className="flex justify-start">
                       <div className="bg-white p-8 rounded-[2.5rem] rounded-tl-none shadow-sm text-base text-slate-700 max-w-[85%] border border-slate-100 leading-relaxed font-medium">
                          Hi Liam! I've detected a high volume of late-night commits to your Neural Research node. Your circadian patterns suggest you might be approaching a fatigue threshold. How are you feeling today?
                       </div>
                    </div>
                    {wellnessStatus === 'stressed' && (
                       <div className="flex justify-start animate-in slide-in-from-left-4">
                          <div className="bg-rose-50 p-8 rounded-[2.5rem] rounded-tl-none shadow-sm text-base text-rose-700 max-w-[85%] border border-rose-100 leading-relaxed font-medium">
                             I understand things are feeling intense. I've initiated a "Study-Freeze" recommendation for tonight. Would you like me to schedule a mindfulness node or notify your academic mentor?
                          </div>
                       </div>
                    )}
                 </div>

                 <div className="relative mt-10">
                    {isTyping && (
                      <div className="absolute -top-12 left-4 flex space-x-1 animate-pulse">
                         <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                         <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                         <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                      </div>
                    )}
                    <div className="relative group">
                       <input 
                         type="text" 
                         placeholder="Sync your thoughts with Wellness AI..." 
                         className="w-full px-8 py-6 rounded-[2.5rem] bg-white border border-slate-200 outline-none focus:ring-4 focus:ring-rose-500/5 text-lg font-medium shadow-xl transition-all"
                       />
                       <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                          <button 
                            onClick={() => handleWellnessCheck('stressed')}
                            className="p-4 bg-rose-600 text-white rounded-[1.5rem] hover:bg-rose-700 transition-all shadow-xl active:scale-95"
                          >
                             <Send className="w-6 h-6" />
                          </button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-4 space-y-10">
              <div className="bg-indigo-900 rounded-[4rem] p-12 text-white flex flex-col justify-between h-full relative overflow-hidden shadow-2xl border border-white/10">
                 <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter leading-none">Guardianship Node</h3>
                    <p className="text-indigo-200 text-lg leading-relaxed mb-12 font-medium italic">
                       Personal behavioral insights are synthesized into high-level summaries for approved mentors and guardians.
                    </p>
                    <div className="space-y-6">
                       {[
                         { label: 'Social Engagement', value: 'High', color: 'text-emerald-400' },
                         { label: 'Sleep Quality', value: 'Needs Sync', color: 'text-rose-400' },
                         { label: 'Peer Collaboration', value: 'Active', color: 'text-indigo-400' },
                       ].map((stat, i) => (
                          <div key={i} className="flex justify-between items-center px-6 py-4 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-colors">
                             <span className="text-sm text-indigo-300 font-bold uppercase tracking-widest">{stat.label}</span>
                             <span className={`text-sm font-black uppercase tracking-widest ${stat.color}`}>{stat.value}</span>
                          </div>
                       ))}
                    </div>
                 </div>
                 <Activity className="absolute bottom-0 right-0 w-64 h-64 -mr-20 -mb-20 opacity-5 text-white animate-pulse" />
                 <button className="w-full mt-12 py-6 bg-white text-indigo-900 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-indigo-50 transition-all">View Full Bio-Log</button>
              </div>

              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm text-center">
                 <ShieldCheck className="w-16 h-16 mx-auto mb-8 text-emerald-500" />
                 <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-none">Privacy Lock</h4>
                 <p className="text-sm text-slate-500 font-medium leading-relaxed italic mb-10">All wellness conversations are end-to-end encrypted and decoupled from academic scoring nodes.</p>
                 <button className="w-full py-4 bg-slate-50 text-slate-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all border border-slate-100">Review Data Policy</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default StudentSuccess;
