"use client"

import Image from "next/image";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import header_black from "../public/Assets/header-black.png";
import header_white from "../public/Assets/header-white.png";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const touchRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    setMounted(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav
      ref={touchRef}
      className={`${
        isScrolled && "bg-opacity-[0.7] shadow-md drop-shadow-lg "
      } font-medium duration-500 bg-opacity-60 transition-all linear z-40 dark:text-white w-[75%] sm:w-[75%] md:w-[50%] lg:w-[40%] xl:w-[40%] max-w-3xl mx-auto bg-white dark:bg-[#353535cc] dark:bg-[#000] drop-shadow-xs backdrop-blur-sm top-4 sticky rounded-2xl`}
    >
      <div className="flex items-center justify-between py-1 md:px-8 px-6">
        {currentTheme === "dark" ? (
          <button
            onClick={() => {
              setTheme("light");
            }}
            className="w-max"
          >
            <MdLightMode className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
          </button>
        ) : (
          <button
            onClick={() => {
              setTheme("dark");
            }}
            className="w-max"
          >
            <MdDarkMode className="w-5 h-5 sm:w-6 sm:h-6 fill-black" />
          </button>
        )}
        <div className="mx-auto select-none cursor-pointer -translate-x-2">
          {currentTheme === "dark" ? (
            <Image src={header_white} alt="header" width="140" />
          ) : (
            <Image src={header_black} alt="header" width="140" />
          )}
        </div>
      </div>
    </nav>
  );
}