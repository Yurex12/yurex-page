type ErrorMessageProps = {
  text: string | undefined;
};

export default function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <div className='h-screen flex items-center justify-center'>
      <aside className='w-11/12 border-2  border-red-500 p-4 rounded-sm text-center'>
        <h1 className='text-foreground text-2xl'>An error occurred!</h1>
        <p className='text-foreground/60'>{text}</p>
      </aside>
    </div>
  );
}
