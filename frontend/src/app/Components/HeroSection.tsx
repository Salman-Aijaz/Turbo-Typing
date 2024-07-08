"use client";
import React from "react";
import animation from "../Assests/Animation.json";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";

export const HeroSection = ({scrollToTest}:{scrollToTest:any}) => {
  return (
    <div className="flex flex-col justify-around lg:flex-row items-center py-20 bg-blue-900 h-auto">
      <div className="flex flex-col items-center lg:items-start w-full lg:w-2/5 space-y-6">
        <h1 className="font-sans text-4xl font-bold leading-tight">
          <Typewriter
            words={[
              "Master Your Keyboard, Master Your Speed.",
              "Type Faster, Go Further.",
              "Empower Your Words with Speed.",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-[#D8F8FF] text-sm text-center uppercase">Check your typing skills in a minute</p>
        <button className="py-3 px-12 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg" onClick={scrollToTest}>
          Get Started
        </button>
      </div>

      <div className="mt-8 lg:mt-0">
        <Lottie animationData={animation} className="h-64 w-64"/>
      </div>
    </div>
  );
};
