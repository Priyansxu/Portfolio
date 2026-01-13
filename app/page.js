"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import Avatar from "../public/Avatar.jpg";
import Link from "next/link";

import Divider from "@/components/Divider";
import Projects from "@/components/Projects";
import Category from "@/components/Category";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">

        <header className="flex flex-row justify-start items-center mt-20">
          <Image
            src={Avatar}
            alt="Avatar"
            width={80}
            height={80}
            priority
            className="object-cover rounded-3xl border-2 border-black dark:border-white filter saturate-65"
          />

          <div className="flex flex-col ml-4">
            <h2 className="font-bold sm:text-2xl md:text-2xl lg:text-4xl">
              Priyanshu Gupta
            </h2>

            <Link
              href="https://github.com/Priyansxu"
              target="_blank"
              className="text-[#717171bb] flex items-center"
            >
              <span>@priyansxu</span>
              <BsArrowUpRight className="stroke-1 h-3 ml-1" />
            </Link>
          </div>
        </header>

        <Category />

        <About />

        <Divider />

        <Projects />

        <Contact />

      </div>
    </div>
  );
}