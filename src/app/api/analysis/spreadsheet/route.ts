export const dynamic = "force-dynamic";
// app/api/sheet/route.ts
import { NextResponse } from "next/server";
import { fetchSheetData } from "../googleSheets";

export async function GET() {
  const data = await fetchSheetData();

  return NextResponse.json({ data });
}
