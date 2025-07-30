"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/lib/variants";

const works = [
  {
    title: "他己分析",
    skills: ["Next.js", "TypeScript", "framer-motion", "tailwindcss"],
    discription:
      "CSSの3Dアニメーションも使い、入力してて飽きないアニメーションと見やすいデザインを意識して作成しました。",
    img: "/fuk2.jpg",
    link: "https://360-impressions.vercel.app/",
    period: "2025/05~ 約2週間",
  },
  {
    title: "PortFolio",
    skills: ["Next.js", "TypeScript", "framer-motion", "tailwindcss"],
    discription:
      "このサイトです。今まで作ったサイトよりframer-motionを多用し、より動的で魅力的なインタラクションを実現しています。",
    img: "/fuk2.jpg",
    link: "https://github.com/Ad4cat/Ad4cat.github.io",
    period: "2025/04~ 約1ヶ月",
  },
  {
    title: "hotelmate",
    skills: ["Next.js", "TypeScript", "framer-motion", "tailwindcss"],
    discription:
      "宿泊施設の検索を行えるWebアプリ。フィルター機能で、目的に合ったホテルをすぐに見つけられます。",
    img: "/fuk.jpg",
    link: "https://hotelmates.vercel.app/",
    period: "2025/03~ 約1ヶ月",
  },
  {
    title: "apparel",
    skills: [
      "Next.js",
      "TypeScript",
      "framer-motion",
      "tailwindcss",
      "Clark",
      "stripe",
    ],
    discription:
      "ファッションアイテムを紹介・販売するECサイト。レスポンシブデザインと直感的なUIで、スマホからでも快適にショッピングを楽しめます。",
    img: "/gua.jpg",
    link: "https://apparel-two-delta.vercel.app/",
    period: "2025/02~ 約1ヶ月",
  },
  {
    title: "keibaAI",
    skills: ["python", "lightgbm"],
    discription:
      "機械学習を活用して競馬のレース結果を予測するAIシステム。LightGBMを用いたモデルと豊富な特徴量で、それなりの精度を実現しました。",
    img: "/kamu.jpg",
    link: "https://github.com/Ad4cat/newKeibaAI",
    period: "2023/08~ 約2ヶ月",
  },
];

const Works = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center z-30" id="works">
      <div className="mt-10 font-mono">
        <motion.div
          variants={FadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="font-bold text-3xl flex justify-center p-10 text-white ">
            WORKs
          </h1>
        </motion.div>
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5">
          {works.map((work, idx) => (
            <motion.div
              variants={FadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -10 }}
              key={idx}
              className="relative overflow-hidden rounded-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110 "
                style={{ backgroundImage: `url(${work.img})` }}
              />
              <Link href={work.link} target="_blank">
                <Card className="relative bg-white/50 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-4">
                      <CardTitle className="">{work.title}</CardTitle>
                      <span>制作期間: {work.period}</span>
                    </div>
                    <Separator />
                  </CardHeader>
                  <CardContent className="pt-0 text-sm flex flex-wrap gap-2">
                    {work.skills.map((useSkill, useSkillidx) => (
                      <div key={useSkillidx}>
                        <Badge
                          variant="secondary"
                          className="border-black transition-all bg-white/0 duration-300 px-3 py-1 text-sm font-medium"
                        >
                          {useSkill}
                        </Badge>
                      </div>
                    ))}
                    {work.discription}
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
