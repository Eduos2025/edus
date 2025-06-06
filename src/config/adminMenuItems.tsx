import { 
  LayoutDashboard, 
  DollarSign,
  ClipboardCheck,
  Award,
  Users,
  Book,
  Layers,
  List,
  Newspaper,
  TrendingDown,
  Scissors,
  MessageSquare,
  Calendar,
  Bell,
  CreditCard,
  Tag,
  Shield,
  FileText,
  Edit,
  Upload,
  Star,
  BookOpen,
  Video,
  Link,
  School,
  Eye,
  UserPlus,
  LineChart,
  BarChart,
  PieChart,
  MonitorPlay,
  Clock,
  ClipboardList,
  Palette,
  Package,
  BoxesIcon,
  ShoppingBag,
  Store,
  Building,
  Truck,
  ArchiveIcon,
  Package2Icon
} from 'lucide-react';
import { MenuItem } from '@/types/sidebar';

// Menu items for admin
export const adminMenuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    path: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Analytics',
    path: '/admin/analytics',
    icon: BarChart,
  },
  {
    title: 'User Management',
    path: '/admin/users',
    icon: Users,
  },
  {
    title: 'Quiz Management',
    path: '/admin/quiz',
    icon: Award,
    submenu: [
      { title: 'Manage Quiz', path: '/admin/quiz/manage' }
    ]
  },
  {
    title: 'Live Class & Courses',
    path: '/admin/live-class',
    icon: MonitorPlay,
    submenu: [
      { title: 'Manage Live Classes', path: '/admin/live-class/manage' }
    ]
  },
  {
    title: 'Teacher Attendance',
    path: '/admin/attendance/teacher',
    icon: ClipboardList,
  },
  {
    title: 'Student Attendance',
    path: '/admin/attendance/student',
    icon: Clock,
  },
  {
    title: 'Lesson Plans',
    path: '/admin/lesson-plan',
    icon: Book,
    submenu: [
      { title: 'View Lesson Plans', path: '/admin/lesson-plan/view' }
    ]
  },
  {
    title: 'Class Payment List',
    path: '/admin/payment',
    icon: DollarSign,
    submenu: [
      { title: 'Manage Payment List', path: '/admin/payment/manage' },
      { title: 'Add Payment List', path: '/admin/payment/add' }
    ]
  },
  {
    title: 'Exam Management',
    path: '/admin/exam',
    icon: ClipboardCheck,
    submenu: [
      { title: 'Add Assessment/Questions', path: '/admin/exam/add-assessment' },
      { title: 'Manage Assessment Ques', path: '/admin/exam/manage-assessment' },
      { title: 'Manage Exam Ques', path: '/admin/exam/manage-exam-questions' },
      { title: 'Manage Set Assessment', path: '/admin/exam/manage-set-assessment' },
      { title: 'Manage Set Exam', path: '/admin/exam/manage-set-exam' },
      { title: 'Upload Excel Ques', path: '/admin/exam/upload-excel' }
    ]
  },
  {
    title: 'Events and testimonials',
    path: '/admin/events',
    icon: Award,
    submenu: [
      { title: 'Manage Testimonial', path: '/admin/events/manage-testimonial' },
      { title: 'Student Price List', path: '/admin/events/price-list' }
    ]
  },
  {
    title: 'Manage Admin',
    path: '/admin/admin-users',
    icon: Users,
    submenu: [
      { title: 'Add Admin', path: '/admin/admin-users/add' },
      { title: 'Manage admin', path: '/admin/admin-users/manage' }
    ]
  },
  {
    title: 'Manage Class',
    path: '/admin/class',
    icon: Book,
    submenu: [
      { title: 'Add Class', path: '/admin/class/add' },
      { title: 'Manage class', path: '/admin/class/manage' }
    ]
  },
  {
    title: 'Manage Depat',
    path: '/admin/department',
    icon: Layers,
    submenu: [
      { title: 'Add Department', path: '/admin/department/add' },
      { title: 'Manage Department', path: '/admin/department/manage' }
    ]
  },
  {
    title: 'Manage Level',
    path: '/admin/level',
    icon: List,
    submenu: [
      { title: 'Add Level', path: '/admin/level/add' }
    ]
  },
  {
    title: 'Manage News',
    path: '/admin/news',
    icon: Newspaper,
    submenu: [
      { title: 'Add News', path: '/admin/news/add' }
    ]
  },
  {
    title: 'Manage promotion',
    path: '/admin/promotion',
    icon: TrendingDown,
    submenu: [
      { title: 'Roll Back last promotion', path: '/admin/promotion/rollback' }
    ]
  },
  {
    title: 'Manage Section',
    path: '/admin/section',
    icon: Scissors,
    submenu: [
      { title: 'Add section', path: '/admin/section/add' }
    ]
  },
  {
    title: 'Manage Subject',
    path: '/admin/subject',
    icon: Book,
    submenu: [
      { title: 'Add Subject', path: '/admin/subject/add' }
    ]
  },
  {
    title: 'Manage Teacher Comment',
    path: '/admin/teacher-comment',
    icon: MessageSquare,
    submenu: [
      { title: 'Add Teacher Comment', path: '/admin/teacher-comment/add' },
      { title: 'Manage comment', path: '/admin/teacher-comment/manage' }
    ]
  },
  {
    title: 'Manage Term',
    path: '/admin/term',
    icon: Calendar,
    submenu: [
      { title: 'Add Term', path: '/admin/term/add' },
      { title: 'Manage Term', path: '/admin/term/manage' }
    ]
  },
  {
    title: 'Notification',
    path: '/admin/notification',
    icon: Bell,
    submenu: [
      { title: 'Dashboard Notification', path: '/admin/notification/dashboard' },
      { title: 'Email Notification', path: '/admin/notification/email' }
    ]
  },
  {
    title: 'Payment Management',
    path: '/admin/payment-management',
    icon: CreditCard,
    submenu: [
      { title: 'Confirm payment', path: '/admin/payment-management/confirm' },
      { title: 'Customization payment', path: '/admin/payment-management/customization' },
      { title: 'Manage Customization payment', path: '/admin/payment-management/manage-customization' },
      { title: 'Manage Payment', path: '/admin/payment-management/manage' },
      { title: 'Pay customized bill', path: '/admin/payment-management/pay-customized' },
      { title: 'Pay Student bill', path: '/admin/payment-management/pay-student' }
    ]
  },
  {
    title: 'Payment Method',
    path: '/admin/payment-method',
    icon: DollarSign,
    submenu: [
      { title: 'Add Payment Method', path: '/admin/payment-method/add' }
    ]
  },
  {
    title: 'Payment Purpose',
    path: '/admin/payment-purpose',
    icon: Tag,
    submenu: [
      { title: 'Add Payment Purpose', path: '/admin/payment-purpose/add' },
      { title: 'Manage Pay Purpose', path: '/admin/payment-purpose/manage' }
    ]
  },
  {
    title: 'Pin Generator',
    path: '/admin/pin',
    icon: Shield,
    submenu: [
      { title: 'Generate App. Pin', path: '/admin/pin/application' },
      { title: 'Generate Res. Pin', path: '/admin/pin/result' }
    ]
  },
  {
    title: 'Report card insights',
    path: '/admin/report-card',
    icon: FileText,
    submenu: [
      { title: 'Result Templates', path: '/admin/report-card/templates' }
    ]
  },
  {
    title: 'Result Management',
    path: '/admin/result',
    icon: FileText,
    submenu: [
      { title: 'Edit Class Result', path: '/admin/result/edit' },
      { title: 'Manage Team results', path: '/admin/result/manage-team' },
      { title: 'Upload a student res.', path: '/admin/result/upload-student' },
      { title: 'Upload Class Result', path: '/admin/result/upload-class' },
      { title: 'Upload external Res With Excel', path: '/admin/result/upload-external-excel' },
      { title: 'Upload Result with excel', path: '/admin/result/upload-excel' },
      { title: 'Upload Student external Res.', path: '/admin/result/upload-student-external' },
      { title: 'Upload student Result', path: '/admin/result/upload' }
    ]
  },
  {
    title: 'School Library',
    path: '/admin/library',
    icon: BookOpen,
    submenu: [
      { title: 'Library Audio Books', path: '/admin/library/audio' },
      { title: 'Library Text Books', path: '/admin/library/textbooks' },
      { title: 'Library Video Books', path: '/admin/library/video' },
      { title: 'Upload Books', path: '/admin/library/upload' }
    ]
  },
  {
    title: 'Site Link',
    path: '/admin/site-link',
    icon: Link
  },
  {
    title: 'Student',
    path: '/admin/student',
    icon: Users,
    submenu: [
      { title: 'Add Student', path: '/admin/student/add' },
      { title: 'Add Student with Excel', path: '/admin/student/add-excel' },
      { title: 'Group Student', path: '/admin/student/group' },
      { title: 'Manage Application', path: '/admin/student/manage-application' },
      { title: 'Manage Student', path: '/admin/student/manage' },
      { title: 'Manage Trashed Student', path: '/admin/student/trashed' },
      { title: 'Promote Students', path: '/admin/student/promote' },
      { title: 'View A Class Students', path: '/admin/student/view-class' }
    ]
  },
  {
    title: 'The School',
    path: '/admin/school',
    icon: School
  },
  {
    title: 'View Payment Records',
    path: '/admin/payment-records',
    icon: Eye
  },
  {
    title: 'Inventory',
    path: '/admin/inventory',
    icon: Package,
    submenu: [
      { title: 'Issues Item', path: '/admin/inventory/issues-item' },
      { title: 'Add Item Stock', path: '/admin/inventory/add-item-stock' },
      { title: 'Add Item', path: '/admin/inventory/add-item' },
      { title: 'Item Category', path: '/admin/inventory/item-category' },
      { title: 'Item Store', path: '/admin/inventory/item-store' },
      { title: 'Item Supplier', path: '/admin/inventory/item-supplier' },
    ]
  }
];
