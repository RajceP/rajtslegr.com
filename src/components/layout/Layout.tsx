import { ReactNode, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import Footer from '@/components/layout/Footer';
import MobileNavigation from '@/components/navigation/MobileNavigation';
import NavBar from '@/components/navigation/NavBar';
import { useScrollBlock } from '@/hooks/useScrollBlock';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const router = useRouter();

  const mobileNavigationHandler = (): void => {
    if (showMobileNavigation) {
      setShowMobileNavigation(false);
      allowScroll();
    } else {
      window.scrollTo({ top: 0 });
      setShowMobileNavigation(true);
      blockScroll();
    }
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      setShowMobileNavigation(false);
      allowScroll();
    });
  }, [allowScroll, router.events]);

  return (
    <>
      <NavBar
        showMobileNavigation={showMobileNavigation}
        handleClick={mobileNavigationHandler}
      />
      {showMobileNavigation && <MobileNavigation />}
      <div className="flex-auto px-4 my-8 mx-auto max-w-4xl md:my-12">
        {children}
      </div>
      {!showMobileNavigation && <Footer />}
    </>
  );
};

export default Layout;
