
import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface AssessmentProgressProps {
  answeredCount: number;
  totalQuestions: number;
  timeRemaining: number;
  progressPercentage: number;
}

const AssessmentProgress: React.FC<AssessmentProgressProps> = ({
  answeredCount,
  totalQuestions,
  timeRemaining,
  progressPercentage
}) => {
  const [timeColor, setTimeColor] = useState<string>("text-blue-500");
  const [isWarning, setIsWarning] = useState<boolean>(false);
  
  // Format time remaining as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  useEffect(() => {
    if (timeRemaining < 300) { // Less than 5 minutes
      setTimeColor("text-red-500");
      setIsWarning(true);
    } else if (timeRemaining < 600) { // Less than 10 minutes
      setTimeColor("text-amber-500");
      setIsWarning(false);
    } else {
      setTimeColor("text-blue-500");
      setIsWarning(false);
    }
  }, [timeRemaining]);

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <div className={`flex items-center gap-2 ${timeColor} font-mono`}>
          <Clock className="h-5 w-5" />
          <motion.span 
            className="font-bold text-lg"
            animate={isWarning ? {
              scale: [1, 1.15, 1],
              transition: { repeat: Infinity, duration: 1.5 }
            } : {}}
          >
            {formatTime(timeRemaining)}
          </motion.span>
          
          {isWarning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full"
            >
              <AlertCircle className="h-3 w-3" /> Time running out!
            </motion.div>
          )}
        </div>
      </div>
      
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Progress 
          value={progressPercentage} 
          className={`h-2 bg-gray-200 ${
            progressPercentage < 40 ? '[&>div]:bg-red-500' :
            progressPercentage < 70 ? '[&>div]:bg-amber-500' :
            '[&>div]:bg-green-500'
          }`}
        />
      </motion.div>
      
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span className="font-medium">{answeredCount} of {totalQuestions} answered</span>
        <span className="font-medium">{Math.round(progressPercentage)}% complete</span>
      </div>
    </>
  );
};

export default AssessmentProgress;
