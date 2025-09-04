import Footer from "../Footer";
import Navbar from "../Navbar";
import FloatingButton from "../FloatingButton"; 
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="layout-main">{children}</main>
      <Footer />
      <FloatingButton /> 
    </div>
  );
};

export default Layout;