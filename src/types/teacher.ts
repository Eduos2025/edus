
// Teacher types
export interface LessonPlan {
  id: string;
  title: string;
  subject: string;
  class: string;
  section: string;
  date: string;
  duration: string;
  objectives: string[];
  materials: string[];
  activities: string[];
  assessment: string;
  homework: string;
  notes: string;
  status: 'planned' | 'completed' | 'cancelled';
}

export interface TeacherAttendance {
  id: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'leave';
  checkInTime?: string;
  checkOutTime?: string;
  reason?: string;
}

export interface Leave {
  id: string;
  teacherId: string;
  startDate: string;
  endDate: string;
  leaveType: 'sick' | 'casual' | 'emergency' | 'other';
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  appliedOn: string;
  approvedBy?: string;
  approvedOn?: string;
}

export interface StudentAttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  date: string;
  status: 'present' | 'absent' | 'late';
  class: string;
  section: string;
  subject: string;
  remarks?: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  subject: string;
  class: string;
  section: string;
  dueDate: string;
  maxMarks: number;
  status: 'active' | 'inactive';
  attachments?: string[];
  submissions?: AssignmentSubmission[];
}

export interface AssignmentSubmission {
  id: string;
  assignmentId: string;
  studentId: string;
  studentName: string;
  submissionDate: string;
  status: 'submitted' | 'graded' | 'late';
  attachments?: string[];
  marks?: number;
  feedback?: string;
}

export interface LiveClass {
  id: string;
  title: string;
  subject: string;
  class: string;
  section: string;
  date: string;
  startTime: string;
  endTime: string;
  platform: 'zoom' | 'google-meet' | 'microsoft-teams' | 'other';
  meetingLink: string;
  meetingId?: string;
  passcode?: string;
  description?: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}

export interface TeacherQuiz {
  id: string;
  title: string;
  subject: string;
  class: string;
  duration: string;
  totalQuestions: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'inactive' | 'completed';
  createdBy: string;
  createdOn: string;
  submissions?: number;
  averageScore?: number;
  description?: string;
  category?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  timeLimit?: number;
  questions?: any[];
  attempted?: boolean;
  completedDate?: string;
  score?: number;
}
