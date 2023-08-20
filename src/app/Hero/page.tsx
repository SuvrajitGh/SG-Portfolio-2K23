"use client";
import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "../BackgroundCircles/page";
import "../../styles/commn.css"
export const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi,I'am Suvrajit Ghosh",
      "<Coding 24/7/>",
      "a freelance photographer.",
      "Guy-who-loves-Tech",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
      <div className=" bg-slate-900 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden text-white z-[-100]">
        <BackgroundCircles />
        <Image className=" relative rounded-full h-32 w-32 mx-auto object-cover" src="/images/user.jpg" width={100}
        height={100} alt="User"/>
        <div className="z-30">
            <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">Full-Stack Developer</h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3 typewritter">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
        </div>
      </div>
    </>
  );
};
