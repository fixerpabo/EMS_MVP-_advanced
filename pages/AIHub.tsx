
import React, { useState, useRef } from 'react';
import { 
  Mic, 
  Send, 
  FileText, 
  Sparkles, 
  MessageSquare, 
  Play, 
  StopCircle,
  Loader2,
  BrainCircuit
} from 'lucide-react';
import { summarizeLecture, askAiTutor } from '../services/geminiService';
import { Message } from '../types';

const AIHub: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am your AI Education Assistant. How can I help you today?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [isSummarizing, setIsSummarizing] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await askAiTutor(input, "Current student session context: Advanced Physics Module 3.");
      setMessages(prev => [...prev, { role: 'model', text: response, timestamp: new Date() }]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
      setTimeout(scrollToBottom, 100);
    }
  };

  const handleSummarize = async () => {
    setIsSummarizing(true);
    const mockTranscript = `
      Teacher: Today we're exploring Quantum Entanglement. 
      Student A: Is it true particles can affect each other across any distance?
      Teacher: Exactly. Einstein called it 'spooky action at a distance'.
      Student B: Does this relate to quantum computing?
      Teacher: Yes, qubits use entanglement to perform multiple calculations simultaneously...
    `;
    try {
      const res = await summarizeLecture(mockTranscript);
      setSummary(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSummarizing(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full min-h-[600px]">
      {/* Left: Chatbot Section */}
      <div className="lg:col-span-2 flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">AI Smart Tutor</h2>
              <p className="text-xs text-slate-500">Online & Ready to Help</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <Sparkles className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-slate-100 text-slate-800 rounded-tl-none'
              }`}>
                {msg.text}
                <p className={`text-[10px] mt-1 ${msg.role === 'user' ? 'text-indigo-200' : 'text-slate-400'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-100 text-slate-400 rounded-2xl px-4 py-3 text-sm flex space-x-1">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-100">.</span>
                <span className="animate-bounce delay-200">.</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-100 flex items-center space-x-4">
          <button type="button" className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
            <Mic className="w-5 h-5" />
          </button>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about your syllabus..."
            className="flex-1 bg-slate-100 border-transparent rounded-full px-4 py-2 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
          <button 
            type="submit" 
            disabled={!input.trim()}
            className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors disabled:bg-slate-300"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Right: Meeting Intelligence */}
      <div className="flex flex-col space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-indigo-600" />
            Lecture Intelligence
          </h3>
          <p className="text-sm text-slate-500 mb-6">Capture live sessions to generate instant summaries and quiz questions.</p>
          
          <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-200 rounded-xl mb-6 bg-slate-50 group hover:border-indigo-300 transition-colors">
            <button 
              onClick={() => setIsRecording(!isRecording)}
              className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all ${
                isRecording ? 'bg-rose-500 animate-pulse' : 'bg-indigo-600 hover:scale-105'
              }`}
            >
              {isRecording ? <StopCircle className="text-white w-8 h-8" /> : <Mic className="text-white w-8 h-8" />}
            </button>
            <p className="mt-4 text-sm font-semibold text-slate-600">
              {isRecording ? 'Listening...' : 'Click to start recording'}
            </p>
          </div>

          <div className="space-y-3">
            <button 
              onClick={handleSummarize}
              disabled={isSummarizing}
              className="w-full py-3 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 flex items-center justify-center transition-all"
            >
              {isSummarizing ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Play className="w-4 h-4 mr-2" />}
              Generate Summary from Last Session
            </button>
            <button className="w-full py-3 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 flex items-center justify-center transition-all">
              <MessageSquare className="w-4 h-4 mr-2" />
              Auto-Generate Quiz Paper
            </button>
          </div>
        </div>

        {summary && (
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-emerald-900 text-sm">Session Summary</h4>
              <button onClick={() => setSummary(null)} className="text-emerald-400 hover:text-emerald-600">×</button>
            </div>
            <div className="text-xs text-emerald-800 leading-relaxed whitespace-pre-wrap">
              {summary}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIHub;
