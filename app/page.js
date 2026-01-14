"use client";

import { useTheme } from "next-themes";
import Profile from "@/components/Profile";
import Divider from "@/components/Divider";
import Projects from "@/components/Projects";
import Category from "@/components/Category";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  const { systemTheme, theme } = useTheme();

  return (
    <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
        <Profile />
        <Category />
        <About />
        <Divider />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
