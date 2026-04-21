import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import ScrollingBar from "../components/ScrollingBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ScrollButton from "../components/ScrollButton";

function MainLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <div className="hidden md:block">
        <TopBar />
      </div>
      <Navbar />
      <div className="hidden md:block">
        <ScrollingBar />
      </div>
      {children}
      <Footer />
      {/* <ScrollButton /> */}
    </>
  );
}

export default MainLayout;