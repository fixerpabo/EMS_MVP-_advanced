
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import AcademicHub from './pages/AcademicHub';
import AIIntel from './pages/AIIntel';
import Operations from './pages/Operations';
import PeopleManagement from './pages/PeopleManagement';
import Timetable from './pages/Timetable';
import Library from './pages/Library';
import Analytics from './pages/Analytics';
import Infrastructure from './pages/Infrastructure';
import StudentSuccess from './pages/StudentSuccess';
import Governance from './pages/Governance';
import StudentID from './pages/StudentID';
import ScholarshipCell from './pages/ScholarshipCell';
import Exams from './pages/Exams';
import TutoringMarket from './pages/TutoringMarket';
import GigBoard from './pages/GigBoard';
import CorporateHub from './pages/CorporateHub';
import Wallet from './pages/Wallet';
import AttendanceDashboard from './pages/AttendanceDashboard';
import StudentFees from './pages/StudentFees';
import ClassroomMessaging from './pages/ClassroomMessaging';
import QuestionBank from './pages/QuestionBank';
import { UserRole } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>(UserRole.STUDENT);

  const renderContent = () => {
    // Handle sub-tab routing for granular sidebar items
    if (activeTab.startsWith('lms-')) return <AcademicHub role={currentUserRole} defaultTab="lms" />;
    if (activeTab.startsWith('qb-')) return <QuestionBank role={currentUserRole} />;
    if (activeTab.startsWith('tt-')) return <Timetable role={currentUserRole} />;
    if (activeTab.startsWith('ops-')) return <Operations role={currentUserRole} />;
    if (activeTab.startsWith('hr-')) return <PeopleManagement role={currentUserRole} />;
    if (activeTab.startsWith('lib-')) return <Library role={currentUserRole} />;
    if (activeTab.startsWith('sh-')) return <StudentSuccess role={currentUserRole} />;
    if (activeTab.startsWith('att-')) return <AttendanceDashboard role={currentUserRole} />;
    if (activeTab.startsWith('exams-')) return <Exams role={currentUserRole} defaultTab={activeTab.replace('exams-', '')} />;

    switch (activeTab) {
      case 'dashboard':
        return <Dashboard role={currentUserRole} />;
      case 'lms':
        return <AcademicHub role={currentUserRole} defaultTab="lms" />;
      case 'vrlabs':
        return <AcademicHub role={currentUserRole} defaultTab="vrlab" />;
      case 'research':
        return <AcademicHub role={currentUserRole} defaultTab="research" />;
      case 'topics':
        return <AcademicHub role={currentUserRole} defaultTab="topics" />;
      case 'academic':
        return <AcademicHub role={currentUserRole} />;
      case 'exams':
        return <Exams role={currentUserRole} />;
      case 'question-bank':
        return <QuestionBank role={currentUserRole} />;
      case 'id-card':
        return <StudentID role={currentUserRole} />;
      case 'scholarship':
        return <ScholarshipCell role={currentUserRole} />;
      case 'ai-intel':
        return <AIIntel role={currentUserRole} />;
      case 'operations':
        return <Operations role={currentUserRole} />;
      case 'people':
        return <PeopleManagement role={currentUserRole} />;
      case 'timetable':
        return <Timetable role={currentUserRole} />;
      case 'library':
        return <Library role={currentUserRole} />;
      case 'analytics':
        return <Analytics role={currentUserRole} />;
      case 'infrastructure':
        return <Infrastructure role={currentUserRole} />;
      case 'success':
        return <StudentSuccess role={currentUserRole} />;
      case 'governance':
        return <Governance role={currentUserRole} />;
      case 'tutoring':
        return <TutoringMarket role={currentUserRole} />;
      case 'gigs':
        return <GigBoard role={currentUserRole} />;
      case 'corporate':
        return <CorporateHub role={currentUserRole} />;
      case 'wallet':
        return <Wallet role={currentUserRole} />;
      case 'attendance':
        return <AttendanceDashboard role={currentUserRole} />;
      case 'student-fees':
        return <StudentFees role={currentUserRole} />;
      case 'messaging':
        return <ClassroomMessaging role={currentUserRole} />;
      default:
        return <Dashboard role={currentUserRole} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-sans">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        role={currentUserRole} 
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header 
          currentRole={currentUserRole} 
          setRole={setCurrentUserRole} 
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto pb-20">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
