import type { Metadata } from "next";
import { Erica_One, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const ericaOne = Erica_One({
  weight: "400", // Rubik Dirt はウェイトが 400 のみ
  subsets: ["latin"], // 必要なサブセット
  variable: "--font-rubik-dirt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "About me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${ericaOne.variable}`}>
        {children}
      </body>
    </html>
  );
}
