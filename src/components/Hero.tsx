"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen z-30">
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
          duration: 2,
          delay: 0.3,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="font-ericaOne text-4xl text-white text-center"
      >
        WelCome to my PortFolio
      </motion.div>
    </div>
  );
};

export default Hero;
