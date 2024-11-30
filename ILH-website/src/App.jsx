import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

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

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
export default App;
