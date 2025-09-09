import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Expertise from "./components/Expertise";
import Work from "./components/Work";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Media from "./components/Media";
import Footer from "./components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function App() {
  return (
    <div className="text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Expertise />
        <Media />
        <Footer />
      </main>
    </div>
  );
}
