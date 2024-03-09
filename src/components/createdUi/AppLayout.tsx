import Header from './Header';

import AddPost from './AddEditPost';

import { Toaster } from 'react-hot-toast';
import Home from '@/components/createdUi/Home';

function AppLayout() {
  return (
    <div className='h-[100dvh]'>
      <Header />
      <main className='container mx-auto px-10'>
        <Home />
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
