
import React from 'react';
import { Control } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { AssignmentFormValues } from './AssignmentForm';

interface AssignmentStatusToggleProps {
  control: Control<AssignmentFormValues>;
}

export const AssignmentStatusToggle: React.FC<AssignmentStatusToggleProps> = ({ control }) => {
  return (
    <div className="flex items-center space-x-2">
      <FormField
        control={control}
        name="status"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center space-x-3 space-y-0">
            <FormControl>
              <Switch
                checked={field.value === 'active'}
                onCheckedChange={(checked) => 
                  field.onChange(checked ? 'active' : 'inactive')
                }
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>Active</FormLabel>
              <FormDescription>
                Make this assignment visible to students
              </FormDescription>
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};
