"use client";

import { useState } from "react";
import { Card, CardContent } from "./ui/card";

const FormList = [{ header: "お名前", placeholder }];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <Card className="w-2/3">
      <CardContent>
        <form>
          <div className="">
            <div></div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
