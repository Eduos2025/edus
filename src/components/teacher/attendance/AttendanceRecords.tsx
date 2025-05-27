
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Calendar, CalendarDays } from 'lucide-react';
import { TeacherAttendance } from '@/types/teacher';

interface AttendanceRecordsProps {
  attendanceRecords: TeacherAttendance[];
  month: string;
  setMonth: (month: string) => void;
}

export const AttendanceRecords: React.FC<AttendanceRecordsProps> = ({ 
  attendanceRecords, 
  month, 
  setMonth 
}) => {
  // Format the date string
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  // Helper function for attendance status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'present':
        return <Badge className="bg-green-500">Present</Badge>;
      case 'absent':
        return <Badge variant="destructive">Absent</Badge>;
      case 'late':
        return <Badge className="bg-amber-500">Late</Badge>;
      case 'leave':
        return <Badge variant="outline" className="border-blue-500 text-blue-500">On Leave</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <Card className="lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Attendance Records</CardTitle>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input 
            type="month" 
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="pl-10 w-[160px]"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
                <TableHead>Remarks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <CalendarDays size={14} className="text-gray-400" />
                      <span>{formatDate(record.date)}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(record.status)}</TableCell>
                  <TableCell>{record.checkInTime || '—'}</TableCell>
                  <TableCell>{record.checkOutTime || '—'}</TableCell>
                  <TableCell>{record.reason || '—'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
