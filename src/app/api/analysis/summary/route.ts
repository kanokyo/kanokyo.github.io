export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import OpenAI from "openai";
import { preprocessSummaryInput } from "./preprocessSummaryInput";
import { fetchSheetData } from "../googleSheets";

export async function GET() {
  // サービスアカウントの認証
  try {
    const data = await fetchSheetData();

    const inputText = preprocessSummaryInput(data);
    console.log(inputText);

    const client = new OpenAI({
      apiKey: process.env.OPENAIAPI_KEY,
    });

    // ① Chat API 呼び出し
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-nano-2025-04-14",
      messages: [
        {
          role: "system",
          content:
            "あなたは人物分析の専門家です。与えられた情報からその人の特徴や性格を的確に分析してください。以下の制約を必ず守ってください:1. レスポンスは必ず「この人物は」で始める。2.レスポンスの途中で「ただし」から短所を含める。 3.レスポンスの最後は「な性格」という形の名詞句で終わる。4.5文字以上80文字以下でまとめてください。",
        },
        {
          role: "user",
          content: `
以下のリスト形式データをもとにどんな人物かを分析してください。
${inputText}
`,
        },
      ],
      temperature: 0.5, // 0.0〜1.0 の範囲で、数値が低いほど“確定的”な応答に
      max_tokens: 200,
      top_p: 0.9, // nucleus sampling
      frequency_penalty: 0, // 繰り返し抑制
      presence_penalty: 0, // 新規トピック性能
    });

    // ② 実際の要約テキストを取り出し
    const response = completion.choices?.[0]?.message?.content?.trim() ?? "";

    // ③ 必要ならログ
    console.log(response);

    return NextResponse.json({ summary: response });
  } catch (error: any) {
    console.error("GET /api/analysis/summary error:", error);
    // 例外時にも必ず返却
    return NextResponse.json(
      { error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
