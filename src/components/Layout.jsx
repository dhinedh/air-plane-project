import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PageWrapper from './PageWrapper';
import CustomCursor from './CustomCursor';
import ScrollProgress from './ScrollProgress';
import AiChatWidget from './AiChatWidget';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main className="flex-grow pt-20 overflow-hidden">
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </main>
      <Footer />
      <AiChatWidget />
    </div>
  );
};

export default Layout;
