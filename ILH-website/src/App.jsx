import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import LoadingPage from "./components/LoadingPages";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AutoScroll from "./components/AutosScroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import SingleBusiness from "./pages/SingleBusiness";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <MainApp
        loading={loading}
        setLoading={setLoading}
        progress={progress}
        setProgress={setProgress}
      />
    </BrowserRouter>
  );
};

// The component wrapped inside <BrowserRouter>
const MainApp = ({ loading, setLoading, progress, setProgress }) => {
  const location = useLocation();

  useEffect(() => {
    // Trigger loading on route change
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [location, setLoading]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      {/* Loading Bar */}
      <LoadingBar
        color="#ca0000"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      {/* Header */}
      <Header />

      {/* Scroll-To-Top Button */}
      <ScrollToTop />

      {/* Automatic Scroll Management */}
      <AutoScroll />

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-division" element={<Business />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/single-business/:businessId"
          element={<SingleBusiness />}
        />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
