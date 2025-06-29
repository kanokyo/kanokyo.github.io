"use client";

import React from "react";
import Skills from "./Skills";
import Contact from "../../src/components/ui/Contactx";
import Home from "./ui/House";
import Setting from "./Setting";
import About from "./About";
import Works from "./Works";
import HamburgerMenu from "./ui/Hamburger";

const Header = () => {
  return (
    <div className="h-30 p-5 items-center bg-gray-100">
      <div className="flex md:flex-row justify-between items-center text-2xl">
        {/* スマホサイズで表示 */}
        <div className="block md:hidden">
          <HamburgerMenu />
        </div>
        {/* 中央に配置 */}
        <div className="flex justify-center items-center flex-1 md:order-2">
          <Home />
        </div>
        {/* スマホサイズで非表示 */}
        <div className="hidden md:flex justify-between items-center space-x-4 md:order-1">
          <a href="#about">
            <About />
          </a>
          <a href="#works">
            <Works />
          </a>
          <a href="#skills">
            <Skills />
          </a>
        </div>
        <div className="flex justify-between items-center space-x-4 md:order-3">
          <p></p>
          <Setting />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Header;
