import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AutoScroll from "./components/AutosScroll";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AutoScroll />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
