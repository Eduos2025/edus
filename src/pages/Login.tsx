
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { toast } from "sonner";
import { Eye, EyeOff, Lock, User, UserRound, BookOpen, Landmark, GraduationCap, KeyRound, ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserRole } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Login form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeRole, setActiveRole] = useState<UserRole>('student');
  
  // Forgot password state
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [isSubmittingReset, setIsSubmittingReset] = useState(false);
  
  // Check if we're accessing from the school management portal URL
  const isSchoolPortal = location.pathname.includes('/school-management/portal');
  
  // Default credentials based on role
  const getDefaultCredentials = (role: UserRole) => {
    switch(role) {
      case 'student':
        return { email: 'anas123@gmail.com', password: '123456' };
      case 'admin':
        return { email: 'stgcommunitydt@gmail.com', password: '9876543' };
      case 'teacher':
        return { email: 'teacher@example.com', password: 'password' };
      case 'accountant':
        return { email: 'amanbhai234@gmail.com', password: '0987654' };
      default:
        return { email: '', password: '' };
    }
  };
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Please enter your email or username");
      return;
    }
    
    if (!password.trim()) {
      toast.error("Please enter your password");
      return;
    }
    
    setIsLoading(true);
    try {
      await login(email, password, activeRole);
      toast.success(`Logged in successfully as ${activeRole}`);
      
      // Navigate based on role
      if (activeRole === 'student') {
        navigate('/student');
      } else if (activeRole === 'admin') {
        navigate('/admin');
      } else if (activeRole === 'teacher') {
        navigate('/teacher');
      } else if (activeRole === 'accountant') {
        navigate('/accountant');
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    
    setIsSubmittingReset(true);
    try {
      // Here we would normally call the API to send a password reset email
      // But for now, just show a success message
      setTimeout(() => {
        toast.success("Password reset email sent", {
          description: "If an account exists with this email, you will receive instructions to reset your password."
        });
        setShowForgotPassword(false);
        setForgotEmail('');
      }, 1500);
    } catch (error) {
      toast.error("Failed to send reset email. Please try again.");
    } finally {
      setIsSubmittingReset(false);
    }
  };

  // Load default credentials when role changes
  React.useEffect(() => {
    const defaultCreds = getDefaultCredentials(activeRole);
    setEmail(defaultCreds.email);
    setPassword(defaultCreds.password);
  }, [activeRole]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Role icons
  const getRoleIcon = (role: UserRole) => {
    switch (role) {
      case 'student':
        return <GraduationCap className="h-5 w-5" />;
      case 'teacher':
        return <BookOpen className="h-5 w-5" />;
      case 'accountant':
        return <Landmark className="h-5 w-5" />;
      case 'admin':
        return <UserRound className="h-5 w-5" />;
      default:
        return <User className="h-5 w-5" />;
    }
  };

  // Render forgot password form
  const renderForgotPasswordForm = () => (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-md"
    >
      <Card className="shadow-lg border-gray-100">
        <CardHeader className="space-y-1">
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setShowForgotPassword(false)}
              className="h-8 w-8"
            >
              <ArrowLeft size={18} />
            </Button>
            <CardTitle className="text-2xl">Reset Password</CardTitle>
          </div>
          <CardDescription>
            Enter your email address and we'll send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
            <motion.div className="space-y-2" variants={itemVariants}>
              <Label htmlFor="forgotEmail">Email</Label>
              <div className="relative">
                <Input
                  id="forgotEmail"
                  type="email"
                  placeholder="Enter your email address"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  disabled={isSubmittingReset}
                  className="pl-10"
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Button 
                type="submit"
                className="w-full bg-eduos-primary hover:bg-eduos-secondary transition-all duration-300"
                disabled={isSubmittingReset}
              >
                {isSubmittingReset ? "Sending..." : "Send Reset Link"}
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );

  // Function to render login form
  const renderLoginForm = () => (
    <form onSubmit={handleLogin} className="space-y-4">
      <motion.div className="space-y-2" variants={itemVariants}>
        <Label htmlFor="email">Email or Username</Label>
        <div className="relative">
          <Input
            id="email"
            type="text"
            placeholder="Enter your email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="pl-10"
          />
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        </div>
      </motion.div>
      
      <motion.div className="space-y-2" variants={itemVariants}>
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="pl-10 pr-10"
          />
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Button 
          type="submit"
          className="w-full bg-eduos-primary hover:bg-eduos-secondary transition-all duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : `Login as ${activeRole.charAt(0).toUpperCase() + activeRole.slice(1)}`}
        </Button>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="text-center mt-4"
      >
        <button 
          type="button" 
          onClick={() => setShowForgotPassword(true)}
          className="text-sm text-blue-600 hover:underline"
        >
          Forgot Password?
        </button>
      </motion.div>
    </form>
  );

  if (showForgotPassword) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-eduos-light to-white p-4">
        {renderForgotPasswordForm()}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-eduos-light to-white p-4">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-md"
      >
        <Card className="rounded-xl shadow-lg border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-eduos-primary to-eduos-secondary py-6 px-8 text-center text-white">
            <motion.h2 
              variants={itemVariants} 
              className="mb-1 text-3xl font-bold"
            >
              EDUOS
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-white/90"
            >
              Educational Operating System
            </motion.p>
            {isSchoolPortal && (
              <motion.div 
                variants={itemVariants}
                className="mt-2 inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium"
              >
                School Management Portal
              </motion.div>
            )}
          </div>
          
          <CardContent className="px-6 pt-6 pb-4">
            {isSchoolPortal ? (
              // Show student login form for school portal
              renderLoginForm()
            ) : (
              // Show login options with tabs
              <Tabs defaultValue="student" onValueChange={(value) => setActiveRole(value as UserRole)}>
                <TabsList className="grid grid-cols-4 w-full mb-6 h-auto">
                  {(['student', 'teacher', 'accountant', 'admin'] as UserRole[]).map((role) => (
                    <TabsTrigger 
                      key={role} 
                      value={role}
                      className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 flex flex-col py-2 px-2 gap-1"
                    >
                      <span className="block">{getRoleIcon(role)}</span>
                      <span className="capitalize text-xs sm:text-sm whitespace-nowrap">{role}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <motion.div variants={containerVariants}>
                  {renderLoginForm()}
                </motion.div>
              </Tabs>
            )}
          </CardContent>
          
          <CardFooter className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-500">
            © 2025 EDUOS. All rights reserved.
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
