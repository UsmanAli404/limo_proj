import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import { ReservationContextProvider } from '@/contexts/ReservationContext';

export const metadata = {
  title: 'LIMOO',
  description: 'Your car rental platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReservationContextProvider>
          <Header />
          {children}
          <Footer />
          <BackToTopButton />
        </ReservationContextProvider>
      </body>
    </html>
  );
}
