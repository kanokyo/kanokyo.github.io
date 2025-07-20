type DataRow = { [key: string]: string };

export function preprocessSummaryInput(rows: DataRow[]): string {
  // ① 行配列を列オブジェクトに変換
  const col: Record<string, string[]> = {};
  for (const row of rows) {
    for (const key in row) {
      if (!col[key]) col[key] = [];
      col[key].push(row[key]);
    }
  }

  // 対応する列を取得（キーがなければ空配列）
  const Good = col["Good"] || [];
  const Bad = col["Bad"] || [];
  const First = col["FirstImpreesion"] || [];
  const Now = col["NowImpression"] || [];
  const OneWord = col["OneWord"] || [];

  // ② リストを自然言語文に変換
  const listToSentence = (label: string, items: string[]): string => {
    const filtered = items.filter((i) => i && i.trim() !== "");
    const text = filtered.join("、");
    return text ? `${label}：${text}。` : "";
  };

  const parts = [
    listToSentence("長所", Good),
    listToSentence("短所", Bad),
    listToSentence("第一印象", First),
    listToSentence("今の印象", Now),
    listToSentence("一言で表すと", OneWord),
  ];

  // ③ 不要記号を除去して改行で結合
  const raw = parts.filter((p) => p !== "").join("\n");
  const inputText = raw.replace(/[\[\]'"\n]/g, "");

  return inputText;
}
