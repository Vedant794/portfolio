import { url } from "inspector";
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";

const yujiMai = localFont({
  src: "../app/fonts/YujiMai-Regular.ttf",
  variable: "--YujiMai",
  weight: "100 900",
});

const SourGummy = localFont({
  src: "../app/fonts/SourGummy.ttf",
  variable: "--sourGummy",
  weight: "100 900",
});

export const HeaderContent = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: "url('./background1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "95vh",
        width: "100%",
      }}
    >
      <main className="flex justify-center flex-col ml-40">
        <div className="mt-[20vh]">
          <p
            className={`text-white ${SourGummy.className} text-6xl w-10 font-bold`}
          >
            Creative Developer
          </p>
          <p className="text-gray-300 text-xl font-medium w-[40%] mt-5 gap-2">
            Crafting beautiful and functional web experiences with modern
            technologies.Specialized in React, NextJs and Creative Development
          </p>
        </div>
        <div className="button mt-5 flex">
          <button className="bg-white py-3 px-6 flex justify-between items-center rounded-lg hover:bg-slate-200">
            View Projects
            <img src="./arrow.png" alt="right arrow" className="h-4 ml-2" />
          </button>
          <button
            className={`border border-white text-white ${SourGummy.className} py-3 px-6 rounded-lg ml-4 hover:bg-white hover:text-black`}
          >
            Contact me
          </button>
        </div>
        <div className="logoNav flex ml-14 mt-7">
          <Link href={"https://github.com/Vedant794"} target="_blank">
            <img src="./github.png" alt="github" className="h-9" />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/vedant-nilesh-kumbhare-bb70b4264/"
            }
            target="_blank"
          >
            <img src="./linkedin.png" alt="linkedin" className="h-9 ml-5" />
          </Link>
        </div>
      </main>
    </div>
  );
};
