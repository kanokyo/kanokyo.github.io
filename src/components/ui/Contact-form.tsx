import React, { useState } from "react";
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
import { Github, Mail } from "lucide-react";

const Form = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Mail className="transform transition-transform duration-300 hover:scale-150" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader></SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

// export default function Contact() {
//   return <div></div>;
// }

export default Form;
