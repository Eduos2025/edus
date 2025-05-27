// User related types
export type UserRole = 'student' | 'admin' | 'teacher' | 'accountant';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profilePicture?: string;
}

// Assignment types
export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Assignment {
  id: string;
  subject: string;
  description: string;
  class: string;
  timeToSpend: string;
  startDate: string;
  endDate: string;
  markContained: string;
  status: 'active' | 'inactive' | 'completed';
  questions: Question[];
}

// Exam types
export interface Exam {
  id: string;
  subject: string;
  class: string;
  timeToSpend: string;
  startDate: string;
  endDate: string;
  examType: string;
  markContained: string;
  status?: 'active' | 'inactive' | 'completed';
}

export interface ExamScore {
  id: string;
  studentName: string;
  admissionNo: string;
  examScore: string;
  class: string;
  subject: string;
  date: string;
}

// Result types
export interface ResultChecker {
  id: string;
  resultClass: string;
  resultTerms: string;
  session: string;
  resultChecker: string;
}

// Payment types
export interface PaymentRecord {
  id: string;
  transactionId: string;
  terms: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Failed';
  date: string;
}

// Quiz types
export interface Quiz {
  id: string;
  title: string;
  subject: string;
  class: string;
  duration: string;
  totalQuestions: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'inactive' | 'completed';
  // Additional properties needed by Quiz.tsx
  description: string;
  category?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  timeLimit: number;
  questions: any[];
  attempted?: boolean;
  completedDate?: string;
  score?: number;
}

// TimeTable types
export interface TimeTableEntry {
  id?: string;
  day: string;
  period: number;  // Changed from string to number
  subject: string;
  teacher: string;
  time?: string;
  class?: string;
  section?: string;
  room: string;  // Added missing property
}

// Other types as needed...
