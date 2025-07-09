// scripts/get_refresh_token.js
const { google } = require("googleapis");
const readline = require("readline");

// 1) ここに先ほど取得したクライアントID／シークレットを入れる
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

async function main() {
    // 2) 認可URLを生成
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: "offline", // リフレッシュトークンを取得
        scope: SCOPES,
        prompt: "consent",
    });
    console.log("以下の URL をブラウザで開いて認可してください：\n", authUrl);

    // 3) 認可後に返ってくる code を入力
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("認可後に表示される code を入力してください：", async(code) => {
        rl.close();
        const { tokens } = await oauth2Client.getToken(code);
        console.log("取得したトークン情報：", tokens);
        console.log("---- 下記を .env.local に追加してください ----");
        console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`);
    });
}

main().catch(console.error);