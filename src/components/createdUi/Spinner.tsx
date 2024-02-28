import { cn } from '@/lib/utils';
type SpinnerProps = {
  className?: string | undefined;
};

function Spinner({ className }: SpinnerProps) {
  const styles = cn(
    'border-2 border-t-[#202124]  border-l-transparent border-r-transparent border-b-transparent',
    className
  );
  return (
    <div className='lds-ring'>
      <div className={styles}></div>
      <div className={styles}></div>
      <div className={styles}></div>
      <div className={styles}></div>
    </div>
  );
}

export default Spinner;
