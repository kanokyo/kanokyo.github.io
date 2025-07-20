"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function WhoAmIPage() {
  const [grouped, setGrouped] = useState<Record<string, any[]>>({});
  const [summary, setSummary] = useState<string>("");
  const [load, setLoad] = useState<boolean>(true);

  const fetchSpreadsheet = async () => {
    try {
      const res = await fetch("/api/analysis/spreadsheet");
      // 生の JSON を取得
      const json = await res.json();
      const rows = json.data as Record<string, string>[];

      const grouped = rows.reduce((acc, row) => {
        Object.entries(row).forEach(([key, val]) => {
          if (!val) return; // 空文字なら何もしない
          if (!acc[key]) acc[key] = [];
          acc[key].push(val);
        });
        return acc;
      }, {} as Record<string, string[]>);

      // 画面に見やすく表示
      setGrouped(grouped);
    } catch (err) {
      console.error(err);
    }
  };

  const getRes = async () => {
    try {
      // setLoad(true);
      const res = await fetch("/api/analysis/summary");
      //　「この人物は」から始まり「な性格」で終わるjson
      const { summary: text } = await res.json();

      // ^...で先頭 ...$で末尾
      setSummary(text.replace(/^この人物は、/, "").replace(/性格。$/, ""));
      setLoad(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSpreadsheet();
    setLoad(true);
    getRes();
  }, []);

  const categories: { key: string; label: string }[] = [
    { key: "Good", label: "長所" },
    { key: "Bad", label: "短所" },
    { key: "OneWord", label: "一言で表すと" },
    { key: "FirstImpreesion", label: "第一印象" },
    { key: "NowImpression", label: "現在の印象" },
    { key: "ImpressionThing", label: "印象的なこと" },
    // 必要に応じて追加…
  ];

  return (
    <div className="font-mono w-full">
      <div className="p-5">
        <span className="">AIによる要約</span>
        <Separator className="mb-2" />
        {(load && <h1 className="text-sm p-3">読み込み中. . .</h1>) || (
          <h1 className="text-sm p-3">
            私は <p className="text-lg text-blue-400">{summary}</p> 人です！
          </h1>
        )}
      </div>

      <div className="p-5">
        <span>みんなからの意見</span>
        <Separator className="mb-2" />
        <div className="flex flex-wrap justify-center font-mono">
          {categories.map(({ key, label }) => (
            <Card key={key} className="p-1 m-3 w-60">
              <CardHeader className="p-3">
                <h2 className="text-lg font-bold">{label}</h2>
              </CardHeader>
              <Separator className="mx-auto w-4/5" />
              <CardContent className="p-3">
                <ul className="list-disc list-inside text-sm">
                  {grouped[key]?.map((item: string, i: number) => (
                    <li key={i}>
                      {item || <span className="text-gray-400">(なし)</span>}
                    </li>
                  )) ?? <li className="text-gray-400">データなし</li>}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* <div className="w-full flex justify-center  mx-auto">
        <Button variant="outline" onClick={getRes} className="m-5">
          更新
        </Button>
      </div> */}
    </div>
  );
}
