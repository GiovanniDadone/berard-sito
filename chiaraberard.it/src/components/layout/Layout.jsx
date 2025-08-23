import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
