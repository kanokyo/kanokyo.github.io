"use client";

import { useRouter } from "next/navigation";

export default function BackHome() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/skills"); // ここで、ページ遷移をする関数を定義するで。
  };

  return (
    <div>
      <h1>こんにちは</h1>
      <button onClick={handleClick}>Aboutページへ</button>
    </div>
  );
}
