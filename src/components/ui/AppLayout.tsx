import { Outlet } from 'react-router-dom';
import Header from './Header';

function AppLayout() {
  return (
    <div className=''>
      <Header />
      <main className='max-w-4xl mx-auto px-16'>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
