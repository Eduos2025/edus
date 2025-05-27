
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '../../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Printer, Download, Save } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const PrintForm: React.FC = () => {
  const { user } = useAuth();
  const [isPrinting, setIsPrinting] = useState(false);
  
  // In a real app, this data would come from an API
  const formData = {
    studentName: user?.name || 'John Doe',
    admissionNumber: 'STU-2023-001',
    level: 'Primary Level',
    class: 'Primary One',
    gender: 'Male',
    dateOfBirth: '15-05-2016',
    address: '123 Education St., Lagos',
    parentName: 'Mr. & Mrs. Doe',
    parentContact: '08012345678',
    parentEmail: 'parent@example.com',
  };

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 300);
  };
  
  const handleDownload = () => {
    toast.success("Form downloaded successfully!");
    // In a real app, this would generate and download a PDF
  };
  
  const handleSave = () => {
    toast.success("Form saved successfully!");
    // In a real app, this would save the form data
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold">Print Student Information Form</h1>
        
        <div className="flex gap-2 flex-wrap md:flex-nowrap">
          <Button 
            onClick={handlePrint} 
            className="bg-eduos-primary hover:bg-eduos-secondary transition-all duration-300"
            disabled={isPrinting}
          >
            <Printer size={16} className="mr-2" />
            {isPrinting ? 'Printing...' : 'Print'}
          </Button>
          
          <Button 
            variant="outline" 
            onClick={handleDownload}
            className="border-eduos-primary text-eduos-primary hover:bg-eduos-light transition-all duration-300"
          >
            <Download size={16} className="mr-2" />
            Download PDF
          </Button>
          
          <Button 
            variant="secondary" 
            onClick={handleSave}
            className="transition-all duration-300"
          >
            <Save size={16} className="mr-2" />
            Save Form
          </Button>
        </div>
      </div>
      
      <Card className="p-6 max-w-3xl mx-auto border-2 border-gray-200 shadow-lg print:shadow-none" id="printable-form">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-eduos-primary">EDUOS</h2>
          <p className="text-lg text-gray-600 mt-1">Student Information Form</p>
        </div>
        
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-1">Personal Information</h3>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">{formData.studentName}</p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-sm text-gray-500">Admission Number</p>
              <p className="font-medium">{formData.admissionNumber}</p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-sm text-gray-500">Class</p>
              <p className="font-medium">{formData.class}</p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-sm text-gray-500">Level</p>
              <p className="font-medium">{formData.level}</p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-sm text-gray-500">Gender</p>
              <p className="font-medium">{formData.gender}</p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-sm text-gray-500">Date of Birth</p>
              <p className="font-medium">{formData.dateOfBirth}</p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium">{formData.address}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-1">Parent/Guardian Information</h3>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-sm text-gray-500">Parent/Guardian Name</p>
              <p className="font-medium">{formData.parentName}</p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-sm text-gray-500">Contact Number</p>
              <p className="font-medium">{formData.parentContact}</p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="font-medium">{formData.parentEmail}</p>
            </div>
            
            <div className="mt-8">
              <div className="border-b border-black pt-10"></div>
              <p className="text-sm mt-1">Parent/Guardian Signature</p>
            </div>
          </div>
        </CardContent>
        
        <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
          <p>This form is generated by the EDUOS Education Portal.</p>
          <p>Date Generated: {new Date().toLocaleDateString()}</p>
        </div>
      </Card>

      {/* Print-only instructions */}
      <div className="hidden print:block mt-8 text-center text-sm">
        <p>This document was printed from the EDUOS Portal on {new Date().toLocaleDateString()}</p>
      </div>
    </motion.div>
  );
};

export default PrintForm;
