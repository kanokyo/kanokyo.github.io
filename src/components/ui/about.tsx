import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "./button";

const about = () => {
  return (
    <div>
      <button type="button" className="text-sm font-medium">
        About
      </button>
    </div>
  );
};

export default about;
