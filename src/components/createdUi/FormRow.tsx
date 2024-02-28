import { ReactNode } from 'react';
import { Label } from '../ui/label';

type FormRowProps = {
  label: string;
  error: string | undefined;
  children: ReactNode;
};

function FormRow({ label, error, children }: FormRowProps) {
  return (
    <div className='flex flex-col space-y-1.5'>
      {label && (
        <Label htmlFor={label}>
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </Label>
      )}
      {children}
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  );
}

export default FormRow;
