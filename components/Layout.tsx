import { motion } from "framer-motion";
import Heeader from "./organisms/Header";
import NavigationBar from "./organisms/NavigationBar";

type LayoutProps = {
  shouldNotShowNavigationBar?: boolean;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout: React.FC<LayoutProps> = ({ children, shouldNotShowNavigationBar }) => (
  <div className="container mx-auto flex flex-col h-screen">
    <Heeader />
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
      className="flex-1 p-8 pt-1 flex flex-col overflow-auto"
    >
      {children}
    </motion.div>
    {!shouldNotShowNavigationBar && <NavigationBar />}
  </div>
);

export default Layout;
