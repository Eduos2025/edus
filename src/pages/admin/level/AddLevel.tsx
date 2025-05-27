
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AddLevel = () => {
  return (
    <div className="space-y-4 sm:space-y-6 p-3 sm:p-4 md:p-6 pb-12 md:pb-16">
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-eduos-primary animate-fade-in leading-tight">
          Add Level
        </h2>
      </div>

      <Card className="animate-fade-in delay-100 max-w-lg mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-eduos-primary to-eduos-secondary text-white p-4 md:p-6 text-center sm:text-left">
          <CardTitle className="text-lg sm:text-xl md:text-2xl">Level Information</CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6 space-y-5 md:space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="levelName" className="text-sm sm:text-base block text-center sm:text-left">Enter Level Name</Label>
              <Input 
                id="levelName" 
                placeholder="e.g. Primary, Secondary, etc." 
                className="transition-all duration-300 focus:border-eduos-primary text-sm sm:text-base py-2"
              />
            </div>
          </div>
          
          <Button 
            className="w-full bg-eduos-primary hover:bg-eduos-secondary transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg text-sm sm:text-base py-2 sm:py-2.5 mt-4"
          >
            Add Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddLevel;
