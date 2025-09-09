import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800 overflow-hidden">
      {/* Animated gradient blobs in background */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl top-10 left-10"
        animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl bottom-10 right-10"
        animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Floating images */}
      <motion.img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=600&q=80"
        alt="Creative Design"
        className="absolute w-40 h-40 rounded-full object-cover top-28 left-16 shadow-lg"
        animate={{ y: [0, -25, 0], rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <motion.img
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?fit=crop&w=700&q=80"
        alt="Innovation"
        className="absolute w-56 h-56 rounded-full object-cover bottom-28 right-16 shadow-lg"
        animate={{ y: [0, 35, 0], rotate: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          We craft{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            immersive experiences
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Web, product, and motion design powered by creativity, technology, and
          strategy — building digital experiences that captivate.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#work"
            className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-lg transition"
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="mb-2">Scroll</span>
        <div className="w-1 h-6 bg-white rounded-full"></div>
      </motion.div>
    </section>
  );
}
