"use client";

import React from "react";
import { motion } from "framer-motion";

const onRendering = {
  hidden: { y: -100 },
  visible: { y: 0 },
};

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Header = () => {
  return (
    <motion.div
      variants={onRendering}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", duration: 1.5, delay: 1 }}
      className="fixed w-full mx-auto sm:px-10 md:20 flex justify-between items-center p-5 text-sm font-medium z-50 bg-white/90 "
    >
      <div className="flex gap-4 space-x-5 ">
        <motion.button
          whileHover={{ y: -2 }}
          transition={{ duration: 0.05 }}
          className="transition-all duration-300 relative group"
          onClick={() => scrollToSection("about")}
        >
          About
          <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-black to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.button>
        <motion.button
          whileHover={{ y: -2 }}
          transition={{ duration: 0.05 }}
          className="transition-all duration-300 relative group"
          onClick={() => scrollToSection("skills")}
        >
          Skills
          <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r  from-black to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.button>
        <motion.button
          whileHover={{ y: -2 }}
          transition={{ duration: 0.05 }}
          className="transition-all duration-300 relative group"
          onClick={() => scrollToSection("works")}
        >
          Works
          <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r  from-black to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.button>
      </div>
      <motion.button
        whileHover={{ y: -2 }}
        transition={{ duration: 0.05 }}
        className="transition-all duration-300 relative group"
        onClick={() => scrollToSection("contact")}
      >
        Contact
        <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r  from-black to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </motion.button>
    </motion.div>
  );
};

export default Header;
