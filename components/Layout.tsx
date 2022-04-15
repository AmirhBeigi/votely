import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useGoogleLogin } from '../apis/auth/google/hook';
import Heeader from './organisms/Header';
import NavigationBar from './organisms/NavigationBar';

type LayoutProps = {
  children: React.ReactNode;
  shouldNotShowNavigationBar?: boolean;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
};

const Layout: React.FC<LayoutProps> = ({ children, shouldNotShowNavigationBar }) => {
  const googleLogin = useGoogleLogin();

  const handlLoginGoogleSuccess = async (data: any) => {
    try {
      await googleLogin.mutateAsync({
        access_token: data.credential
      });
    } catch (e) {}
  };

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '',
        callback: handlLoginGoogleSuccess
      });
    }
  }, []);

  return (
    <div className="container mx-auto flex flex-col h-screen">
      <Heeader />
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        className="flex-1 p-8 pt-1 flex flex-col overflow-auto scrollbar-hide pt-4"
      >
        {children}
      </motion.div>
      {!shouldNotShowNavigationBar && <NavigationBar />}
    </div>
  );
};

export default Layout;
