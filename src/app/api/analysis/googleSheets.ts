// lib/googleSheets.ts
import { google } from "googleapis";

export async function fetchSheetData(): Promise<Record<string, string>[]> {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
    key: (process.env.GOOGLE_PRIVATE_KEY as string).replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "シート1!A:Z",
  });
  const rows = res.data.values ?? [];
  if (rows.length < 2) return [];
  const [header, ...body] = rows as string[][];
  return body.map((row) =>
    header.reduce((obj, key, idx) => ({ ...obj, [key]: row[idx] ?? "" }), {})
  );
}
