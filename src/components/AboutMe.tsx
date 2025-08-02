"use client";

import React from "react";
import Timeline from "./Timeline";
import Profile from "./Profile";
import { motion } from "framer-motion";
import { FadeIn } from "@/lib/variants";

const AboutME = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center z-30" id="about">
      <div className="font-mono mt-10 ">
        <motion.div
          variants={FadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <h1 className="font-bold text-3xl flex justify-center p-10 text-white">
            ABOUT
          </h1>
        </motion.div>
        <motion.div
          variants={FadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 lg:gap-x-5 w-full px-5"
        >
          <div className="w-full lg:w-1/2">
            <Profile />
          </div>
          <div className="w-full lg:w-1/2">
            <Timeline />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutME;
