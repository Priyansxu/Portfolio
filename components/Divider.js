export default function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-12 sm:my-16">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
      <span className="text-slate-400 dark:text-slate-600 text-2xl select-none">✦</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
    </div>
  )
}
