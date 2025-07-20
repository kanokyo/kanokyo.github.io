"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 font-mono">
      <Card className="max-w-md w-full rounded-2xl shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold ">Thanks!</CardTitle>
          <CardDescription className="text-gray-600">
            ご協力ありがとうございました🙇‍♂️
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <p className="text-gray-700 ">
            他の人の回答や、AIによる分析結果は以下のリンクからご覧いただけます。
          </p>
          <Button asChild className="mx-auto font-semibold" variant="link">
            <Link href="/Third-PartyAnalysis/whoAmI">分析結果を見る</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYouPage;
