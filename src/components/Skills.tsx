"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
import { FadeIn } from "@/lib/variants";

const skills = [
  {
    title: "フロントエンド",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "バックエンド",
    skills: ["Node.js", "Python", "PostgreSQL", "Clerk"],
  },
  {
    title: "ツール・その他",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Docker",
      "Vercel",
      "supabase",
      "stripe",
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center z-30" id="skills">
      <div className="font-mono mt-10">
        <motion.div
          variants={FadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="font-bold text-3xl text-white flex justify-center p-10">
            SKILLs
          </h1>
        </motion.div>
        <motion.div
          variants={FadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid sm:grid-cols-3 sm:grid-rows-1 gap-5 px-5"
        >
          {skills.map((category, idx) => (
            <div key={idx}>
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle className="mb-4">{category.title}</CardTitle>
                  <Separator />
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-0">
                    {category.skills.map((skill, skillidx) => (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: skillidx * 0.1 }}
                        key={skillidx}
                        className="flex flex-wrap gap-2"
                      >
                        <Badge
                          variant="secondary"
                          className="bg-gray-50 border-black transition-all duration-300 px-3 py-1 text-sm font-medium"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
