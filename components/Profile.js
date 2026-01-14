"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import Avatar from "../public/Avatar.jpg";

export default function Profile() {
  return (
    <section className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 py-8 sm:py-12">
      <Image
        src={Avatar}
        alt="Avatar"
        width={80}
        height={80}
        priority
        className="object-cover rounded-2xl border-2 border-slate-200 dark:border-slate-700 w-20 h-20 sm:w-24 sm:h-24"
      />

      <div className="flex flex-col">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 dark:text-white">
          Priyanshu Gupta
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2">
          Developer, Designer & Astronomy Enthusiast
        </p>

        <Link
          href="https://github.com/Priyansxu"
          target="_blank"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mt-3 text-sm sm:text-base"
        >
          <span>@priyansxu</span>
          <BsArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}