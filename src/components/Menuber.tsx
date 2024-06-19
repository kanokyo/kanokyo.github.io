import React from "react";
import { AlignLeft } from "lucide-react";

const hamburger = () => {
  return (
    <div>
      <AlignLeft className="transform transition-transform duration-300 hover:scale-150 cursor-pointer" />
    </div>
  );
};

export default hamburger;
