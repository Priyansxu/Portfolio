export default function Category() {
  const categories = [
    {
      label: "Developer",
      color: "from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 text-red-700 dark:text-red-300",
    },
    {
      label: "Designer",
      color: "from-green-100 to-cyan-100 dark:from-green-900/30 dark:to-cyan-900/30 text-green-700 dark:text-green-300",
    },
    {
      label: "Astronomy",
      color: "from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300",
    },
    {
      label: "Psychology",
      color: "from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-pink-700 dark:text-pink-300",
    },
  ]

  return (
    <section className="flex flex-wrap gap-2 sm:gap-3 mt-8 mb-6">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className={`bg-gradient-to-r ${cat.color} rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-transform hover:scale-105`}
        >
          {cat.label}
        </div>
      ))}
    </section>
  )
}
