import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Layouts
import StudentLayout from "./components/StudentLayout";
import AdminLayout from "./components/AdminLayout";
import TeacherLayout from "./components/TeacherLayout";
import AccountantLayout from "./components/AccountantLayout";

// Auth pages
import Login from "./pages/Login";
import StudentLogin from "./pages/StudentLogin";

// Student dashboard
import StudentDashboard from "./pages/student/Dashboard";

// Student pages
import TakeAssessment from "./pages/student/assignment/TakeAssessment";
import AssessmentScore from "./pages/student/assignment/AssessmentScore";

// Library pages
import AudioBooks from "./pages/student/library/AudioBooks";
import EBooks from "./pages/student/library/EBooks";
import VideoBooks from "./pages/student/library/VideoBooks";

// Payment pages
import PayBill from "./pages/student/payment/PayBill";
import PaymentRecord from "./pages/student/payment/PaymentRecord";

// Exam pages
import ExamScore from "./pages/student/exam/ExamScore";
import TakeExam from "./pages/student/exam/TakeExam";
import ExamCard from "./pages/student/ExamCard";
import ExamPass from "./pages/student/ExamPass";
import PrintForm from "./pages/student/PrintForm";

// Result pages
import CheckResult from "./pages/student/result/CheckResult";
import ReprintResult from "./pages/student/result/ReprintResult";

// New pages
import TimeTable from "./pages/student/TimeTable";
import AttendanceReport from "./pages/student/AttendanceReport";
import Quiz from "./pages/student/Quiz";
import ELearning from "./pages/student/elearning/LiveClasses";
import Courses from "./pages/student/elearning/Courses";

// Admin pages
import AdminDashboard from "./pages/admin/Dashboard";

// New Admin Pages
import DashboardAnalytics from "./pages/admin/analytics/DashboardAnalytics";
import UserManagement from "./pages/admin/users/UserManagement";
import SiteSettings from "./pages/admin/settings/SiteSettings";

// New Custom Pages
import AdminQuizManagement from "./pages/admin/quiz/ManageQuiz";
import ManageLiveClass from "./pages/admin/live-class/ManageLiveClass";
import TeacherAttendance from "./pages/admin/attendance/TeacherAttendance";
import StudentAttendance from "./pages/admin/attendance/StudentAttendance";
import ViewLessonPlans from "./pages/admin/lesson-plan/ViewLessonPlans";

// Admin Payment pages
import ManagePaymentList from "./pages/admin/payment/ManagePaymentList";
import AddPaymentList from "./pages/admin/payment/AddPaymentList";

// Admin Exam pages
import AdminAddAssessment from "./pages/admin/exam/AddAssessment";
import AdminManageAssessment from "./pages/admin/exam/ManageAssessment";
import AdminManageExamQuestions from "./pages/admin/exam/ManageExamQuestions";
import ManageSetAssessment from "./pages/admin/exam/ManageSetAssessment";
import ManageSetExam from "./pages/admin/exam/ManageSetExam";
import UploadExcelQuestions from "./pages/admin/exam/UploadExcelQuestions";

// Admin Events pages
import ManageTestimonial from "./pages/admin/events/ManageTestimonial";
import StudentPriceList from "./pages/admin/events/StudentPriceList";

// Admin Users pages
import AddAdmin from "./pages/admin/admin-users/AddAdmin";
import ManageAdmin from "./pages/admin/admin-users/ManageAdmin";

// Admin Class pages
import AddClass from "./pages/admin/class/AddClass";
import ManageClass from "./pages/admin/class/ManageClass";

// Admin Department pages
import AddDepartment from "./pages/admin/department/AddDepartment";
import ManageDepartment from "./pages/admin/department/ManageDepartment";

// Admin Level pages
import AddLevel from "./pages/admin/level/AddLevel";

// Admin News pages
import AddNews from "./pages/admin/news/AddNews";

// Admin Promotion pages
import RollbackPromotion from "./pages/admin/promotion/RollbackPromotion";

// Admin Section pages
import AddSection from "./pages/admin/section/AddSection";

// Admin Subject pages
import AddSubject from "./pages/admin/subject/AddSubject";

// Admin Teacher Comment pages
import AddTeacherComment from "./pages/admin/teacher-comment/AddTeacherComment";
import ManageTeacherComment from "./pages/admin/teacher-comment/ManageTeacherComment";

