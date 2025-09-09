import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Our Work", href: "#work" },
    { name: "Expertise", href: "#expertise" },
    { name: "Media", href: "#media" },
    { name: "Get in touch", href: "#contact", button: true },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent"
        >
          Leo9
        </a>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, idx) =>
            link.button ? (
              <motion.a
                key={link.name}
                href={link.href}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ) : (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative font-medium ${
                  scrolled ? "text-gray-200" : "text-white"
                }`}
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            )
          )}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
            className="p-2 text-gray-100 hover:text-pink-400 transition"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              className="stroke-current"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 6h18M3 12h18M3 18h18"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md"
          >
            <div className="px-6 pb-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-200 hover:text-pink-400 transition py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
