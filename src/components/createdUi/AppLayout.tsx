import { Outlet } from 'react-router-dom';
import Header from './Header';

import AddPost from './AddPost';

import { Toaster } from 'react-hot-toast';

function AppLayout() {
  return (
    <div className='relative h-screen'>
      <Header />
      <main className='max-w-[1440px] mx-auto px-10'>
        <Outlet />
      </main>
      <Toaster
        position='top-center'
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#fff',
            color: '#363636',
          },

          // Default options for specific types
          success: {
            duration: 3000,
          },
        }}
      />
      <AddPost />
    </div>
  );
}

export default AppLayout;
