
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  GraduationCap, 
  Settings,
  BookOpen,
  Calendar,
  Users,
  BarChart3,
  DollarSign,
  Flag,
  Contact,
  Glasses,
  Cpu,
  Trophy,
  ListTree,
  FileSpreadsheet,
  Zap,
  Wallet,
  Building,
  ChevronRight,
  MessageCircle,
  UserCheck,
  CreditCard,
  Truck,
  ClipboardList,
  Database,
  ChevronDown,
  Activity,
  ShieldCheck,
  Briefcase,
  Layers,
  Search,
  CheckCircle2,
  FileText,
  ShieldAlert,
  CalendarClock,
  MonitorCheck
} from 'lucide-react';
import { UserRole } from '../types';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  role: UserRole;
}

interface MenuItem {
  id: string;
  label: string;
  icon: any;
  roles: UserRole[];
  subItems?: { id: string; label: string; roles: UserRole[] }[];
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, role }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const menuGroups = [
    {
      label: 'Main Dashboard',
      items: [
        { id: 'dashboard', label: 'Overview', icon: LayoutDashboard, roles: Object.values(UserRole) },
        { id: 'messaging', label: 'Classroom Hub', icon: MessageCircle, roles: Object.values(UserRole) },
        { id: 'attendance', label: 'Attendance', icon: UserCheck, roles: [UserRole.STUDENT, UserRole.PARENT, UserRole.TEACHER],
          subItems: [
            { id: 'att-matrix', label: 'Presence Matrix', roles: [UserRole.TEACHER, UserRole.STUDENT] },
            { id: 'att-logs', label: 'Biometric Logs', roles: [UserRole.TEACHER] }
          ]
        },
      ]
    },
    {
      label: 'Learning Node',
      items: [
        { 
          id: 'lms', 
          label: 'LMS Hub', 
          icon: GraduationCap, 
          roles: [UserRole.STUDENT, UserRole.TEACHER, UserRole.SUPER_ADMIN, UserRole.PARENT, UserRole.HOD_DEAN],
          subItems: [
            { id: 'lms-courses', label: 'Course Registry', roles: [UserRole.TEACHER, UserRole.HOD_DEAN, UserRole.SUPER_ADMIN] },
            { id: 'lms-content', label: 'Resource Mgmt', roles: [UserRole.TEACHER] },
            { id: 'lms-tasks', label: 'Assignments', roles: Object.values(UserRole) },
            { id: 'lms-ai', label: 'AI Learning', roles: [UserRole.STUDENT, UserRole.TEACHER] }
          ]
        },
        { 
          id: 'question-bank', 
          label: 'Question Bank', 
          icon: Database, 
          roles: [UserRole.STUDENT, UserRole.TEACHER, UserRole.SUPER_ADMIN, UserRole.CAMPUS_ADMIN],
          subItems: [
            { id: 'qb-global', label: 'Global Repo', roles: [UserRole.SUPER_ADMIN] },
            { id: 'qb-gen', label: 'AI Generator', roles: [UserRole.TEACHER, UserRole.SUPER_ADMIN] },
            { id: 'qb-practice', label: 'Practice Hub', roles: [UserRole.STUDENT] }
          ]
        },
        { 
          id: 'timetable', 
          label: 'Smart Schedule', 
          icon: Calendar, 
          roles: Object.values(UserRole),
          subItems: [
            { id: 'tt-auto', label: 'AI Scheduler', roles: [UserRole.CAMPUS_ADMIN, UserRole.SUPER_ADMIN] },
            { id: 'tt-rooms', label: 'Room Registry', roles: [UserRole.CAMPUS_ADMIN] },
            { id: 'tt-view', label: 'Live Roster', roles: Object.values(UserRole) }
          ]
        },
        { 
          id: 'exams', 
          label: 'Exams & Results', 
          icon: FileSpreadsheet, 
          roles: [UserRole.STUDENT, UserRole.TEACHER, UserRole.SUPER_ADMIN, UserRole.PARENT, UserRole.CAMPUS_ADMIN],
          subItems: [
            { id: 'exams-overview', label: 'Verified Results', roles: Object.values(UserRole) },
            { id: 'exams-scheduling', label: 'Master Schedule', roles: Object.values(UserRole) },
            { id: 'exams-secure-hub', label: 'Proctoring Hub', roles: [UserRole.SUPER_ADMIN, UserRole.CAMPUS_ADMIN, UserRole.TEACHER] },
          ]
        },
      ]
    },
    {
      label: 'Finances & Ops',
      items: [
        { 
          id: 'operations', 
          label: 'ERP & Finance', 
          icon: DollarSign, 
          roles: [UserRole.SUPER_ADMIN, UserRole.CAMPUS_ADMIN, UserRole.FINANCE_OFFICER],
          subItems: [
            { id: 'ops-finance', label: 'Finance Ledger', roles: [UserRole.FINANCE_OFFICER, UserRole.SUPER_ADMIN] },
            { id: 'ops-payroll', label: 'Payroll Hub', roles: [UserRole.FINANCE_OFFICER] },
            { id: 'ops-grants', label: 'Grant Ledger', roles: [UserRole.SUPER_ADMIN] }
          ]
        },
        { 
          id: 'people', 
          label: 'People & HR', 
          icon: Users, 
          roles: [UserRole.SUPER_ADMIN, UserRole.CAMPUS_ADMIN, UserRole.IT_ADMIN],
          subItems: [
            { id: 'hr-directory', label: 'Active Directory', roles: [UserRole.IT_ADMIN, UserRole.SUPER_ADMIN] },
            { id: 'hr-recruit', label: 'AI Recruitment', roles: [UserRole.SUPER_ADMIN] },
            { id: 'hr-onboarding', label: 'Staff Onboarding', roles: [UserRole.CAMPUS_ADMIN] }
          ]
        },
        { id: 'scholarship', label: 'Scholarship Cell', icon: Trophy, roles: Object.values(UserRole) },
        { id: 'wallet', label: 'EduWallet', icon: Wallet, roles: [UserRole.STUDENT, UserRole.SUPER_ADMIN] },
      ]
    },
    {
      label: 'Campus Life',
      items: [
        { id: 'infrastructure', label: 'Logistics & Bus', icon: Truck, roles: Object.values(UserRole) },
        { id: 'library', label: 'Digital Library', icon: BookOpen, roles: Object.values(UserRole),
          subItems: [
            { id: 'lib-catalog', label: 'Catalog', roles: Object.values(UserRole) },
            { id: 'lib-ai', label: 'AI Recommendations', roles: [UserRole.STUDENT] }
          ]
        },
        { id: 'success', label: 'Success Hub', icon: Zap, roles: [UserRole.STUDENT, UserRole.PARENT],
          subItems: [
            { id: 'sh-portfolio', label: 'AI Portfolio', roles: [UserRole.STUDENT] },
            { id: 'sh-wellness', label: 'Wellness AI', roles: [UserRole.STUDENT, UserRole.PARENT] }
          ]
        },
      ]
    }
  ];

  const renderMenuItem = (item: MenuItem) => {
    const isExpanded = expandedItems.includes(item.id);
    const hasSubItems = item.subItems && item.subItems.some(si => si.roles.includes(role));
    const isActive = activeTab === item.id || (item.subItems?.some(si => si.id === activeTab));

    return (
      <div key={item.id} className="space-y-0.5">
        <button
          onClick={() => {
            if (hasSubItems) {
              toggleExpand(item.id);
            }
            setActiveTab(item.id);
          }}
          className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-xl transition-all group ${
            isActive 
              ? 'bg-indigo-600/10 text-indigo-400' 
              : 'hover:bg-white/5 hover:text-slate-200'
          }`}
        >
          <item.icon className={`w-4 h-4 mr-3 transition-colors ${isActive ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
          <span className="flex-1 text-left truncate tracking-tight">{item.label}</span>
          {hasSubItems && (
            isExpanded ? <ChevronDown className="w-3.5 h-3.5 opacity-50" /> : <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          )}
        </button>

        {hasSubItems && isExpanded && (
          <div className="ml-9 mt-1 space-y-1 border-l border-slate-800/50 pl-2 animate-in slide-in-from-top-1 duration-200">
            {item.subItems?.filter(si => si.roles.includes(role)).map(sub => (
              <button
                key={sub.id}
                onClick={() => setActiveTab(sub.id)}
                className={`flex items-center w-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-lg transition-all ${
                  activeTab === sub.id 
                    ? 'text-indigo-400 bg-indigo-600/5' 
                    : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full mr-3 ${activeTab === sub.id ? 'bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]' : 'bg-slate-700'}`}></div>
                {sub.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="hidden lg:flex flex-col w-64 bg-slate-900 text-slate-400 h-full border-r border-slate-800 z-50">
      <div className="p-6 flex items-center space-x-4 text-white border-b border-slate-800/50">
        <div className="bg-indigo-600 p-2.5 rounded-xl shadow-2xl shadow-indigo-600/20 ring-1 ring-white/10">
          <Cpu className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="font-black text-xl tracking-tighter uppercase leading-none">EduVerse</span>
          <span className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em] mt-1 leading-none">Institutional OS</span>
        </div>
      </div>

      <nav className="flex-1 px-3 py-8 space-y-10 overflow-y-auto custom-scrollbar">
        {menuGroups.map((group, gIdx) => {
          const visibleItems = group.items.filter(i => i.roles.includes(role));
          if (visibleItems.length === 0) return null;
          
          return (
            <div key={gIdx} className="space-y-3">
              <h3 className="px-4 text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">{group.label}</h3>
              <div className="space-y-1">
                {visibleItems.map(item => renderMenuItem(item))}
              </div>
            </div>
          );
        })}
      </nav>

      <div className="p-6 bg-slate-900 border-t border-slate-800/50">
        <button className="flex items-center w-full px-4 py-3 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all rounded-xl hover:bg-white/5 group border border-transparent hover:border-slate-800">
          <Settings className="w-4 h-4 mr-3 group-hover:rotate-90 transition-transform duration-700" />
          Settings Hub
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
