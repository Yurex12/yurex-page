import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from './components/ui/ThemeProvider';

import AppLayout from './components/createdUi/AppLayout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <AppLayout />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
