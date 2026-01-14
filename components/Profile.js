"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import Avatar from "../public/Avatar.jpg";

export default function Profile() {
  return (
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
  );
}