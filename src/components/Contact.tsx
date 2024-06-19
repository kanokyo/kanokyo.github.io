import React from "react";
import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Form from "./ui/Contact-form";
import { Separator } from "./ui/separator";

const Contact = () => {
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

export default Contact;
