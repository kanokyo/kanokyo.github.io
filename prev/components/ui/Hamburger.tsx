import React from "react";
import { AlignLeft } from "lucide-react";

// const hamburger = () => {
//   return (
//     <div>
//       <AlignLeft className="transform transition-transform duration-300 hover:scale-150 cursor-pointer" />
//     </div>
//   );
// };

import { useState } from "react";
import { motion } from "framer-motion";

const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  closed: {
    opacity: 0,
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-8 h-0.5 bg-black mb-1"></span>
        <span className="block w-8 h-0.5 bg-black mb-1"></span>
        <span className="block w-8 h-0.5 bg-black"></span>
      </button>

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-0 left-0 w-full h-full bg-gray-800 text-white p-4"
      >
        <ul>
          <li className="mb-4">
            <a href="#" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li className="mb-4">
            <a href="#" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li className="mb-4">
            <a href="#" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li className="mb-4">
            <a href="#" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default HamburgerMenu;

// export default hamburger;
