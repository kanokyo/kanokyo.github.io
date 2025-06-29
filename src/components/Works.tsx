"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

const works = [
  {
    title: "PortFolio",
    skills: ["Next.js", "TypeScript", "framer-motion", "tailwindcss"],
    discription:
      "このサイトです。今まで作ったサイトよりframer-motionを多用し、より動的で魅力的なインタラクションを実現しています。",
    img: "/fuk2.jpg",
  },
  {
    title: "hotelmate",
    skills: ["Next.js", "TypeScript", "framer-motion", "tailwindcss"],
    discription:
      "宿泊施設の検索・予約をシンプルに行えるWebアプリ。地図連携や豊富なフィルター機能で、目的に合ったホテルをすぐに見つけられます。",
    img: "/fuk.jpg",
  },
  {
    title: "apparel",
    skills: ["Next.js", "TypeScript", "framer-motion", "tailwindcss"],
    discription:
      "ファッションアイテムを紹介・販売するECサイト。レスポンシブデザインと直感的なUIで、スマホからでも快適にショッピングを楽しめます。",
    img: "/gua.jpg",
  },
  {
    title: "keibaAI",
    skills: ["Next.js", "TypeScript", "framer-motion", "tailwindcss"],
    discription:
      "機械学習を活用して競馬のレース結果を予測するAIシステム。LightGBMを用いたモデルと豊富な特徴量で、高い精度を実現しました。",
    img: "/kamu.jpg",
  },
];

const Works = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center" id="works">
      <div className="mt-10 font-mono">
        <h1 className="font-bold text-3xl flex justify-center p-10 ">WORKs</h1>
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5">
          {works.map((work, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-lg">
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110 "
                style={{ backgroundImage: `url(${work.img})` }}
              />
              <Card className="relative bg-white/50 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="mb-4">{work.title}</CardTitle>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
