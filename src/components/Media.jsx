import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508780709619-79562169bc64?fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?fit=crop&w=800&q=80",
];

export default function Media() {
  return (
    <section id="media" className="py-24 bg-gray-900 relative overflow-hidden">
      <video
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Media Showcase
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="h-56 w-full overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <img
                src={src}
                alt={`Project ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
