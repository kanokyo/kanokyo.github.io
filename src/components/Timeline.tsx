"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar } from "lucide-react";
import { Separator } from "./ui/separator";

export default function YearSlider() {
  const [year, setYear] = useState<number>(2003);
  const descriptions: Record<number, string> = {
    2003: "東京都国立市で生まれる。",
    2017: "Minecrafeでサーバーを建てたりプラグインやmodpackにふれる。",
    2019: "拓殖大学第一高等学校　入学",
    2020: "コロナ禍で毎日の検温と報告が煩雑だったため測定結果を自動で提出してくれるPythonプログラムを作成する。",
    2022: "拓殖大学第一高等学校　卒業",
    2023: "機械学習を学び競馬AIを作成する。",
    2024: "旅行と散歩が趣味になる。",
    2025: "フロントエンドに興味を持ちNext.jsを学ぶ。",
    2027: "大学卒業(予定)",
  };
  // 説明文が用意されているかどうか
  const hasDescription = (y: number) => descriptions[y] !== undefined;

  return (
    <div className="font-mono">
      <Card className="bg-white/90 backdrop-blur-xl border-black/50">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl font-semibold text-black mb-4 flex justify-start items-center ">
            <Calendar className="mr-2" />
            人生年表
          </CardTitle>
          <Separator className="bg-black" />
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-col items-center justify-center w-auto ">
            {/* 選択中の年 */}
            <h2
              className={`text-2xl   mb-3 ${
                hasDescription(year) ? " font-bold text-blue-500" : "text-black"
              }`}
            >
              {year}年
            </h2>
            {/* スライダー */}
            <Slider
              value={[year]}
              min={2003}
              max={2027}
              step={1}
              onValueChange={([v]) => setYear(v)}
              className="w-4/5"
              aria-label="年表"
            />
            <div className="mt-1 flex justify-between text-xs font-medium text-muted-foreground w-4/5 pt-1">
              <span className="">2003</span>
              <span className="">2027</span>
            </div>

            <div className="w-4/5 m-4 flex flex-col items-center space-y-3">
              {Object.entries(descriptions).map(([y, desc]) => (
                <span
                  key={y}
                  onClick={() => setYear(Number(y))}
                  className={`border rounded-md p-2 w-11/12 bg-gray-50 text-sm whitespace-normal break-words duration-300 hover:cursor-pointer hover:border-blue-500 ${
                    Number(y) === year
                      ? "text-black font-medium bg-blue-50 border-l-4  border-blue-500"
                      : "text-gray-400"
                  }`}
                >
                  {y}年 : {desc}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
