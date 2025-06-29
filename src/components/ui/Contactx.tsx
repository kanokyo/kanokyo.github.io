import React from "react";
import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Form from "./Contact-form";
import { Separator } from "../../../prev/components/ui/separator";

const Contactx = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">CONTACT</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-around h-5 items-center space-x-4">
          <a href="https://github.com/Ad4cat" target="_blank">
            <Github className="transform transition-transform duration-300 hover:scale-150" />
          </a>
          <Separator orientation="vertical" />
          <Form />
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default Contactx;
