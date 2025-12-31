
import React, { useState } from 'react';
import { 
  Mic, 
  BrainCircuit, 
  FileText, 
  Sparkles, 
  Play, 
  StopCircle, 
  Loader2, 
  Download,
  Share2,
  Trash2,
  CheckCircle2,
  MessageSquare,
  History,
  ArrowRight,
  Database
} from 'lucide-react';
import { summarizeLecture, generateQuizQuestions } from '../services/geminiService';
import { UserRole } from '../types';

interface AIIntelProps {
  role: UserRole;
}

const AIIntel: React.FC<AIIntelProps> = ({ role }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [quiz, setQuiz] = useState<any[] | null>(null);
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);

  const startMockRecording = () => {
    setIsRecording(true);
    setSummary(null);
    setQuiz(null);
    setTimeout(() => {
      setIsRecording(false);
      processTranscript();
    }, 4000);
  };

  const processTranscript = async () => {
    setIsProcessing(true);
    const mockTranscript = `
      Teacher: Today we'll talk about the impact of generative AI on education. 
      Student: Will it replace teachers?
      Teacher: No, it acts as a co-pilot, helping personalize learning paths and automating repetitive admin tasks. 
      We will also explore Neural Networks and how they mimic biological structures to process complex data.
    `;
    try {
      const result = await summarizeLecture(mockTranscript);
      setSummary(result);
    } catch (e) {
      console.error(e);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGenerateQuiz = async () => {
    setIsGeneratingQuiz(true);
    try {
      const res = await generateQuizQuestions("Generative AI and Neural Networks in Education");
      setQuiz(res);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGeneratingQuiz(false);
    }
  };

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-10 gap-6">
        <div>
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
             <span className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.3em]">Intelligence Node</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Meeting Intelligence</h1>
          <p className="text-slate-500 font-medium mt-4 tracking-tight text-lg max-w-2xl leading-relaxed">
            Synthesize lectures, faculty meetings, and research seminars into structured knowledge graphs, summaries, and assessments.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Recording Controls */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col items-center text-center relative overflow-hidden group">
            <div className={`w-28 h-28 rounded-full flex items-center justify-center transition-all duration-700 shadow-2xl relative z-10 ${isRecording ? 'bg-rose-500 scale-110 shadow-rose-200 ring-8 ring-rose-50' : 'bg-indigo-600 shadow-indigo-200 hover:scale-105'}`}>
              <button 
                onClick={startMockRecording}
                disabled={isRecording}
                className="w-full h-full flex items-center justify-center rounded-full"
              >
                {isRecording ? <StopCircle className="w-12 h-12 text-white animate-pulse" /> : <Mic className="w-12 h-12 text-white" />}
              </button>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mt-8 uppercase tracking-tighter">{isRecording ? 'Capturing Session' : 'Begin Capture'}</h3>
            <p className="text-sm text-slate-500 mt-2 px-4 leading-relaxed font-medium italic">Gemini 3 Flash enabled for real-time transcription and multilingual indexing.</p>
            
            <div className="w-full mt-10 space-y-3">
              <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">
                <span>Signal Integrity</span>
                <span>Lossless • High</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden shadow-inner">
                <div className={`h-full bg-indigo-500 transition-all duration-300 ${isRecording ? 'w-full' : 'w-0'}`}></div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-600 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
             <Sparkles className="absolute top-0 right-0 w-32 h-32 p-8 opacity-20 group-hover:scale-125 transition-transform duration-700" />
             <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">AI Knowledge Hub</h4>
             <p className="text-sm text-indigo-100 leading-relaxed mb-10 italic">
               "Automatically tag keywords, generate quiz banks, and push summaries to student dashboards based on department taxonomy."
             </p>
             <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl transition-all hover:bg-indigo-50 active:scale-95">Configure Auto-Push</button>
          </div>
        </div>

        {/* Intelligence Output */}
        <div className="lg:col-span-8 space-y-8">
          {isProcessing ? (
            <div className="bg-white p-20 rounded-[4rem] border border-slate-100 flex flex-col items-center justify-center text-center shadow-sm">
              <Loader2 className="w-16 h-16 text-indigo-600 animate-spin mb-6" />
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">AI Synthesis Active</h3>
              <p className="text-slate-500 max-w-sm mt-2 font-medium">Drafting smart summary, speaker identification, and follow-up action items...</p>
            </div>
          ) : summary || quiz ? (
            <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
              {summary && (
                <div className="bg-white rounded-[4rem] border border-slate-100 overflow-hidden shadow-sm">
                  <div className="px-10 py-8 border-b border-slate-50 bg-slate-50/20 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center">
                        <FileText className="w-6 h-6 mr-3 text-indigo-600" />
                        Session Analytics
                      </h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Mar 12, 2024 • Dept: AI Ethics</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-3 bg-white border border-slate-200 text-slate-400 rounded-xl hover:text-indigo-600 hover:shadow-md transition-all"><Share2 className="w-5 h-5" /></button>
                      <button className="p-3 bg-white border border-slate-200 text-slate-400 rounded-xl hover:text-rose-600 hover:shadow-md transition-all"><Trash2 className="w-5 h-5" /></button>
                    </div>
                  </div>
                  <div className="p-10">
                    <div className="text-base text-slate-700 leading-relaxed font-medium bg-slate-50/50 p-8 rounded-[2.5rem] border border-slate-100 shadow-inner italic">
                      {summary}
                    </div>
                    <div className="mt-10 grid grid-cols-2 gap-6">
                      <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 flex items-start space-x-4">
                         <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 shrink-0" />
                         <div>
                            <p className="text-sm font-black text-emerald-900 uppercase tracking-tight">Decisions Extracted</p>
                            <p className="text-xs text-emerald-700 font-medium mt-1">4 key decisions assigned to faculty node.</p>
                         </div>
                      </div>
                      {!quiz && (
                        <button 
                          onClick={handleGenerateQuiz}
                          disabled={isGeneratingQuiz}
                          className="p-6 bg-indigo-600 text-white rounded-3xl shadow-xl hover:bg-indigo-500 transition-all flex items-center justify-center space-x-4 group"
                        >
                          {isGeneratingQuiz ? <Loader2 className="w-6 h-6 animate-spin" /> : <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />}
                          <span className="text-[11px] font-black uppercase tracking-widest">Generate Practice Quiz</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {quiz && (
                <div className="bg-slate-900 rounded-[4rem] p-10 text-white shadow-2xl animate-in fade-in duration-700">
                   <div className="flex justify-between items-center mb-10">
                      <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center">
                         <Sparkles className="w-8 h-8 mr-4 text-indigo-400" />
                         AI-Synthesized Assessment
                      </h3>
                      <button onClick={() => setQuiz(null)} className="text-slate-500 hover:text-white">Close</button>
                   </div>
                   <div className="space-y-8">
                      {quiz.map((q, i) => (
                        <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] group hover:bg-white/10 transition-all">
                           <p className="text-lg font-bold mb-6 flex items-start">
                              <span className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-4 text-xs font-black shrink-0">{i+1}</span>
                              {q.question}
                           </p>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {q.options.map((opt: string, idx: number) => (
                                <div key={idx} className="px-6 py-3 bg-slate-800 rounded-xl border border-white/5 text-sm font-medium hover:border-indigo-400 cursor-pointer transition-all">
                                   {opt}
                                </div>
                              ))}
                           </div>
                        </div>
                      ))}
                   </div>
                   <button className="w-full mt-10 py-6 bg-indigo-600 rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-indigo-500 transition-all">Publish to LMS Unit 4</button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white p-20 rounded-[4rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity">
              <Database className="w-20 h-20 text-slate-300 mb-8" />
              <h3 className="text-2xl font-black text-slate-400 uppercase tracking-tighter">No Active Insights</h3>
              <p className="text-slate-400 max-w-sm mt-2 font-medium italic">"Upload an existing recording or start a live capture to populate the institutional knowledge base."</p>
            </div>
          )}

          {/* History Ledger */}
          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
             <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center">
                   <History className="w-6 h-6 mr-3 text-indigo-600" />
                   Session Vault
                </h3>
                <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">View All Records</button>
             </div>
             <div className="space-y-4">
                {[
                  { title: 'Faculty Senate: Mar 01', type: 'Administrative', time: '10d ago' },
                  { title: 'Quantum Physics Lecture 4', type: 'Academic', time: '12d ago' },
                ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between p-6 bg-slate-50/50 rounded-3xl border border-slate-50 group hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="flex items-center space-x-6">
                         <div className="w-1.5 h-12 bg-slate-200 rounded-full group-hover:bg-indigo-600 transition-colors"></div>
                         <div>
                            <p className="text-base font-black text-slate-900">{item.title}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.type} • {item.time}</p>
                         </div>
                      </div>
                      <button className="p-3 bg-white border border-slate-100 text-slate-300 rounded-xl group-hover:text-indigo-600 transition-all"><ArrowRight className="w-5 h-5" /></button>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIIntel;
