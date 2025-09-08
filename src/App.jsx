import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
const App = () => {

  const location = useLocation();
  const isHome = location.pathname === "/"

  return (
    <>
      <div className={isHome ? "home-page" : ""}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
