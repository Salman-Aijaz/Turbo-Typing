"use client"
import Navbar from "./Components/Navbar";
import { HeroSection } from "./Components/HeroSection";
import Test from "./Components/Test";
import CloudAnimate from "./Components/CloudAnimate";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const testRef = useRef<HTMLDivElement>(null)

  const scrollToTest = () => {
    testRef.current?.scrollIntoView({ behavior: "smooth" });
  }


  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection scrollToTest={scrollToTest} />
      <CloudAnimate />
      <div ref={testRef}>
        <Test />
      </div>
    </div>
  );
}
