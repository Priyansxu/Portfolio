export default function Footer() {
  return (
    <div className="flex select-none text-sm py-16 mt-16 flex-col items-center justify-center mx-auto">
      <a
        href="https://www.instagram.com/priyansxu_gupta"
        target="blank"
        rel="noreferrer"
        className="flex flex-col text-center group hover:text-purple-800 w-max items-center text-gray-600 mt-8 md:mt-12"
      >
        <div className="relative transition-all ease-in-out duration-1000">
          <p className="font-bold animate-text group-hover:bg-white bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-sm sm:text-base md:text-lg">
            Priyanshu Gupta
          </p>
        </div>
      </a>
    </div>
  );
}