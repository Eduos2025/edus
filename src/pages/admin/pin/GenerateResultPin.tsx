
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, PlusCircle, Download, Copy, ArrowUpDown } from 'lucide-react';

const GenerateResultPin = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for result pins
  const pins = [
    { id: 1, pin: 'RS98-5432-8761', usedBy: 'Unassigned', session: '2023/2024', date: '2023-12-15' },
    { id: 2, pin: 'RS12-3456-7890', usedBy: 'Jane Smith', session: '2023/2024', date: '2023-12-15' },
    { id: 3, pin: 'RS65-4321-9870', usedBy: 'Unassigned', session: '2023/2024', date: '2023-12-15' },
    { id: 4, pin: 'RS09-8765-4321', usedBy: 'Tom Brown', session: '2023/2024', date: '2023-12-16' },
    { id: 5, pin: 'RS13-5792-4680', usedBy: 'Unassigned', session: '2023/2024', date: '2023-12-16' },
  ];

  const filteredPins = pins.filter(pin => 
    pin.pin.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pin.usedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pin.session.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 p-6 pb-16">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight text-eduos-primary animate-fade-in">
          Generate Result Pins
        </h2>
        <div className="flex gap-3">
          <Button 
            className="bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Copy className="mr-2 h-4 w-4" /> Copy All Pins
          </Button>
          <Button 
            className="bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Download className="mr-2 h-4 w-4" /> Export Pins
          </Button>
          <Button 
            className="bg-eduos-primary hover:bg-eduos-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Generate New Pins
          </Button>
        </div>
      </div>

      <Card className="animate-fade-in delay-100 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-eduos-primary to-eduos-secondary text-white flex flex-row items-center justify-between">
          <CardTitle>Result Pins</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
            <Input 
              className="pl-8 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              placeholder="Search pins..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableCaption>A list of all generated result pins.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <div className="flex items-center">
                    S/N
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center">
                    Pin
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center">
                    Used By
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center">
                    Session
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center">
                    Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPins.map((pin) => (
                <TableRow key={pin.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell>{pin.id}</TableCell>
                  <TableCell className="font-mono font-medium">{pin.pin}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${pin.usedBy === 'Unassigned' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                      {pin.usedBy}
                    </span>
                  </TableCell>
                  <TableCell>{pin.session}</TableCell>
                  <TableCell>{pin.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-between p-4 border-t">
            <div className="flex items-center gap-4">
              <Button size="sm" variant="outline">CSV</Button>
              <Button size="sm" variant="outline">PDF</Button>
              <Button size="sm" variant="outline">Print</Button>
              <Button size="sm" variant="outline">Copy</Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenerateResultPin;
