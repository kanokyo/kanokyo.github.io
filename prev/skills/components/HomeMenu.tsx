"use client";

import React from "react";
import {
  MovingText,
  MovingTextProvider,
} from "@/app/skills/components/MovingText";
import RandomPlace from "./RandomPlace";

export const HomeMenu = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 目標位置の灰色の文字 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-12 text-gray-300 pointer-events-none">
        <p className="text-8xl font-bold">Portfolio</p>
        <p className="text-4xl">about</p>
        <p className="text-4xl">works</p>
        <p className="text-4xl">skills</p>
      </div>
      <MovingTextProvider>
        {/* ランダム位置に配置する文字 */}
        <div className="absolute inset-0">
          <RandomPlace>
            <div className="font-bold">
              <MovingText target="Portfolio" show />
            </div>
          </RandomPlace>
          <RandomPlace>
            <MovingText target="about" show />
          </RandomPlace>
          <RandomPlace>
            <MovingText target="works" show />
          </RandomPlace>
          <RandomPlace>
            <MovingText target="skills" show />
          </RandomPlace>
        </div>
      </MovingTextProvider>
    </div>
  );
};
