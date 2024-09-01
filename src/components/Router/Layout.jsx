import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="Layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
