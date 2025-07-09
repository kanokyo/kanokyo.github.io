"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight, Github, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MailForm from "./MailForm";

const Contact = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col" id="contact">
      <Dialog>
        <DialogTrigger>Contact</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="flex justify-around gap-5 text-sm font-mono ">
              <Link href="https://github.com/Ad4cat/" target="_blank">
                <div className="flex space-x-1 group hover:cursor-pointer">
                  <Github />
                  <ChevronRight className="transform group-hover:translate-x-1 transition duration-300" />
                </div>
              </Link>
              <div
                className="flex items-center space-x-1 group hover:cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
              >
                <Mail />
                <ChevronRight
                  className={`
      transform transition duration-300
      ${open ? "rotate-90" : "group-hover:rotate-30"}
    `}
                />
              </div>
            </div>
          </DialogHeader>
          <AnimatePresence initial={false} mode="wait">
            {open && (
              <motion.div
                className="overflow-hidden bg-gray-50 rounded-lg shadow-lg mt-4"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="p-4">
                  <MailForm />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
