export default function Category() {
  return (
    <div className="flex select-none max-w-lg text-xs sm:text-sm items-center font-semibold justify-between gap-1 w-[100%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto mt-10 mb-4">
      <div className="bg-gradient-to-r from-[#ffe4e4] to-[#ffe2d4] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#cf3903]">
        Developer
      </div>
      <div className="bg-gradient-to-l from-[#e7ffdc] to-[#ddfff8] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#097360]">
        Designer
      </div>
      <div className="bg-gradient-to-l from-[#cde1ff] to-[#f9d2ff] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#4e0aa2]">
        Astronomy
      </div>
      <div className="bg-gradient-to-l from-[#ffdaf9] to-[#ffdcdc] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#690c58]">
        Psychology
      </div>
    </div>
  );
}