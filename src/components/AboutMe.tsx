import React from "react";
import Timeline from "./Timeline";
import Profile from "./Profile";

const AboutME = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center" id="about">
      <div className=" font-mono mt-10 ">
        <h1 className="font-bold text-3xl flex justify-center p-10">ABOUT</h1>
        <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 md:gap-x-5 w-full">
          <div className="w-full md:w-1/2">
            <Profile />
          </div>
          <div className="w-full md:w-1/2">
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutME;
