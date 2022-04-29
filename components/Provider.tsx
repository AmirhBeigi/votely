import { UserProvider } from '../contexts/user';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Toaster } from 'react-hot-toast';
import NextNProgress from 'nextjs-progressbar';
import { BackUrlProvider } from 'contexts/backUrl';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
});

interface PorviderType {
  children: React.ReactNode;
}

const Provider = ({ children }: PorviderType) => (
  <>
    <Toaster
      position="top-center"
      gutter={5}
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          borderRadius: '0.5rem',
          background: '#000',
          color: '#fff',
          lineHeight: '1.7rem',
          fontWeight: '300'
        }
      }}
    />
    <NextNProgress height={6} color="#000" options={{ showSpinner: false }} />
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BackUrlProvider>{children}</BackUrlProvider>
      </UserProvider>
    </QueryClientProvider>
  </>
);

export default Provider;
