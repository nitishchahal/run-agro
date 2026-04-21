import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLoader from "./components/AppLoader";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Services from "./pages/Services";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    // Show loader on initial app load for 2 seconds
    const initialLoadTimer = setTimeout(() => {
      setAppLoaded(true);
    }, 2000);

    return () => clearTimeout(initialLoadTimer);
  }, []);

  if (!appLoaded) {
    return <AppLoader duration={2000} />;
  }

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<ContactPage />} />

          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;