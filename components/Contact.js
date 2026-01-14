"use client"

import { useTheme } from "next-themes"
import love_black from "../public/Assets/love-black.svg"
import love_white from "../public/Assets/love-white.svg"
import Image from "next/image"
import { BsArrowUpRight } from "react-icons/bs"

export default function Contact() {
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Priyansxu", icon: "GH" },
    { name: "Instagram", url: "https://instagram.com/priyansxu_gupta", icon: "IG" },
  ]

  return (
    <section className="mt-16 sm:mt-20 py-12 border-t border-slate-200 dark:border-slate-800">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white mb-6">Get in Touch</h2>

      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
        Always happy to chat! Reach out via email or social media.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <a
          href="mailto:priyanshu@gupta.is-a.dev"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
        >
          Send Email
          <BsArrowUpRight className="w-4 h-4" />
        </a>

        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-semibold transition-colors"
          >
            {link.name}
            <BsArrowUpRight className="w-4 h-4" />
          </a>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
        <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Spread Love</span>
        <Image src={currentTheme === "dark" ? love_white : love_black} alt="love" width={28} height={28} />
      </div>
    </section>
  )
}
