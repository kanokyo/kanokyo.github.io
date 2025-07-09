"use client";

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { Textarea } from "./ui/textarea";

const FormList = [
  { id: "name", title: "お名前", placeholder: "山田 太郎", type: "input" },
  {
    id: "email",
    title: "メールアドレス",
    placeholder: "example@email.com",
    type: "input",
  },
  {
    id: "subject",
    title: "件名",
    placeholder: "お問い合わせの件名",
    type: "input",
  },
  {
    id: "message",
    title: "内容",
    placeholder: "メッセージをここにご記入ください。",
    type: "textarea",
  },
];

export default function MailForm() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange =
    (id: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValue((prev) => ({ ...prev, [id]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValue),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("sent");
      // 送信後はクリア
      setFormValue({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <Card className="w-full">
      <CardContent>
        {/* onSubmit と type="submit" を使ってフォーム送信 */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
          {FormList.map(({ id, title, placeholder, type }) => (
            <div key={id} className="flex flex-col">
              <div className="flex items-center">
                <Label htmlFor={id}>{title}</Label>
                <span className="ml-1 text-red-400">*</span>
              </div>

              {type === "textarea" ? (
                <Textarea
                  id={id}
                  placeholder={placeholder}
                  value={formValue[id as keyof typeof formValue]}
                  onChange={handleChange(id)}
                  required
                  className="w-full h-32 resize-none border rounded p-2"
                />
              ) : (
                <Input
                  id={id}
                  type={id === "email" ? "email" : "text"}
                  placeholder={placeholder}
                  value={formValue[id as keyof typeof formValue]}
                  onChange={handleChange(id)}
                  required
                />
              )}
            </div>
          ))}

          <Button
            type="submit"
            variant="outline"
            className={`w-full mt-2 ${
              status === "sending" ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <Send className="mr-2" />
            {status === "sending" ? "送信中…" : "送信"}
          </Button>

          {/* 送信結果フィードバック */}
          {status === "sent" && (
            <p className="text-green-600 mt-2">送信が完了しました！</p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-2">送信中にエラーが発生しました。</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
