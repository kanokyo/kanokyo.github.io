"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, ChevronRight, Divide, Github, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Contact = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="min-h-screen flex flex-col justify-center" id="contact">
      <Dialog>
        <DialogTrigger>Contact</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="flex justify-around gap-5 text-sm font-mono ">
              <Link href="https://github.com/Ad4cat/">
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
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "13rem" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="p-4">
                  <p>ここに開いたときの内容を入れます。</p>
                  <p>
                    閉じるときもスムーズにフェードアウト＋スライドクローズ。
                  </p>
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
