
import React from 'react';
import DataTable from '@/components/DataTable';
import type { PaymentRecord as PaymentRecordType } from '@/types';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const columns = [
  { key: 'id', header: '#', sortable: true },
  { key: 'transactionId', header: 'Transaction ID', sortable: true },
  { key: 'terms', header: 'Terms', sortable: true },
  { key: 'amount', header: 'Amount', sortable: true },
  { key: 'status', header: 'Status', sortable: true },
  { key: 'date', header: 'Date of Payment', sortable: true },
];

// Sample data - in a real app this would come from an API
const samplePayments: PaymentRecordType[] = [
  // Empty array for now as specified in the requirements
];

const PaymentRecord: React.FC = () => {
  const handleViewReceipt = (id: string) => {
    console.log('Viewing receipt for:', id);
  };
  
  const actionColumn = (item: PaymentRecordType) => (
    <Button 
      size="sm" 
      variant="ghost" 
      onClick={() => handleViewReceipt(item.id)}
      className="text-eduos-primary hover:text-eduos-secondary hover:bg-eduos-light"
    >
      <FileText size={16} className="mr-1" />
      View
    </Button>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Payment Record</h1>
      </div>
      
      <DataTable columns={columns} data={samplePayments} actionColumn={actionColumn} />
    </div>
  );
};

export default PaymentRecord;
