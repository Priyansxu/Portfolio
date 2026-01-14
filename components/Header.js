"use client"

import { MdLightMode, MdDarkMode } from "react-icons/md"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    setMounted(true)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 w-[90%] sm:w-full px-4 sm:px-6 max-w-sm sm:max-w-md ${
        isScrolled ? "bg-white/80 dark:bg-slate-900/80 shadow-lg" : "bg-white/60 dark:bg-slate-900/60"
      } backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 rounded-2xl`}
    >
      <div className="flex items-center justify-between py-3 px-2 sm:px-6">
        <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          aria-label="Toggle theme"
        >
          {currentTheme === "dark" ? (
            <MdLightMode className="w-5 h-5 text-yellow-400" />
          ) : (
            <MdDarkMode className="w-5 h-5 text-slate-700" />
          )}
        </button>

        <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Priyanshu
        </h1>

        <div className="w-5"></div>
      </div>
    </header>
  )
}
