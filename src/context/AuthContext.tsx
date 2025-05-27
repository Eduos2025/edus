
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Check for existing user session on mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('eduos-user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        // Validate the stored user data structure
        if (parsedUser && parsedUser.id && parsedUser.role) {
          setUser(parsedUser);
        } else {
          // Invalid user data, clear it
          localStorage.removeItem('eduos-user');
        }
      }
    } catch (error) {
      console.error('Failed to parse stored user data', error);
      localStorage.removeItem('eduos-user');
    } finally {
      setIsInitialized(true);
    }
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    if (!['student', 'admin', 'teacher', 'accountant'].includes(role)) {
      throw new Error('Invalid role. Only student, admin, teacher, and accountant roles are supported.');
    }

    // Define valid credentials for each role
    const validCredentials = {
      student: [
        { email: 'anas123@gmail.com', password: '123456' },
        { email: 'nikmishra193@gmail.com', password: '654321' }
      ],
      admin: [
        { email: 'stgcommunitydt@gmail.com', password: '9876543' }
      ],
      accountant: [
        { email: 'amanbhai234@gmail.com', password: '0987654' }
      ],
      teacher: [
        { email: 'teacher@example.com', password: 'password' }
      ]
    };

    // Check if provided credentials match any valid credentials for the selected role
    const isValidCredential = validCredentials[role].some(
      cred => cred.email === email && cred.password === password
    );

    if (!isValidCredential) {
      throw new Error('Invalid credentials for the selected role.');
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Set user data based on role and provided email
    const userData: User = {
      id: '1',
      name: role === 'student' 
        ? (email === 'anas123@gmail.com' ? 'Anas Khan' : 'Nikhil Mishra')
        : role === 'teacher' 
          ? 'Sarah Johnson' 
          : role === 'accountant'
            ? 'Robert Miller'
            : 'Admin User',
      email,
      role,
      profilePicture: role === 'student' 
        ? '/placeholder.svg' 
        : role === 'teacher'
          ? '/teacher-avatar.svg'
          : role === 'accountant'
            ? '/accountant-avatar.svg'
            : undefined
    };
    
    setUser(userData);
    localStorage.setItem('eduos-user', JSON.stringify(userData));
    
    return Promise.resolve();
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('eduos-user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
