"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const Page = () => {
  const [tokumei, setTokumei] = useState<boolean>(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    good: "",
    bad: "",
    firstInp: "",
    nowInp: "",
    oneLine: "",
    impressionThing: "",
    name: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      good: formData.good,
      bad: formData.bad,
      firstInp: formData.firstInp,
      nowInp: formData.nowInp,
      oneLine: formData.oneLine,
      impressionThing: formData.impressionThing,
      name: tokumei ? "匿名" : formData.name,
    };

    if (
      payload.good === "" &&
      payload.bad === "" &&
      payload.firstInp === "" &&
      payload.nowInp === "" &&
      payload.oneLine === "" &&
      payload.impressionThing === ""
    ) {
      alert("どれか一つ以上入力してください");
      return;
    }

    if (!tokumei && payload.name === "") {
      alert("名前を入力してください");
      return;
    }

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      router.push("/Third-PartyAnalysis/thanks");
    } else {
      alert("保存に失敗しました…");
    }
  };

  return (
    <div className="flex justify-center items-start mx-auto h-screen m-5 mb-32">
      <Card className="w-full font-mono text-md shadow-lg min-w-[18rem] max-w-xl md:max-w-2xl lg:max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">他己分析</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            すべての項目を埋める必要はありません。
            <br />
            埋められるところだけで大丈夫です。
          </CardDescription>
        </CardHeader>
        <CardContent className="p-5 ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 space-y-4 "
          >
            {/* 良い / 悪い(直したほうが良い)ところ */}
            <div className="flex flex-col gap-3">
              {/* 良いところ */}
              <div className="space-y-1">
                <Label htmlFor="good">長所</Label>
                <Textarea
                  name="good"
                  id="good"
                  value={formData.good}
                  onChange={handleChange}
                />
              </div>
              {/* 悪い(直したほうが良い)ところ */}
              <div className="space-y-1">
                <Label htmlFor="bad">短所</Label>
                <Textarea
                  name="bad"
                  id="bad"
                  value={formData.bad}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* 第一印象, 今の印象 */}
            <div className="flex flex-col gap-3 ">
              {/* 第一印象 */}
              <div className="space-y-1">
                <Label htmlFor="firstInp">第一印象</Label>
                <Textarea
                  name="firstInp"
                  id="firstInp"
                  value={formData.firstInp}
                  onChange={handleChange}
                />
              </div>
              {/* 悪い(直したほうが良い)ところ */}
              <div className="space-y-1">
                <Label htmlFor="nowInp">今の印象</Label>
                <Textarea
                  name="nowInp"
                  id="nowInp"
                  value={formData.nowInp}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* 一言で表すと */}
            <div className="space-y-1">
              <Label htmlFor="oneLine">
                一言で表すと(天才, 猫, 酸素などなんでも、、、)
              </Label>
              <Textarea
                name="oneLine"
                id="oneLine"
                value={formData.oneLine}
                onChange={handleChange}
              />
            </div>

            {/* 印象的な出来事 */}
            <div className="space-y-1">
              <Label htmlFor="impressionThing">印象的な出来事</Label>
              <Textarea
                name="impressionThing"
                id="impressionThing"
                value={formData.impressionThing}
                onChange={handleChange}
              />
            </div>

            {/* 名前 */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 ">
                <Switch
                  id="tokumei"
                  checked={tokumei}
                  onCheckedChange={(prev: boolean) => setTokumei(prev)}
                />
                <span>匿名</span>
              </div>
              {!tokumei && (
                <div className="flex items-center gap-4">
                  <Label htmlFor="name" className="whitespace-nowrap">
                    名前：
                  </Label>
                  <Input
                    name="name"
                    id="name"
                    className="flex-1"
                    placeholder="名前を入力してください"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>

            {/* 送信ボタン */}
            <div id="submit" className="flex justify-end">
              <Button type="submit" variant="outline">
                送信
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
