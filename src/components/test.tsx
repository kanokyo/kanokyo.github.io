"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, FolderOpen, Icon, MessageCircle, User } from "lucide-react";

const Test = () => {
  return (
    <div className="hidden md:flex space-x-8">
      <button className="flex transition-all duration-300 relative group">
        <User size={16} />
        <span className="font-medium">Profile</span>
        <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-white to-gray-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default Test;
