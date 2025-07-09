// /app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

// OAuth2 クライアントを準備
const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID!,
  process.env.GOOGLE_CLIENT_SECRET!,
  process.env.GOOGLE_REDIRECT_URI!
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN!,
});

async function sendMail({ name, email, subject, message }: any) {
  try {
    console.log("メール送信開始");

    // 環境変数の確認
    const requiredEnvVars = [
      "GOOGLE_CLIENT_ID",
      "GOOGLE_CLIENT_SECRET",
      "GOOGLE_REDIRECT_URI",
      "GOOGLE_REFRESH_TOKEN",
      "CONTACT_EMAIL",
    ];

    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        throw new Error(`環境変数 ${envVar} が設定されていません`);
      }
    }

    // ① 新しいアクセストークンを毎回取得
    console.log("アクセストークン取得中...");
    const accessTokenResponse = await oAuth2Client.getAccessToken();
    console.log("アクセストークン取得結果:", accessTokenResponse);

    const accessToken = accessTokenResponse.token;

    if (!accessToken) {
      throw new Error("アクセストークンが取得できませんでした");
    }

    console.log("アクセストークン取得成功");

    // ② トランスポーター作成（毎回新しく作成）
    console.log("トランスポーター作成中...");
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.CONTACT_EMAIL!,
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN!,
        accessToken,
        // Gmail API用の追加設定
        accessUrl: "https://oauth2.googleapis.com/token",
      },
    });

    // 接続確認をスキップして直接送信を試す
    console.log("接続確認をスキップしてメール送信を開始...");

    // ③ メール送信
    console.log("メール送信中...");
    const mailOptions = {
      from: process.env.CONTACT_EMAIL!, // fromにはCONTACT_EMAILのみ指定
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `【お問い合わせ】${subject}`,
      text: `名前：${name}\nEmail：${email}\n\n${message}`,
      html: `
        <h3>お問い合わせ</h3>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subject}</p>
        <p><strong>内容:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("メール送信成功:", result.messageId);

    return result;
  } catch (error) {
    console.error("sendMail エラー詳細:", error);
    throw error;
  }
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          message: "必須項目が足りません",
          fields: { name: !name, email: !email, message: !message },
        },
        { status: 400 }
      );
    }

    // メールアドレスの簡単なバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "有効なメールアドレスを入力してください" },
        { status: 400 }
      );
    }

    console.log("POST request received:", {
      name,
      email,
      subject: subject || "件名なし",
    });

    await sendMail({
      name,
      email,
      subject: subject || "件名なし",
      message,
    });

    return NextResponse.json({
      message: "送信が完了しました",
      success: true,
    });
  } catch (err: any) {
    console.error("POST route error:", err);

    // より詳細なエラーメッセージ
    let errorMessage = "送信中にエラーが発生しました";

    if (err.message.includes("環境変数")) {
      errorMessage = "サーバー設定に問題があります";
    } else if (err.message.includes("アクセストークン")) {
      errorMessage = "認証に失敗しました";
    } else if (err.message.includes("SMTP")) {
      errorMessage = "メールサーバーへの接続に失敗しました";
    }

    return NextResponse.json(
      {
        message: errorMessage,
        error: process.env.NODE_ENV === "development" ? err.message : undefined,
        success: false,
      },
      { status: 500 }
    );
  }
}
