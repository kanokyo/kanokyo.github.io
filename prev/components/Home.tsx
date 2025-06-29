import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Home_works from "./ui/home_works";

const HomeMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-8 ">
      <Button
        variant="link"
        className="text-6xl font-bold mb-4 transform transition-transform duration-300 hover:scale-150"
      >
        Portfolio
      </Button>
      <div className="flex flex-col items-center justify-center space-y-3 ">
        <a href="/about">
          <Button
            variant="link"
            className="text-lg font-medium text-gray-700 hover:text-gray-900 transform transition-transform duration-300 hover:scale-150"
          >
            about
          </Button>
        </a>
        <Home_works />
      </div>
    </div>
  );
};

export default HomeMenu;
