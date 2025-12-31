
export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  CAMPUS_ADMIN = 'CAMPUS_ADMIN',
  HOD_DEAN = 'HOD_DEAN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  PARENT = 'PARENT',
  FINANCE_OFFICER = 'FINANCE_OFFICER',
  LIBRARY_ADMIN = 'LIBRARY_ADMIN',
  HOSTEL_WARDEN = 'HOSTEL_WARDEN',
  TRANSPORT_OFFICER = 'TRANSPORT_OFFICER',
  IT_ADMIN = 'IT_ADMIN',
  UNIVERSITY_GOV = 'UNIVERSITY_GOV'
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  progress: number;
  lastAccessed: string;
  image: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface DailyTask {
  id: string;
  subject: string;
  date: string;
  day: string;
  title: string;
  description: string;
  assignedBy: string;
  status: 'pending' | 'submitted' | 'completed';
  isMandatory: boolean;
}

export interface Question {
  id: string;
  text: string;
  options?: string[];
  correctAnswer?: number;
  explanation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  subject: string;
}

export interface QuestionPaper {
  id: string;
  title: string;
  subject: string;
  year: string;
  examType: 'Mid-term' | 'Final' | 'Unit Test';
  questionCount: number;
  difficulty: string;
}
