
import React from 'react';
import { Search, Bell, User, ChevronDown, Command } from 'lucide-react';
import { UserRole } from '../types';

interface HeaderProps {
  currentRole: UserRole;
  setRole: (role: UserRole) => void;
}

const Header: React.FC<HeaderProps> = ({ currentRole, setRole }) => {
  const roleDisplay = {
    [UserRole.SUPER_ADMIN]: 'Super Admin',
    [UserRole.CAMPUS_ADMIN]: 'Campus Admin',
    [UserRole.HOD_DEAN]: 'HOD / Dean',
    [UserRole.TEACHER]: 'Faculty',
    [UserRole.STUDENT]: 'Student',
    [UserRole.PARENT]: 'Guardian',
    [UserRole.FINANCE_OFFICER]: 'Finance',
    [UserRole.LIBRARY_ADMIN]: 'Librarian',
    [UserRole.HOSTEL_WARDEN]: 'Warden',
    [UserRole.TRANSPORT_OFFICER]: 'Logistics',
    [UserRole.IT_ADMIN]: 'Security/IT',
    [UserRole.UNIVERSITY_GOV]: 'Governance',
  };

  return (
    <header className="glass-surface h-16 flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
          <input 
            type="text" 
            placeholder="Global search (files, people, records...)" 
            className="w-full pl-10 pr-4 py-2 bg-slate-100/50 border border-slate-200/50 rounded-xl text-sm font-medium focus:bg-white focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500/30 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="hidden sm:flex flex-col text-right">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Context</span>
          <div className="relative">
            <select 
              value={currentRole} 
              onChange={(e) => setRole(e.target.value as UserRole)}
              className="appearance-none bg-slate-100 text-[11px] font-bold text-slate-700 px-3 py-1 rounded-lg border border-slate-200 outline-none cursor-pointer hover:bg-slate-200 transition-all pr-7"
            >
              {Object.entries(UserRole).map(([key, value]) => (
                <option key={value} value={value}>{roleDisplay[value]}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
          </div>
        </div>

        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center space-x-3 pl-2 cursor-pointer group">
          <div className="text-right hidden md:block">
            <p className="text-sm font-semibold text-slate-900 leading-tight">Liam Chen</p>
            <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">{roleDisplay[currentRole]}</p>
          </div>
          <div className="w-9 h-9 bg-slate-800 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-all">
             <User className="w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
