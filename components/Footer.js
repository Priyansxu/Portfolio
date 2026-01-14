export default function Footer() {
  return (
    <footer className="mt-16 sm:mt-20 py-12 sm:py-16 text-center border-t border-slate-200 dark:border-slate-800">
      <div className="space-y-4">
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Crafted with passion</p>

        <a
          href="https://www.instagram.com/priyansxu_gupta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-lg sm:text-xl font-bold bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Priyanshu Gupta
        </a>

        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 mt-4">© 2026 All rights reserved</p>
      </div>
    </footer>
  )
}
