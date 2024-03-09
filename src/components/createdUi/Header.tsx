import { ModeToggle } from '../ui/ModeToggle';

function Header() {
  return (
    <div className='shadow shadow-foreground/20  w-full fixed top-0 left-0 z-50 bg-background text-foreground p-4'>
      <nav className='max-w-[1440px] mx-auto px-10 flex  items-center justify-between '>
        <h2 className='uppercase text-lg font-bold text-foreground/85 sm:text-xl'>
          YurexPage
        </h2>
        <ModeToggle />
      </nav>
    </div>
  );
}

export default Header;
