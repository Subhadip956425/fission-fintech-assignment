import React from "react";
import { motion } from "framer-motion";

function Expertise() {
  const skills = [
    { name: "Product Design", color: "from-pink-500 to-rose-400", icon: "🎨" },
    { name: "Branding", color: "from-indigo-500 to-purple-400", icon: "✨" },
    {
      name: "Frontend Engineering",
      color: "from-green-500 to-emerald-400",
      icon: "⚡",
    },
    {
      name: "Motion Design",
      color: "from-yellow-500 to-orange-400",
      icon: "🎬",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="expertise"
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ amount: 0.3 }}
        >
          Expertise
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto mb-16 text-gray-200 text-lg md:text-xl leading-relaxed"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={1}
          viewport={{ amount: 0.3 }}
        >
          We combine{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent font-semibold">
            strategic thinking
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
            technical excellence
          </span>{" "}
          to deliver polished products that truly{" "}
          <span className="text-indigo-300 font-semibold">convert</span>.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className={`p-6 rounded-2xl text-center text-white bg-gradient-to-br ${s.color} shadow-xl relative group overflow-hidden`}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={i}
              viewport={{ amount: 0.3 }}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="text-5xl mb-3 drop-shadow-lg">{s.icon}</div>
              <h3 className="font-semibold text-lg drop-shadow-md">{s.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