// Admin Term pages
import AddTerm from "./pages/admin/term/AddTerm";
import ManageTerm from "./pages/admin/term/ManageTerm";

// Admin Notification pages
import DashboardNotification from "./pages/admin/notification/DashboardNotification";
import EmailNotification from "./pages/admin/notification/EmailNotification";

// Admin Payment Management pages
import ConfirmPayment from "./pages/admin/payment-management/ConfirmPayment";
import CustomizationPayment from "./pages/admin/payment-management/CustomizationPayment";
import ManageCustomizationPayment from "./pages/admin/payment-management/ManageCustomizationPayment";
import ManagePayment from "./pages/admin/payment-management/ManagePayment";
import PayCustomizedBill from "./pages/admin/payment-management/PayCustomizedBill";
import PayStudentBill from "./pages/admin/payment-management/PayStudentBill";

// Admin Payment Method pages
import AddPaymentMethod from "./pages/admin/payment-method/AddPaymentMethod";

// Admin Payment Purpose pages
import AddPaymentPurpose from "./pages/admin/payment-purpose/AddPaymentPurpose";
import ManagePayPurpose from "./pages/admin/payment-purpose/ManagePayPurpose";

// Admin Pin Generator pages
import GenerateApplicationPin from "./pages/admin/pin/GenerateApplicationPin";
import GenerateResultPin from "./pages/admin/pin/GenerateResultPin";

// Admin Report Card pages
import ReportCardInsights from "./pages/admin/report-card/ReportCardInsights";

// Admin Result Management pages
import AdminEditClassResult from "./pages/admin/result/EditClassResult";
import ManageTeamResults from "./pages/admin/result/ManageTeamResults";
import AdminUploadStudentResult from "./pages/admin/result/UploadStudentResult";
import AdminUploadClassResult from "./pages/admin/result/UploadClassResult";
import UploadExternalResultExcel from "./pages/admin/result/UploadExternalResultExcel";
import UploadResultExcel from "./pages/admin/result/UploadResultExcel";
import UploadStudentExternalResult from "./pages/admin/result/UploadStudentExternalResult";
import UploadResult from "./pages/admin/result/UploadResult";

// New Admin pages
// Library pages
import LibraryAudioBooks from "./pages/admin/library/LibraryAudioBooks";
import LibraryTextBooks from "./pages/admin/library/LibraryTextBooks";
import LibraryVideoBooks from "./pages/admin/library/LibraryVideoBooks";
import UploadBooks from "./pages/admin/library/UploadBooks";

// Site Link
import SiteLink from "./pages/admin/SiteLink";

// Student pages
import AddStudent from "./pages/admin/student/AddStudent";
import AddStudentExcel from "./pages/admin/student/AddStudentExcel";
import GroupStudent from "./pages/admin/student/GroupStudent";
import ManageApplication from "./pages/admin/student/ManageApplication";
import ManageStudent from "./pages/admin/student/ManageStudent";
import ManageTrashedStudent from "./pages/admin/student/ManageTrashedStudent";
import PromoteStudents from "./pages/admin/student/PromoteStudents";
import ViewClassStudents from "./pages/admin/student/ViewClassStudents";

// School
import TheSchool from "./pages/admin/TheSchool";

// Payment Records
import ViewPaymentRecords from "./pages/admin/ViewPaymentRecords";

// Teacher pages
import TeacherDashboard from "./pages/teacher/Dashboard";
import AddLessonPlan from "./pages/teacher/lesson-plan/AddLessonPlan";
import ManageLessonPlans from "./pages/teacher/lesson-plan/ManageLessonPlans";
import TeacherAddAssessment from "./pages/teacher/exam/AddAssessment";
import TeacherManageAssessment from "./pages/teacher/exam/ManageAssessment";
import TeacherManageExamQuestions from "./pages/teacher/exam/ManageExamQuestions";
import TeacherUploadStudentResult from "./pages/teacher/result/UploadStudentResult";
import TeacherUploadClassResult from "./pages/teacher/result/UploadClassResult";
import TeacherEditClassResult from "./pages/teacher/result/EditClassResult";
import TeacherTimeTable from "./pages/teacher/timetable/index";
import AddQuiz from "./pages/teacher/quiz/add";
import TeacherQuizManagement from "./pages/teacher/quiz/manage";
import TeacherMyAttendance from "./pages/teacher/attendance/my";
import TeacherLeaveManagement from "./pages/teacher/attendance/leave";
import TeacherStudentAttendance from "./pages/teacher/student-attendance/index";
import TeacherAssignmentsIndex from "./pages/teacher/assignments/index";
import AddAssignment from "./pages/teacher/assignments/add";
import ManageAssignments from "./pages/teacher/assignments/manage";
import AssignmentReports from "./pages/teacher/assignments/reports";

