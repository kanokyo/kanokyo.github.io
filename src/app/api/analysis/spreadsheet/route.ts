// app/api/sheet/route.ts
import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET() {
  // サービスアカウントの認証
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: (process.env.GOOGLE_PRIVATE_KEY as string).replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "シート1!A:Z",
  });

  const rows = res.data.values ?? [];
  if (rows.length === 0) return NextResponse.json({ data: [] });

  // 1行目をヘッダー
  const [header, ...body] = rows as string[][];
  const data = body.map((row) =>
    header.reduce<{ [key: string]: string }>(
      (obj, key, idx) => ({ ...obj, [key]: row[idx] ?? "" }),
      {}
    )
  );
  // console.log(data);

  return NextResponse.json({ data });
}
