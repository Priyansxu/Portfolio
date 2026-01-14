import { FiArrowUpRight } from "react-icons/fi"

const Data = [
  {
    title: "Vexel",
    subtitle: "AI-powered Discord bot",
    date: "May 2024",
    tags: ["Discord.py", "Python"],
    link: "https://vexel.vercel.app",
  },
]

export default function Projects() {
  return (
    <section className="mt-12 sm:mt-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white mb-8">Featured Projects</h2>

      <div className="space-y-6">
        {Data.map((item, index) => (
          <div key={index} className="card-base p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4">{item.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="tag text-xs sm:text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500">{item.date}</p>
              </div>

              <a
                href={item.link}
                target="_blank"
                className="flex-shrink-0 p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                aria-label={`Link to ${item.title}`}
                rel="noreferrer"
              >
                <FiArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
