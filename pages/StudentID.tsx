
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Fingerprint, 
  Smartphone, 
  MapPin, 
  Clock, 
  Zap, 
  MoreVertical,
  Activity,
  User,
  CheckCircle2,
  Lock,
  Wifi
} from 'lucide-react';
import { UserRole } from '../types';

interface StudentIDProps {
  role: UserRole;
}

const StudentID: React.FC<StudentIDProps> = ({ role }) => {
  const [isNfcActive, setIsNfcActive] = useState(false);
  const [isBiometricVerified, setIsBiometricVerified] = useState(false);

  // Systematic log data
  const accessLogs = [
    { location: 'Central Library - Main Gate', time: '10:42 AM', method: 'NFC Tap', status: 'Authorized' },
    { location: 'Engineering Block - Lab 302', time: '08:15 AM', method: 'Biometric', status: 'Authorized' },
    { location: 'Main Hostel - Wing B', time: 'Yesterday', method: 'NFC Tap', status: 'Authorized' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Page Header - Systematic Alignment */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-200 pb-8 gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Digital Identity Vault</h1>
          <p className="text-slate-500 font-medium mt-1">Institutional Blockchain ID & Security Orchestration.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100 flex items-center">
             <ShieldCheck className="w-4 h-4 mr-2" />
             <span className="text-[10px] font-black uppercase tracking-widest">System Integrity: 100%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: The Card Exhibit */}
        <div className="lg:col-span-5 space-y-8">
          <div className="relative group perspective-1000">
            {/* The Digital ID Card - Professional Dark Aesthetic */}
            <div className="relative w-full aspect-[1.6/1] bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl shadow-slate-400/30 overflow-hidden border border-white/10 transition-all duration-700 hover:rotate-y-6 hover:shadow-indigo-500/20">
              {/* Card Holographic Gradients */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600 rounded-full mix-blend-color-dodge filter blur-[80px] opacity-20 -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-125"></div>
              
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="bg-indigo-600 p-2.5 rounded-2xl shadow-lg shadow-indigo-600/30">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 leading-none">EduVerse Global</h3>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Verified Identity Card</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="w-8 h-5 bg-gradient-to-r from-amber-400 to-amber-200 rounded-sm opacity-60"></div>
                  <span className="text-[7px] font-black text-slate-500 mt-1 uppercase tracking-tighter">Secure Chip</span>
                </div>
              </div>

              <div className="flex space-x-8 items-center relative z-10">
                <div className="w-28 h-28 bg-gradient-to-tr from-slate-800 to-slate-700 rounded-[2rem] flex items-center justify-center text-4xl font-black ring-4 ring-white/10 shadow-2xl relative overflow-hidden group-hover:ring-indigo-500/30 transition-all">
                  <User className="w-12 h-12 text-slate-500" />
                  <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div>
                  <h2 className="text-3xl font-black tracking-tighter leading-none mb-1">Liam Chen</h2>
                  <p className="text-[11px] font-black text-indigo-400 uppercase tracking-widest">Faculty of Quantum AI</p>
                  <div className="flex space-x-3 mt-4">
                    <div className="flex flex-col">
                      <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest">Batch</span>
                      <span className="text-[10px] font-black uppercase">2021-25</span>
                    </div>
                    <div className="w-[1px] h-6 bg-slate-800"></div>
                    <div className="flex flex-col">
                      <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest">Blood Group</span>
                      <span className="text-[10px] font-black uppercase">O +ve</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex justify-between items-end relative z-10">
                <div className="space-y-1">
                  <p className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.3em]">Student Serial</p>
                  <p className="text-sm font-mono font-bold tracking-[0.2em] text-indigo-100">EV-2025-0842-LC</p>
                </div>
                <div className="w-14 h-14 bg-white rounded-xl p-1.5 shadow-xl ring-2 ring-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=LiamChen-EduVerse-Secure" alt="QR" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Security Status - Systematic Bento Item */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center">
                   <Lock className="w-4 h-4 mr-2 text-indigo-600" /> Security Layer
                </h3>
                <span className="text-[10px] font-black text-emerald-600 uppercase">Encrypted</span>
             </div>
             <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                   <div className="flex items-center space-x-4">
                      <Wifi className={`w-5 h-5 ${isNfcActive ? 'text-indigo-600' : 'text-slate-300'} transition-colors`} />
                      <div>
                         <p className="text-xs font-bold text-slate-900 leading-none">NFC Antenna Status</p>
                         <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">{isNfcActive ? 'Broadcasting Key' : 'Idle'}</p>
                      </div>
                   </div>
                   <button 
                    onClick={() => setIsNfcActive(!isNfcActive)}
                    className={`w-10 h-6 rounded-full transition-all flex items-center px-1 ${isNfcActive ? 'bg-indigo-600' : 'bg-slate-300'}`}
                   >
                     <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${isNfcActive ? 'translate-x-4' : 'translate-x-0'}`}></div>
                   </button>
                </div>
             </div>
          </div>
        </div>

        {/* Right Column: Interaction & Logs */}
        <div className="lg:col-span-7 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Biometric Interaction Bento */}
              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col items-center text-center group">
                 <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all duration-500 mb-6 ${isBiometricVerified ? 'bg-emerald-50 text-emerald-600 shadow-lg shadow-emerald-100' : 'bg-indigo-50 text-indigo-600 shadow-lg shadow-indigo-100'} group-hover:scale-110`}>
                    <Fingerprint className="w-10 h-10" />
                 </div>
                 <h3 className="text-lg font-black text-slate-900 tracking-tight">Biometric Clearance</h3>
                 <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">Required for Lab Access & Exam Hall Entry.</p>
                 <button 
                  onClick={() => {
                    setIsBiometricVerified(true);
                    setTimeout(() => setIsBiometricVerified(false), 3000);
                  }}
                  className={`mt-8 w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 ${
                    isBiometricVerified ? 'bg-emerald-600 text-white shadow-emerald-100' : 'bg-indigo-600 text-white shadow-indigo-100'
                  }`}
                 >
                   {isBiometricVerified ? 'Identity Verified' : 'Verify Fingerprint'}
                 </button>
              </div>

              {/* NFC Mobile Sync Bento */}
              <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col items-center text-center relative overflow-hidden group shadow-2xl">
                 <Zap className="absolute top-0 right-0 w-32 h-32 p-8 opacity-5 text-indigo-400 group-hover:scale-125 transition-transform duration-700" />
                 <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center mb-6 border border-white/10 backdrop-blur-md">
                    <Smartphone className="w-10 h-10 text-indigo-400" />
                 </div>
                 <h3 className="text-lg font-black tracking-tight">Tap-to-Access</h3>
                 <p className="text-xs text-slate-400 font-medium mt-2 leading-relaxed">Hold your device near any EduVerse IoT Terminal.</p>
                 <div className="mt-8 flex items-center space-x-4">
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full bg-indigo-600/30 border border-white/10 flex items-center justify-center text-[10px] font-black">NFC</div>
                       ))}
                    </div>
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest animate-pulse">Searching Nodes...</span>
                 </div>
              </div>
           </div>

           {/* Systematic Access Ledger */}
           <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-10 py-8 border-b border-slate-50 flex justify-between items-center">
                 <h3 className="font-black text-slate-900 uppercase tracking-tighter flex items-center text-xl">
                    <Activity className="w-6 h-6 mr-4 text-indigo-600" />
                    Identity Activity Logs
                 </h3>
                 <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-slate-100">
                    <MoreVertical className="w-5 h-5" />
                 </button>
              </div>
              <div className="p-10 space-y-4">
                 {accessLogs.map((log, i) => (
                   <div key={i} className="flex items-center justify-between p-6 bg-slate-50/50 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center space-x-6">
                         <div className="w-1.5 h-12 bg-indigo-500 rounded-full group-hover:scale-y-110 transition-transform"></div>
                         <div>
                            <p className="text-sm font-black text-slate-900 tracking-tight">{log.location}</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{log.method} • {log.time}</p>
                         </div>
                      </div>
                      <div className="flex items-center text-[10px] text-emerald-600 font-black uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100 shadow-sm">
                         <CheckCircle2 className="w-4 h-4 mr-2" />
                         {log.status}
                      </div>
                   </div>
                 ))}
                 <button className="w-full py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">
                    Download Full Security Audit
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StudentID;
