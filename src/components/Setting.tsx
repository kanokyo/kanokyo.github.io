import React from "react";
import { Settings } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CursorTracker from "./ui/CursorTracker";

const Setting = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Settings className="transform transition-transform duration-300 hover:scale-150" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>ToggleMode</DropdownMenuItem>
        <DropdownMenuItem>
          <CursorTracker />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Setting;
