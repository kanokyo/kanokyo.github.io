import React from "react";
import { motion } from "framer-motion";

const UnderLine = () => {
  return (
    <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-white to-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  );
};

export default UnderLine;