// Teacher Live Classes
import LiveClassesIndex from "./pages/teacher/live-classes/index";
import ScheduleClass from "./pages/teacher/live-classes/schedule";
import ManageClasses from "./pages/teacher/live-classes/manage";

// Accountant pages
import AccountantDashboard from "./pages/accountant/Dashboard";

// Payment Pages for Accountant
import ClassPaymentList from "./pages/accountant/payments/ClassPaymentList";
import AccountantPaymentManagement from "./pages/accountant/payments/PaymentManagement";
import PaymentMethods from "./pages/accountant/payments/PaymentMethods";
import PaymentPurpose from "./pages/accountant/payments/PaymentPurpose";
import PaymentRecords from "./pages/accountant/payments/PaymentRecords";
import PettyCashManagement from "./pages/accountant/expenses/PettyCashManagement";
import ExpenseManagement from "./pages/accountant/expenses/ExpenseManagement";

// Fee Collection Pages
import CollectFee from "./pages/accountant/fee-collection/CollectFee";
import FeeDue from "./pages/accountant/fee-collection/FeeDue";
import DueReports from "./pages/accountant/fee-collection/DueReports";

// Salary Management Pages
import PendingSalaries from "./pages/accountant/salary/PendingSalaries";
import SalaryHistory from "./pages/accountant/salary/SalaryHistory";

// Reports Pages
import CollectionReport from "./pages/accountant/reports/CollectionReport";
import ExpenseReport from "./pages/accountant/reports/ExpenseReport";
import BalanceSheet from "./pages/accountant/reports/BalanceSheet";
import RevenueAnalytics from "./pages/accountant/reports/RevenueAnalytics";

// Other pages
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

