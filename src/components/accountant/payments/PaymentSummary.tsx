
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ClassPaymentSummary {
  [className: string]: { 
    count: number; 
    total: number;
  }
}

interface PaymentSummaryProps {
  paymentsByClass: ClassPaymentSummary;
  totalAmount: number;
  totalClasses: number;
  averageAmount: number;
}

const PaymentSummary: React.FC<PaymentSummaryProps> = ({ 
  paymentsByClass,
  totalAmount,
  totalClasses,
  averageAmount
}) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Class</TableHead>
            <TableHead>Number of Payments</TableHead>
            <TableHead>Total Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(paymentsByClass).map(([className, data]) => (
            <TableRow key={className}>
              <TableCell className="font-medium">{className}</TableCell>
              <TableCell>{data.count}</TableCell>
              <TableCell>₦{data.total.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Total Collections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦{totalAmount.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Total Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalClasses}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Average Amount Per Payment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ₦{averageAmount.toLocaleString(undefined, {
                  maximumFractionDigits: 2
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PaymentSummary;
