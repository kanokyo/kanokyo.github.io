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
    img: "/360.png",
    link: "https://360-impressions.vercel.app/",
    period: "2025/07~ 約2週間",
  },
  {
    title: "PortFolio",
    skills: ["Next.js", "TypeScript", "framer-motion", "tailwindcss"],
    discription:
      "このサイトです。シンプルで見やすいデザインにし、ユーザー体験を向上させつつ、再利用可能なUIコンポーネントを設計し、自身のスキルと制作物を直感的に紹介できる構成にしています。",
    img: "/fuk2.jpg",
    link: "https://github.com/Ad4cat/Ad4cat.github.io",
    period: "2025/07~ 約1ヶ月",
  },
  {
    title: "hotelmate",
    skills: [
      "Next.js",
      "TypeScript",
      "tailwindcss",
      "framer-motion",
      "supabase",
    ],
    discription:
      "データベースへのデータの出し入れやユーザー認証機能などSupabaseを本格的に活用しました。また、Loading画面やFramerMotionを使ったアニメーションや、動的ルーティングなど、これまで触れてこなかった技術にも挑戦しました。",
    img: "/hotelmates.png",
    link: "https://hotelmates.vercel.app/",
    period: "2025/04~ 約2ヶ月",
  },
  {
    title: "apparel",
    skills: [
      "Next.js",
      "TypeScript",
      "tailwindcss",
      "Clark",
      "stripe",
      "supabase",
    ],
    discription:
      "Next.jsを学ぶために作成した初めてのプロジェクトです。YouTubeやChatGPTを活用し、Next.jsの基本的な概念や使い方を理解するとともに、Clerkによるユーザー認証やSupabaseによるバックエンドとの連携やShadcn/uiを用いたUIコンポーネント設計にも挑戦しました。",
    img: "/apparel.png",
    link: "https://apparel-two-delta.vercel.app/",
    period: "2025/02~ 約2ヶ月",
  },
  {
    title: "keibaAI",
    skills: ["python", "lightgbm"],
    discription:
      "機械学習を活用して競馬のレース結果を予測するAIシステム。LightGBMを用いたモデルと豊富な特徴量で、それなりの精度を実現しました。",
    img: "/kamu.jpg",
    link: "https://github.com/Ad4cat/newKeibaAI",
    period: "2023/08~ 約6ヶ月",
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
        <div className="grid grid-col-1 sm:grid-cols-2 xl:grid-cols-3  gap-5 px-5">
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
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center w-full gap-3 mb-4">
                      <CardTitle className="">{work.title}</CardTitle>
                      <div className="flex flex-col justify-start">
                        <span>制作期間:</span>
                        <span>{work.period}</span>
                      </div>
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
