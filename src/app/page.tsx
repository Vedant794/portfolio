"use client";

import Image from "next/image";
import { HeaderContent } from "@/components/Header";
import { AboutSection } from "@/components/about";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import { ContactMe } from "@/components/contactme";

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

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Handle animation after 1.5 seconds
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`transform transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-black`}
    >
      <header className="sticky bg-[#191919]">
        <div className="navigation text-white pt-4">
          <ul className="flex justify-evenly items-center">
            <div
              title="Vedant Kumbhare - Portfolio"
              className={`logo ml-3 ${yujiMai.className} text-3xl`}
            >
              Portfolio
            </div>
            <div
              className={`nav flex justify-evenly items-center w-[60%] ${SourGummy.className} text-xl`}
            >
              <Link href={"/"}>
                <li>Home</li>
              </Link>
              <Link href={"#about"}>
                <li>About</li>
              </Link>
              <li>Projects</li>
              <Link href={"#contact"}>
                <li>Contact me</li>
              </Link>
            </div>
          </ul>
        </div>
      </header>
      <div id="head">
        <HeaderContent />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </div>
  );
}
