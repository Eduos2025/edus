
import React from 'react';
import { Control } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { AssignmentFormValues } from './AssignmentForm';

interface AssignmentDetailsSectionProps {
  control: Control<AssignmentFormValues>;
}

export const AssignmentDetailsSection: React.FC<AssignmentDetailsSectionProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Assignment Title</FormLabel>
          <FormControl>
            <Input placeholder="Enter assignment title" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
