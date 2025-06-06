
import React from 'react';
import DataTable from '@/components/DataTable';
import { ResultChecker } from '@/types';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

const columns = [
  { key: 'id', header: '#', sortable: true },
  { key: 'resultClass', header: 'Result Class', sortable: true },
  { key: 'resultTerms', header: 'Result Terms', sortable: true },
  { key: 'session', header: 'Session', sortable: true },
  { key: 'resultChecker', header: 'Result Checker', sortable: true },
];

// Sample data - in a real app this would come from an API
const sampleResults: ResultChecker[] = [
  // Empty array for now as specified in the requirements
];

const ReprintResult: React.FC = () => {
  const handlePrintResult = (id: string) => {
    console.log('Printing result:', id);
  };
  
  const actionColumn = (item: ResultChecker) => (
    <Button 
      size="sm" 
      variant="outline"
      onClick={() => handlePrintResult(item.id)}
      className="flex items-center gap-1"
    >
      <Printer size={16} />
      Print
    </Button>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reprint Checker Result</h1>
      </div>
      
      <DataTable columns={columns} data={sampleResults} actionColumn={actionColumn} />
    </div>
  );
};

export default ReprintResult;
