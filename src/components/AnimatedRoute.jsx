import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import { AnimatePresence } from "framer-motion";

function AnimatedRoute() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/t-page" element={<Home />} />
        <Route path="/t-page/Contact" element={<Contact />} />
        <Route path="/t-page/About" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoute;
