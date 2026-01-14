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
    <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-8 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-4xl">
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
