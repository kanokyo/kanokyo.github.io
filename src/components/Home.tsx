import React from "react";
import { Home as House } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/"); // ここで、ページ遷移をする関数を定義するで。
  };

  return (
    <div>
      <House
        onClick={handleClick}
        className="transform transition-transform duration-300 hover:scale-150 cursor-pointer"
      />
    </div>
  );
};

export default Home;
