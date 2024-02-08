import { Outlet } from 'react-router-dom';
import Header from './Header';
// import Post from '@/pages/Post';

function AppLayout() {
  return (
    <div>
      <Header />
      <main className='max-w-[1440px] mx-auto px-10'>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
