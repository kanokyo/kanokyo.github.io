import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { Separator } from "./separator";

const contact = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex p-4 w-fit items-center gap-2 space-x-2 ">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="https://github.com/Ad4cat/"
                      className="hover:cursor-pointer"
                      target="_blank"
                    >
                      <Github className="w-5 h-5 aspect-square hover:bg-gray-300" />
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <Separator orientation="vertical" className="h-6 w-px" />
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="mailto:ad4cat@gmail.com"
                      className="hover:cursor-pointer"
                    >
                      <Mail className="w-5 h-5 aspect-square hover:bg-gray-300" />
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default contact;
