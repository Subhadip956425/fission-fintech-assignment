import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-950 text-gray-300">
      {/* Glowing gradient background */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-6">
        {/* Brand */}
        <h2 className="text-2xl font-bold tracking-wide">
          Leo9
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            .
          </span>
        </h2>

        {/* Social Icons */}
        <div className="flex gap-8 text-2xl">
          <a
            href="#"
            className="p-3 rounded-full bg-white/10 backdrop-blur hover:scale-110 hover:bg-indigo-500/30 transition-all shadow-lg"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-white/10 backdrop-blur hover:scale-110 hover:bg-pink-500/30 transition-all shadow-lg"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-white/10 backdrop-blur hover:scale-110 hover:bg-indigo-300/30 transition-all shadow-lg"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Leo9 — Built with ❤️ for assignment
        </p>
      </div>
    </footer>
  );
}
