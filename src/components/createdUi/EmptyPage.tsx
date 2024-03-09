function EmptyPage() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <aside className='w-11/12 sm:w-[500px] mx-auto border-2  border-green-500/50 p-4 rounded-sm text-center'>
        <h1 className='text-foreground text-xl font-medium'>
          No post to Display
        </h1>
        <p className='text-sm mt-2'>Kindly add a post</p>
      </aside>
    </div>
  );
}

export default EmptyPage;
