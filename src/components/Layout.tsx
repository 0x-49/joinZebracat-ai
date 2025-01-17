import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatWidget from './ChatWidget';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Layout;