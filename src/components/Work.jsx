import React from "react";
import { motion } from "framer-motion";

function Work() {
  const items = [
    {
      title: "Project 1",
      desc: "A short description of the project.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=800&q=80",
    },
    {
      title: "Project 2",
      desc: "A short description of the project.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=800&q=80",
    },
    {
      title: "Project 3",
      desc: "A short description of the project.",
      img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?fit=crop&w=800&q=80",
    },
    {
      title: "Project 4",
      desc: "A short description of the project.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&w=800&q=80",
    },
    {
      title: "Project 5",
      desc: "A short description of the project.",
      img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?fit=crop&w=800&q=80",
    },
    {
      title: "Project 6",
      desc: "A short description of the project.",
      img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?fit=crop&w=800&q=80",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="work" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ amount: 0.3 }}
        >
          Our Work
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-lg hover:shadow-indigo-500/40 transition"
            >
              <div className="h-52 w-full overflow-hidden">
                <motion.img
                  src={it.img}
                  alt={it.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="p-6 relative z-10">
                <h3 className="font-semibold text-xl text-white drop-shadow-md group-hover:text-indigo-300 transition">
                  {it.title}
                </h3>
                <p className="text-gray-300 mt-2">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
