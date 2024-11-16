import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AutoScroll from "./components/AutosScroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AutoScroll />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-division" element={<Business />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
