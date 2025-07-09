"use client";

import React from "react";
import { motion } from "framer-motion";
import Contact from "./Contact";
import { Code, FolderOpen, Meh, MessageCircle, Smile } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

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
      className="fixed w-full mx-auto sm:px-10 md:20 flex justify-center space-x-3 sm:justify-between items-center p-5 text-sm font-medium z-50 bg-transparent   text-gray-300"
    >
      <div className="flex space-x-3 sm:gap-4 sm:space-x-5">
        <motion.button
          whileHover={{ y: -2 }}
          transition={{ duration: 0.05 }}
          className="transition-all duration-300 relative flex items-center space-x-1 group"
          onClick={() => scrollToSection("about")}
        >
          <div className="group relative inline-flex items-center justify-center w-4 h-4">
            <Meh
              size={16}
              className="absolute inset-0 transition-opacity duration-150 opacity-100 group-hover:opacity-0"
            />
            <Smile
              size={16}
              className="absolute inset-0 transition-opacity duration-150 opacity-0 group-hover:opacity-100"
            />
          </div>

          <span>About</span>
          <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-black to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.button>
        <motion.button
          whileHover={{ y: -2 }}
          transition={{ duration: 0.05 }}
          className="transition-all duration-300 relative group flex items-center space-x-1"
          onClick={() => scrollToSection("skills")}
        >
          <Code size={16} />
          <span>Skills</span>
          <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r  from-black to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.button>
        <motion.button
          whileHover={{ y: -2 }}
          transition={{ duration: 0.05 }}
          className="transition-all duration-300 relative group flex items-center space-x-1"
          onClick={() => scrollToSection("works")}
        >
          <FolderOpen size={16} />
          <span>Works</span>
          <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r  from-black to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.button>
      </div>
      <motion.button
        whileHover={{ y: -2 }}
        transition={{ duration: 0.05 }}
        className="transition-all duration-300 relative group flex items-center space-x-1 "
      >
        <MessageCircle size={16} />
        <Contact />
        <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r  from-black to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </motion.button>
    </motion.div>
  );
};

export default Header;
