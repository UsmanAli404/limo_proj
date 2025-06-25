import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import { ReservationContextProvider } from '@/contexts/ReservationContext';

export const metadata = {
  title: 'Long Island Limo',
  description: 'Premium limousine services in Long Island, NY',
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
