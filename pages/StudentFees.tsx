
import React from 'react';
import { CreditCard, Wallet, Download, CheckCircle2, Clock, ShieldCheck, ChevronRight, DollarSign, History } from 'lucide-react';
import { UserRole } from '../types';

const StudentFees: React.FC<{ role: UserRole }> = ({ role }) => {
  const invoices = [
    { id: 'INV-042', description: 'Semester 2 Tuition Fee', amount: '$4,200', status: 'Paid', date: 'Feb 12, 2024' },
    { id: 'INV-081', description: 'Institutional VR Lab Access', amount: '$450', status: 'Paid', date: 'Jan 28, 2024' },
    { id: 'INV-112', description: 'Hostel Maintenance Fee', amount: '$800', status: 'Unpaid', date: 'Mar 15, 2024' },
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-10 gap-6">
        <div>
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
             <span className="text-[10px] font-bold uppercase text-indigo-600 tracking-[0.3em]">Financial Node</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Fees & Ledger</h1>
          <p className="text-slate-500 font-medium mt-4 tracking-tight text-lg">Manage institutional payments, scholarships, and verified financial records.</p>
        </div>
        <div className="flex gap-3">
           <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-indigo-500 transition-all flex items-center">
             Pay Pending <ChevronRight className="w-3 h-3 ml-2" />
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
           <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-10 py-8 border-b border-slate-50 bg-slate-50/20 flex justify-between items-center">
                 <h3 className="text-xl font-black text-slate-900 flex items-center uppercase tracking-tighter">
                    <History className="w-6 h-6 mr-3 text-indigo-600" />
                    Transaction Lifecycle
                 </h3>
                 <button className="p-3 bg-slate-100 rounded-xl hover:text-indigo-600 border border-slate-200 transition-all"><Download className="w-5 h-5" /></button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead className="bg-slate-50/50">
                     <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                       <th className="px-10 py-5">Invoice ID</th>
                       <th className="px-10 py-5">Description</th>
                       <th className="px-10 py-5">Due Date</th>
                       <th className="px-10 py-5">Amount</th>
                       <th className="px-10 py-5 text-right">Status</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-100">
                     {invoices.map((inv, i) => (
                       <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                         <td className="px-10 py-6">
                            <span className="text-xs font-black text-slate-900">{inv.id}</span>
                         </td>
                         <td className="px-10 py-6">
                            <p className="text-sm font-bold text-slate-700">{inv.description}</p>
                         </td>
                         <td className="px-10 py-6">
                            <p className="text-[10px] font-bold text-slate-400 uppercase">{inv.date}</p>
                         </td>
                         <td className="px-10 py-6 font-black text-slate-900">{inv.amount}</td>
                         <td className="px-10 py-6 text-right">
                            <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${inv.status === 'Paid' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-rose-50 text-rose-700 border border-rose-100'}`}>
                               {inv.status}
                            </span>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                </table>
              </div>
           </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
           <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group border border-white/5">
              <Wallet className="absolute top-0 right-0 w-32 h-32 p-8 opacity-10 group-hover:scale-125 transition-transform duration-1000" />
              <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">Available Balance</p>
              <div className="flex items-baseline space-x-3 mb-10">
                 <h2 className="text-5xl font-black tracking-tighter text-white">4,820</h2>
                 <span className="text-sm font-black text-indigo-400 uppercase tracking-widest">Credits</span>
              </div>
              <div className="space-y-4">
                 <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-[11px] text-slate-400 font-bold uppercase">Pending Dues</span>
                    <span className="text-lg font-black text-rose-500">$800</span>
                 </div>
                 <button className="w-full py-4 bg-indigo-600 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl transition-all hover:bg-indigo-500 active:scale-95">
                    Clear Dues with Wallet
                 </button>
              </div>
           </div>

           <div className="enterprise-card p-8 bg-slate-50/50">
              <div className="flex items-center space-x-4 mb-6">
                 <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                 </div>
                 <div>
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Payment Security</h4>
                    <p className="text-[10px] text-slate-500 font-medium">All transactions are verified via blockchain ledger sync.</p>
                 </div>
              </div>
              <button className="w-full py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-sm">
                 Download Tax Receipt
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFees;
