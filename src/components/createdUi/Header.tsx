import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='bg-white-500 shadow-md w-full'>
      <nav className='max-w-[1440px] mx-auto px-10 flex  items-center justify-between py-4'>
        <Link to='/' className='uppercase text-xl font-bold text-gray-700'>
          YurexPage
        </Link>
        <div className='space-x-5 font-semibold text-gray-600'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/create'>Create</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
