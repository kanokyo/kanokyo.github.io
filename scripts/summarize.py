import gspread
from oauth2client.service_account import ServiceAccountCredentials
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lex_rank import LexRankSummarizer  # TextRank なら TextRankSummarizer
import os

# --- 1) Google Sheets へ接続 ---
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
creds = ServiceAccountCredentials.from_json_keyfile_name('service_account.json', SCOPES)
gc = gspread.authorize(creds)

SPREADSHEET_ID = os.getenv('SPREADSHEET_ID')
SHEET_NAME = 'シート1'
ws = gc.open_by_key(SPREADSHEET_ID).worksheet(SHEET_NAME)

# --- 2) データ取得 & 整形 ---
# 1行目をヘッダ、以降を回答データとする
rows = ws.get_all_values()
header = rows[0]
data  = rows[1:]

# 質問ごとに回答をまとめる
qa_dict = { q: [] for q in header if q != 'Date' }
for row in data:
    for idx, q in enumerate(header):
        if q == 'Date': continue
        answer = row[idx].strip()
        if answer:
            qa_dict[q].append(answer)

# --- 3) 要約器の準備 ---
summarizer = LexRankSummarizer()  # TextRankSummarizer() に変えると TextRank
language = 'japanese'             # 日本語要約は辞書やモデルが必要な場合あり

# --- 4) 質問ごとに要約を生成 ---
for question, answers in qa_dict.items():
    print(f"=== {question} の要約 ===")
    # 回答をひとつのテキストにまとめ、行毎に改行して parser に渡す
    text = "\n".join(f"- {a}" for a in answers)
    parser = PlaintextParser.from_string(text, Tokenizer(language))
    # 要約文を最大 2 文（sentence_count）で出力
    summary = summarizer(parser.document, sentences_count=2)
    for sent in summary:
        print("・", sent)
    print()
