import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import About from './/pages/About'
const App = () => {

  const location = useLocation();
  const isHome = location.pathname === "/"

  return (
    <>
      <div className={isHome ? "home-page" : ""}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
