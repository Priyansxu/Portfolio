import Image from "next/image";
import swirl from "../public/Assets/swirl-gradient.svg";
import { FiArrowUpRight } from "react-icons/fi";

const Data = [
  {
    title: "Vexel",
    subtitle: "AI-powered Discord bot",
    date: "May 2024",
    tags: ["Discord.py", "Python"],
    link: "https://vexel.vercel.app"
  }
];

export default function Projects() {
  return (
    <div>
      <div className="relative">
        <h1 className="mt-10 text-black dark:text-white font-semiBold text-2xl inline-block">
          Projects
        </h1>

        <div className="absolute -translate-y-3 -translate-x-2 left-0">
          <Image
            src={swirl}
            alt="swirl"
            width={120}
            height={48}
            priority
          />
        </div>
      </div>

      {Data.map((item, index) => (
        <div key={index} className="my-8 relative">
          <div className="flex items-center mb-2">
            <div className="w-5 h-5 bg-gradient-to-br from-indigo-500 to-rose-500 rounded-full flex items-center justify-center shadow-md opacity-50 dark:opacity-80">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>

            <div className="ml-3 translate-y-2 mb-2">
              <div className="relative flex items-center">
                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100">
                  {item.title}
                </h3>

                <a
                  href={item.link}
                  target="_blank"
                  className="text-indigo-400/70 hover:text-indigo-700"
                  aria-label={`Link to ${item.title} project`}
                >
                  <FiArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.subtitle}
              </p>
            </div>
          </div>

          <div className="ml-[10px] pl-5 border-l-2 border-dashed border-purple-300">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {item.date}
            </p>

            <div className="flex flex-wrap gap-2 mb-2">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-xs font-medium rounded-full shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