// Import inventory pages
import IssuesItem from './pages/admin/inventory/issues-item';
import AddItemStock from './pages/admin/inventory/add-item-stock';
import AddItem from './pages/admin/inventory/add-item';
import ItemCategory from './pages/admin/inventory/item-category';
import ItemStore from './pages/admin/inventory/item-store';
import ItemSupplier from './pages/admin/inventory/item-supplier';

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Landing page */}
            <Route path="/" element={<Index />} />
            
            {/* Auth routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/student-login" element={<StudentLogin />} />
            
            {/* Vercel-style routes for school management portal */}
            <Route path="/school-management/portal" element={<Login />} />

            {/* Student routes */}
            <Route path="/student" element={
              <ProtectedRoute>
                <StudentLayout />
              </ProtectedRoute>
            }>
              <Route index element={<StudentDashboard />} />
              
              {/* Assignment routes */}
              <Route path="assignment">
                <Route index element={<TakeAssessment />} />
                <Route path="take-assessment" element={<TakeAssessment />} />
                <Route path="assessment-score" element={<AssessmentScore />} />
              </Route>
              
              {/* Library routes */}
              <Route path="library">
                <Route index element={<AudioBooks />} />
                <Route path="audio" element={<AudioBooks />} />
                <Route path="ebooks" element={<EBooks />} />
                <Route path="video" element={<VideoBooks />} />
                <Route path="video-books" element={<VideoBooks />} />
              </Route>
              
              {/* Payment routes */}
              <Route path="payment">
                <Route index element={<PayBill />} />
                <Route path="pay-bill" element={<PayBill />} />
                <Route path="record" element={<PaymentRecord />} />
              </Route>
              
              {/* Exam routes */}
              <Route path="exam">
                <Route index element={<ExamScore />} />
                <Route path="score" element={<ExamScore />} />
                <Route path="take" element={<TakeExam />} />
              </Route>
              
              <Route path="exam-card" element={<ExamCard />} />
              <Route path="exam-pass" element={<ExamPass />} />
              <Route path="print-form" element={<PrintForm />} />
              
              {/* Result routes */}
              <Route path="result">
                <Route index element={<CheckResult />} />
                <Route path="check" element={<CheckResult />} />
                <Route path="reprint" element={<ReprintResult />} />
              </Route>
              
              {/* New routes */}
              <Route path="timetable" element={<TimeTable />} />
              <Route path="attendance" element={<AttendanceReport />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="elearning">
                <Route index element={<ELearning />} />
                <Route path="live-classes" element={<ELearning />} />
                <Route path="courses" element={<Courses />} />
              </Route>
            </Route>

            {/* Admin routes */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<AdminDashboard />} />
              
              {/* New Admin Pages */}
              <Route path="analytics" element={<DashboardAnalytics />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="settings" element={<SiteSettings />} />
              
              {/* Quiz Management */}
              <Route path="quiz">
                <Route index element={<AdminQuizManagement />} />
                <Route path="manage" element={<AdminQuizManagement />} />
              </Route>
              
              {/* Live Class Management */}
              <Route path="live-class">
                <Route index element={<ManageLiveClass />} />
                <Route path="manage" element={<ManageLiveClass />} />
              </Route>
              
              {/* Attendance Management */}
              <Route path="attendance">
                <Route path="teacher" element={<TeacherAttendance />} />
                <Route path="student" element={<StudentAttendance />} />
              </Route>
              
              {/* Lesson Plans */}
              <Route path="lesson-plan">
                <Route index element={<ViewLessonPlans />} />
                <Route path="view" element={<ViewLessonPlans />} />
              </Route>
              
              {/* Payment routes */}
              <Route path="payment">
                <Route index element={<ManagePaymentList />} />
                <Route path="manage" element={<ManagePaymentList />} />
                <Route path="add" element={<AddPaymentList />} />
              </Route>
              
              {/* Exam Management routes */}
              <Route path="exam">
                <Route index element={<AdminManageExamQuestions />} />
                <Route path="add-assessment" element={<AdminAddAssessment />} />
                <Route path="manage-assessment" element={<AdminManageAssessment />} />
                <Route path="manage-exam-questions" element={<AdminManageExamQuestions />} />
                <Route path="manage-set-assessment" element={<ManageSetAssessment />} />
                <Route path="manage-set-exam" element={<ManageSetExam />} />
                <Route path="upload-excel" element={<UploadExcelQuestions />} />
              </Route>

              {/* Events and Testimonials routes */}
              <Route path="events">
                <Route index element={<ManageTestimonial />} />
                <Route path="manage-testimonial" element={<ManageTestimonial />} />
                <Route path="price-list" element={<StudentPriceList />} />
              </Route>

              {/* Manage Admin routes */}
              <Route path="admin-users">
                <Route index element={<ManageAdmin />} />
                <Route path="add" element={<AddAdmin />} />
                <Route path="manage" element={<ManageAdmin />} />
              </Route>

              {/* Manage Class routes */}
              <Route path="class">
                <Route index element={<ManageClass />} />
                <Route path="add" element={<AddClass />} />
                <Route path="manage" element={<ManageClass />} />
              </Route>

              {/* Manage Department routes */}
              <Route path="department">
                <Route index element={<ManageDepartment />} />
                <Route path="add" element={<AddDepartment />} />
                <Route path="manage" element={<ManageDepartment />} />
              </Route>

              {/* Manage Level routes */}
              <Route path="level">
                <Route index element={<AddLevel />} />
                <Route path="add" element={<AddLevel />} />
              </Route>

              {/* Manage News routes */}
              <Route path="news">
                <Route index element={<AddNews />} />
                <Route path="add" element={<AddNews />} />
              </Route>

              {/* Manage Promotion routes */}
              <Route path="promotion">
                <Route index element={<RollbackPromotion />} />
                <Route path="rollback" element={<RollbackPromotion />} />
              </Route>

              {/* Manage Section routes */}
              <Route path="section">
                <Route index element={<AddSection />} />
                <Route path="add" element={<AddSection />} />
              </Route>

              {/* Manage Subject routes */}
              <Route path="subject">
                <Route index element={<AddSubject />} />
                <Route path="add" element={<AddSubject />} />
              </Route>

              {/* Manage Teacher Comment routes */}
              <Route path="teacher-comment">
                <Route index element={<AddTeacherComment />} />
                <Route path="add" element={<AddTeacherComment />} />
                <Route path="manage" element={<ManageTeacherComment />} />
              </Route>

              {/* Manage Term routes */}
              <Route path="term">
                <Route index element={<AddTerm />} />
                <Route path="add" element={<AddTerm />} />
                <Route path="manage" element={<ManageTerm />} />
              </Route>

              {/* Notification routes */}
              <Route path="notification">
                <Route index element={<DashboardNotification />} />
                <Route path="dashboard" element={<DashboardNotification />} />
                <Route path="email" element={<EmailNotification />} />
              </Route>

              {/* Payment Management routes */}
              <Route path="payment-management">
                <Route index element={<ConfirmPayment />} />
                <Route path="confirm" element={<ConfirmPayment />} />
                <Route path="customization" element={<CustomizationPayment />} />
                <Route path="manage-customization" element={<ManageCustomizationPayment />} />
                <Route path="manage" element={<ManagePayment />} />
                <Route path="pay-customized" element={<PayCustomizedBill />} />
                <Route path="pay-student" element={<PayStudentBill />} />
              </Route>

              {/* Payment Method routes */}
              <Route path="payment-method">
                <Route index element={<AddPaymentMethod />} />
                <Route path="add" element={<AddPaymentMethod />} />
              </Route>

              {/* Payment Purpose routes */}
              <Route path="payment-purpose">
                <Route index element={<AddPaymentPurpose />} />
                <Route path="add" element={<AddPaymentPurpose />} />
                <Route path="manage" element={<ManagePayPurpose />} />
              </Route>

              {/* Pin Generator routes */}
              <Route path="pin">
                <Route index element={<GenerateApplicationPin />} />
                <Route path="application" element={<GenerateApplicationPin />} />
                <Route path="result" element={<GenerateResultPin />} />
              </Route>

              {/* Report Card Insights routes */}
              <Route path="report-card" element={<ReportCardInsights />} />

              {/* Result Management routes */}
              <Route path="result">
                <Route index element={<AdminEditClassResult />} />
                <Route path="edit" element={<AdminEditClassResult />} />
                <Route path="manage-team" element={<ManageTeamResults />} />
                <Route path="upload-student" element={<AdminUploadStudentResult />} />
                <Route path="upload-class" element={<AdminUploadClassResult />} />
                <Route path="upload-external-excel" element={<UploadExternalResultExcel />} />
                <Route path="upload-excel" element={<UploadResultExcel />} />
                <Route path="upload-student-external" element={<UploadStudentExternalResult />} />
                <Route path="upload" element={<UploadResult />} />
              </Route>

              {/* New School Library routes */}
              <Route path="library">
                <Route index element={<LibraryAudioBooks />} />
                <Route path="audio" element={<LibraryAudioBooks />} />
                <Route path="textbooks" element={<LibraryTextBooks />} />
                <Route path="video" element={<LibraryVideoBooks />} />
                <Route path="upload" element={<UploadBooks />} />
              </Route>

              {/* Site Link route */}
              <Route path="site-link" element={<SiteLink />} />

              {/* Student routes */}
              <Route path="student">
                <Route index element={<ManageStudent />} />
                <Route path="add" element={<AddStudent />} />
                <Route path="add-excel" element={<AddStudentExcel />} />
                <Route path="group" element={<GroupStudent />} />
                <Route path="manage-application" element={<ManageApplication />} />
                <Route path="manage" element={<ManageStudent />} />
                <Route path="trashed" element={<ManageTrashedStudent />} />
                <Route path="promote" element={<PromoteStudents />} />
                <Route path="view-class" element={<ViewClassStudents />} />
              </Route>

              {/* The School route */}
              <Route path="school" element={<TheSchool />} />

              {/* View Payment Records route */}
              <Route path="payment-records" element={<ViewPaymentRecords />} />
              
              {/* Add inventory routes here */}
              <Route path="inventory">
                <Route path="issues-item" element={<IssuesItem />} />
                <Route path="add-item-stock" element={<AddItemStock />} />
                <Route path="add-item" element={<AddItem />} />
                <Route path="item-category" element={<ItemCategory />} />
                <Route path="item-store" element={<ItemStore />} />
                <Route path="item-supplier" element={<ItemSupplier />} />
              </Route>
            </Route>

            {/* Teacher routes */}
            <Route path="/teacher" element={
              <ProtectedRoute>
                <TeacherLayout />
              </ProtectedRoute>
            }>
              <Route index element={<TeacherDashboard />} />
              
              {/* Exam Management routes */}
              <Route path="exam">
                <Route index element={<TeacherManageExamQuestions />} />
                <Route path="add-assessment" element={<TeacherAddAssessment />} />
                <Route path="manage-assessment" element={<TeacherManageAssessment />} />
                <Route path="manage-exam-questions" element={<TeacherManageExamQuestions />} />
              </Route>
              
              {/* Result Management routes */}
              <Route path="result">
                <Route index element={<TeacherUploadStudentResult />} />
                <Route path="upload-student" element={<TeacherUploadStudentResult />} />
                <Route path="upload-class" element={<TeacherUploadClassResult />} />
                <Route path="edit" element={<TeacherEditClassResult />} />
              </Route>
              
              {/* Lesson Plan routes */}
              <Route path="lesson-plan">
                <Route index element={<ManageLessonPlans />} />
                <Route path="add" element={<AddLessonPlan />} />
                <Route path="manage" element={<ManageLessonPlans />} />
              </Route>
              
              {/* Timetable routes */}
              <Route path="timetable" element={<TeacherTimeTable />} />
              
              {/* Quiz routes */}
              <Route path="quiz">
                <Route index element={<TeacherQuizManagement />} />
                <Route path="add" element={<AddQuiz />} />
                <Route path="manage" element={<TeacherQuizManagement />} />
              </Route>
              
              {/* Assignments routes */}
              <Route path="assignments">
                <Route index element={<TeacherAssignmentsIndex />} />
                <Route path="add" element={<AddAssignment />} />
                <Route path="manage" element={<ManageAssignments />} />
                <Route path="reports" element={<AssignmentReports />} />
              </Route>
              
              {/* Live Classes routes */}
              <Route path="live-classes">
                <Route index element={<LiveClassesIndex />} />
                <Route path="schedule" element={<ScheduleClass />} />
                <Route path="manage" element={<ManageClasses />} />
              </Route>
              
              {/* Teacher Attendance routes */}
              <Route path="attendance">
                <Route index element={<TeacherMyAttendance />} />
                <Route path="my" element={<TeacherMyAttendance />} />
                <Route path="leave" element={<TeacherLeaveManagement />} />
              </Route>
              
              {/* Student Attendance route */}
              <Route path="student-attendance" element={<TeacherStudentAttendance />} />
            </Route>

            {/* Accountant routes */}
            <Route path="/accountant" element={
              <ProtectedRoute>
                <AccountantLayout />
              </ProtectedRoute>
            }>
              <Route index element={<AccountantDashboard />} />
              
              {/* Payment routes */}
              <Route path="payments">
                <Route index element={<ClassPaymentList />} />
                <Route path="class-list" element={<ClassPaymentList />} />
                <Route path="management" element={<AccountantPaymentManagement />} />
                <Route path="methods" element={<PaymentMethods />} />
                <Route path="purpose" element={<PaymentPurpose />} />
                <Route path="records" element={<PaymentRecords />} />
              </Route>
              
              {/* Fee Collection routes */}
              <Route path="fee-collection">
                <Route index element={<CollectFee />} />
                <Route path="collect" element={<CollectFee />} />
                <Route path="due" element={<FeeDue />} />
                <Route path="reports" element={<DueReports />} />
              </Route>
              
              {/* Expense routes */}
              <Route path="expenses">
                <Route index element={<PettyCashManagement />} />
                <Route path="petty-cash" element={<PettyCashManagement />} />
                <Route path="management" element={<ExpenseManagement />} />
              </Route>
              
              {/* Salary Management routes */}
              <Route path="salary">
                <Route index element={<PendingSalaries />} />
                <Route path="pending" element={<PendingSalaries />} />
                <Route path="history" element={<SalaryHistory />} />
              </Route>
              
              {/* Reports routes */}
              <Route path="reports">
                <Route index element={<CollectionReport />} />
                <Route path="collection" element={<CollectionReport />} />
                <Route path="expense" element={<ExpenseReport />} />
                <Route path="balance-sheet" element={<BalanceSheet />} />
                <Route path="revenue" element={<RevenueAnalytics />} />
              </Route>
              
              {/* Settings route */}
              <Route path="settings" element={<div>Settings Page</div>} />
            </Route>

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
