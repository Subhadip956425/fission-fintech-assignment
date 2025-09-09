import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-900 to-indigo-800 overflow-hidden">
      <motion.img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=600&q=80"
        alt="Creative Design"
        className="absolute w-40 h-40 rounded-full object-cover top-20 left-10 shadow-lg"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <motion.img
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?fit=crop&w=700&q=80"
        alt="Innovation"
        className="absolute w-60 h-60 rounded-full object-cover bottom-20 right-10 shadow-lg"
        animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          We create{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            immersive experiences
          </span>
        </motion.h1>
        <motion.p
          className="mt-6 text-gray-100 text-lg md:text-xl max-w-xl mx-auto drop-shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Web, product, and motion design powered by creativity and technical
          excellence.
        </motion.p>
      </div>
    </section>
  );
}
