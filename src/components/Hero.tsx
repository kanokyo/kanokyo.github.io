"use client";
import React from "react";
import { images } from "./Imgs";
import Image from "next/image";
import { motion } from "framer-motion";

// シャッフル関数
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Hero = () => {
  const delayStep = 0.5;
  const desplayIMGs = shuffle(images).slice(0, 8);
  return (
    <div className="flex items-center justify-center h-screen ">
      <motion.div className="container mx-auto grid grid-cols-2 grid-rows-4 gap-4 sm:grid-cols-3 sm:grid-rows-2 max-h-screen py-16 mt-10 sm:mt-0 sm:py-0 px-4 lg:py-24 lg:gap-24 lg:grid-cols-4">
        {desplayIMGs.map((img, idx) => (
          <motion.div
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 2,
              delay: (idx + 1) * delayStep,
            }}
            key={idx}
            className={`
            relative w-full h-auto
            ${idx > 5 ? "block sm:hidden lg:block" : ""}
          `}
          >
            <Image
              key={idx}
              src={img}
              height={img.height}
              width={img.width}
              alt={`${img}`}
              className={`
                object-cover w-fit h-full mx-auto

              `}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
