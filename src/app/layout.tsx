import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next';
import { ReduxProvider } from '@/redux/Provider';
import { ToastContainer } from 'react-toastify';
import { Lato } from 'next/font/google';
import Header from './components/Header';
import AuthenticationModal from './authentication/authenticationModals/AuthenticationModal';

// const abel = Abel({ weight: '400', subsets: ['latin'] });
const lato = Lato({ weight: ['300', '400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CodeClan',
  description: 'A better paired programming experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <html lang='en'>
        <body className={`${lato.className} bg-grey-900 text-grey-100 transition-all duration-500 ease-in-out`} style={{ paddingTop: '3.5rem' }}>
          <Header />
          {children}
          <ToastContainer />
          <AuthenticationModal />
        </body>
      </html>
    </ReduxProvider>
  );
}
