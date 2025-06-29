import React from "react";
import { Button } from "./button";

const home_works = () => {
  return (
    <a href="/works">
      <Button
        variant="link"
        className="text-lg font-medium text-gray-700 hover:text-gray-900 transform transition-transform duration-300 hover:scale-150"
      >
        works
      </Button>
    </a>
  );
};

export default home_works;
