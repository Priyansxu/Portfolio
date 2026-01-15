"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import love_black from "../public/Assets/love-black.svg";
import love_white from "../public/Assets/love-white.svg";

export default function Contact() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <section className="mt-16 sm:mt-20">
      <p className="text-gray-400 select-none font-semibold mb-1 dark:text-white/30 text-sm sm:text-base">Contact</p>

      <p className="text-base sm:text-lg">
        Not widely recognized, but always accessible on social media.<br />DM on <span className="text-orange-500 font-bold">Instagram </span>
        <a href="https://instagram.com/priyansxu_gupta" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 decoration-2 decoration-purple-400 dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer">
          @priyansxu_gupta
        </a>
        <br />Send an <span className="text-blue-500 font-bold">Email </span>at{" "}
        <a
          href="mailto:priyansxu@yahoo.com"
          onClick={() => navigator.clipboard.writeText("priyansxu@yahoo.com")}
          className="underline underline-offset-4 decoration-2 decoration-purple-400 select-all font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer"
        >
          priyansxu@yahoo.com
        </a>
      </p>

      <div className="flex mx-auto justify-center mt-16 select-none items-center gap-2">
        <span className="font-black font-app text-xl sm:text-2xl tracking-wider">Spread Love</span>
        <Image src={currentTheme === "dark" ? love_white : love_black} alt="love" width={30} className="-mt-4" />
      </div>
    </section>
  );
}