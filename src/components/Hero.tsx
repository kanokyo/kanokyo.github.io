"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen z-30">
      <motion.div className="container mx-auto grid grid-cols-2 grid-rows-4 gap-4 sm:grid-cols-3 sm:grid-rows-2 max-h-screen py-16 mt-10 sm:mt-0 sm:py-0 px-4 lg:py-24 lg:gap-24 lg:grid-cols-4"></motion.div>
    </div>
  );
};

export default Hero;
