import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';

type FeildsProps = {
  label: string;
  type: string;
  htmlType: string;
};

function Feild({ label, type, htmlType }: FeildsProps) {
  return (
    <div className='grid grid-cols-4 items-center gap-10'>
      <Label
        className='text-right'
        htmlFor={htmlType}
        style={{ fontWeight: '600' }}
      >
        {label}
      </Label>
      <Input
        type={type}
        defaultValue='@peduarte'
        id={htmlType}
        className='col-span-3'
      />
    </div>
  );
}

export default Feild;
