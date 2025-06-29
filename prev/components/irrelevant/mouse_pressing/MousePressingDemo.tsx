"use client";

import MousePressing from "./MousePressing";

const MousePressingDemo = () => {
  return (
    <div className="p-4">
      <MousePressing
        className="w-64 h-64 bg-gray-200 flex items-center justify-center cursor-pointer transition-colors duration-200"
        pressedClassName="bg-blue-300"
        pressedContent={
          <p className="text-center text-blue-800 font-bold">
            You are pressing me!
          </p>
        }
        onLongPress={() => console.log("Long press detected!")}
      >
        <p className="text-center text-gray-600">
          Press and hold to see a different message
        </p>
      </MousePressing>
    </div>
  );
};

export default MousePressingDemo;
