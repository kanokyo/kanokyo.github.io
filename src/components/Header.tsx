"use client";

import React from "react";
import Profile from "../components/Profile";
import Products from "../components/Products";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { Separator } from "./ui/separator";
import Contacts from "./ui/Contact-form";
import Hamburger from "./Menuber";
import Home from "./Home";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Setting from "./Setting";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-30 p-10 bg-gray-100 text-2xl">
        <div className="flex h-5 items-center space-x-4">
          <p></p>
          <Hamburger />
          <p></p>
        </div>
        <Home />
        <div className="flex h-5 items-center space-x-4">
          <Setting />
          <p></p>
          <Separator orientation="vertical" />
          <Contact />
        </div>
      </div>
      <div className="flex h-5 items-center space-x-4 text-sm">
        <Profile />
        <Products />
        <Skills />
      </div>
    </div>
  );
};

export default Header;
