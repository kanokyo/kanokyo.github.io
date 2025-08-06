"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight, CircleAlert, Github, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MailForm from "./MailForm";

const Contact = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col"
      id="contact"
    >
      <Dialog>
        <DialogTrigger>Contact</DialogTrigger>
        <DialogContent
          className={`bg-white/90  ${open ? "rounded-none" : "rounded-none"}`}
        >
          <DialogHeader>
            <div className="flex  justify-around gap-5 text-sm font-mono ">
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
                className="overflow-hidden bg-gray-50 rounded-lg shadow-lg mt-4 max-h-[500px] overflow-y-auto"
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
              >
                <div className="p-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-2">
                      <CircleAlert className="w-5 h-5 text-red-400" />
                      <span className="text-sm text-red-700 font-medium">
                        申し訳ありません。ただいまGMail
                        APIの制限によりメール送信ができません。
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-red-600">
                      お手数ですが、下記メールアドレス宛にご連絡をお願いいたします。
                    </div>
                    <div className="mt-1">
                      <a
                        href="mailto:Hodie.o6435@gmail.com"
                        className="text-sm font-semibold text-blue-500 hover:underline"
                      >
                        Hodie.o6435@gmail.com
                      </a>
                    </div>
                  </div>
                  <MailForm />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default Contact;
