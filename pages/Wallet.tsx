
import React from 'react';
import { Wallet as WalletIcon, ArrowUpRight, ArrowDownLeft, Clock, ShoppingBag, Sparkles, CreditCard, Gift, ChevronRight } from 'lucide-react';
import { UserRole } from '../types';

const Wallet: React.FC<{ role: UserRole }> = ({ role }) => {
  const transactions = [
    { id: 'TX1', title: 'Gig Completion: Logo Design', amount: '+500', date: 'Mar 12', type: 'credit' },
    { id: 'TX2', title: 'Course Purchase: Advanced VR', amount: '-1200', date: 'Mar 10', type: 'debit' },
    { id: 'TX3', title: 'Academic Excellence Reward', amount: '+250', date: 'Mar 08', type: 'credit' },
    { id: 'TX4', title: 'Expert Market Session Fee', amount: '-450', date: 'Mar 05', type: 'debit' },
  ];

  const redeemables = [
    { title: 'Cert: ML Specialization', cost: '2,400', color: 'bg-indigo-600' },
    { title: 'Institutional Hoodie', cost: '1,200', color: 'bg-slate-900' },
    { title: 'Priority Lab Access (1mo)', cost: '800', color: 'bg-amber-500' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-10">
        <div>
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-1.5 h-8 bg-emerald-500 rounded-full"></div>
             <span className="text-[10px] font-black uppercase text-emerald-600 tracking-[0.3em]">Learning Economy</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">EduWallet</h1>
          <p className="text-slate-500 font-medium mt-4 tracking-tight text-lg">Manage your learning credits, rewards, and redemption vault.</p>
        </div>
        <div className="flex gap-3">
           <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-indigo-500 transition-all flex items-center">
             <CreditCard className="w-4 h-4 mr-2" /> Load Credits
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-8">
           <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group border border-white/10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600 rounded-full mix-blend-screen opacity-10 blur-[80px] group-hover:scale-125 transition-transform duration-1000"></div>
              
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                   <WalletIcon className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Wallet Status</p>
                   <p className="text-xs font-black text-emerald-400 uppercase tracking-widest">Active & Secure</p>
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">Available Balance</p>
                <div className="flex items-baseline space-x-3">
                   <h2 className="text-6xl font-black tracking-tighter text-white">4,820</h2>
                   <span className="text-lg font-black text-emerald-400 uppercase tracking-widest">Credits</span>
                </div>
              </div>

              <div className="mt-16 flex justify-between items-end relative z-10">
                <div className="flex gap-4">
                   <div className="flex flex-col">
                      <span className="text-[9px] font-black text-slate-500 uppercase">This Month</span>
                      <span className="text-sm font-black text-emerald-400">+1,420</span>
                   </div>
                   <div className="w-[1px] h-8 bg-white/10"></div>
                   <div className="flex flex-col">
                      <span className="text-[9px] font-black text-slate-500 uppercase">Redeemed</span>
                      <span className="text-sm font-black text-rose-400">-600</span>
                   </div>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                   <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
                </div>
              </div>
           </div>

           <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
              <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center uppercase tracking-tighter">
                <ShoppingBag className="w-6 h-6 mr-3 text-indigo-600" />
                Redemption Vault
              </h3>
              <div className="space-y-4">
                {redeemables.map((item, i) => (
                   <div key={i} className="flex items-center justify-between p-6 bg-slate-50/50 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                      <div className="flex items-center space-x-4">
                         <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center text-white`}>
                            <Gift className="w-5 h-5" />
                         </div>
                         <div>
                            <p className="text-sm font-black text-slate-900 leading-tight">{item.title}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.cost} Credits</p>
                         </div>
                      </div>
                      <button className="p-2.5 text-slate-300 hover:text-indigo-600 transition-colors"><ChevronRight className="w-5 h-5" /></button>
                   </div>
                ))}
              </div>
           </div>
        </div>

        <div className="lg:col-span-7 bg-white rounded-[3.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
           <div className="px-10 py-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
              <h3 className="text-2xl font-black text-slate-900 flex items-center tracking-tight">
                 <Clock className="w-7 h-7 mr-4 text-indigo-600" />
                 Transaction Ledger
              </h3>
              <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">Download Statement</button>
           </div>
           <div className="p-10 flex-1 overflow-y-auto custom-scrollbar space-y-6">
              {transactions.map(tx => (
                <div key={tx.id} className="flex items-center justify-between group">
                   <div className="flex items-center space-x-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner ${tx.type === 'credit' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                         {tx.type === 'credit' ? <ArrowDownLeft className="w-6 h-6" /> : <ArrowUpRight className="w-6 h-6" />}
                      </div>
                      <div>
                         <p className="text-base font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{tx.title}</p>
                         <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{tx.date} • ID: {tx.id}</p>
                      </div>
                   </div>
                   <p className={`text-xl font-black tracking-tighter ${tx.type === 'credit' ? 'text-emerald-600' : 'text-slate-900'}`}>{tx.amount}</p>
                </div>
              ))}
              {transactions.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-slate-400">
                   <Clock className="w-12 h-12 mb-4 opacity-20" />
                   <p className="font-bold uppercase tracking-widest text-[10px]">No historical data found</p>
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
