import NextQuestion from "@/components/NextQuestion";
import PercentageIndicator from "@/components/PercentageIndicator";
import ProgressBar from "@/components/ProgressBar";
import Questions from "@/components/Questions";
import QuestionsHeader from "@/components/QuestionsHeader";

const page = () => {
  return (
    <div className="w-full h-full no-select">
      <div className="flex justify-between items-center py-8">
        <svg
          width="94"
          height="84"
          viewBox="0 0 94 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M77.4314 31.9032L92.9747 36.6243C94.205 36.998 95.4747 36.1622 95.5877 34.9041L96.6442 23.144C96.6988 22.5366 96.4647 21.9388 96.0097 21.5236L78.973 5.97754C78.4274 5.47967 77.6458 5.31741 76.94 5.55551L67.1711 8.85128C66.0037 9.24514 65.4649 10.5632 66.0326 11.6362L76.2383 30.9254C76.4866 31.3946 76.9162 31.7467 77.4314 31.9032Z"
            fill="#E1A302"
          />
          <path
            d="M38.4102 40.2511L62.832 42.4614C63.4746 42.5195 64.0113 41.9757 63.9332 41.3453L61.6458 22.8652C61.6084 22.5636 61.4324 22.2966 61.1683 22.141L32.9453 5.51409C32.6281 5.32724 32.2308 5.32787 31.9111 5.51571L17.5377 13.9597C17.0049 14.2727 16.8773 14.9772 17.2687 15.4449L37.7307 39.8978C37.8999 40.1 38.1443 40.2271 38.4102 40.2511Z"
            fill="#E1A302"
          />
          <path
            d="M26.6607 66.7618L37.5008 55.7442C37.9493 55.2883 37.8495 54.533 37.2962 54.1974L27.1455 48.0404C26.8826 47.8809 26.5616 47.8487 26.2743 47.9528L6.22866 55.2221C5.88344 55.3472 5.63711 55.6506 5.58701 56.0124L4.18179 66.1573C4.09787 66.7631 4.58104 67.3052 5.19858 67.2981L25.9601 67.0585C26.2249 67.0554 26.4767 66.9488 26.6607 66.7618Z"
            fill="#E1A302"
          />
          <path
            d="M92.7438 69.0472L77.4547 78.2602C76.9075 78.5899 76.1942 78.3441 75.9816 77.7526L71.3964 64.9935C71.2926 64.7047 71.3311 64.3839 71.5007 64.1247L84.6542 44.0261C84.8572 43.7159 85.2173 43.5402 85.5897 43.5698L97.6709 44.5288C98.2816 44.5773 98.7032 45.1463 98.5642 45.7345L93.2039 68.4202C93.1423 68.681 92.9764 68.9071 92.7438 69.0472Z"
            fill="#E1A302"
          />
          <path
            d="M49.0584 55.6915L37.919 75.062C37.5293 75.7397 38.0479 76.5855 38.8365 76.5582L59.0926 75.8567C59.5251 75.8417 59.8965 75.5528 60.0139 75.1402L67.0895 50.2507C67.3146 49.4588 66.5258 48.745 65.7535 49.0417L49.5611 55.2621C49.3486 55.3437 49.1713 55.4952 49.0584 55.6915Z"
            fill="#E1A302"
          />
        </svg>
        <QuestionsHeader />
      </div>
      <div className="flex justify-center items-center flex-col  px-8 py-2 gap-4 ">
        <p className="text-[0.6rem] text-zinc-500 self-end">پیشرفت شما</p>
        <div className="flex justify-between items-center w-full">
          <p className="text-[0.75rem] ">
            <strong className="font-iransansNum font-bold">10</strong> دقیقه
          </p>
          <PercentageIndicator />
        </div>
        <ProgressBar />
      </div>
      <div className="w-full px-8 py-5 relative">
        <Questions />
        <div className="relative w-full">
          <span className="w-full h-52 bg-primaryColor opacity-30 absolute rounded-2xl scale-90 left-1/2 -translate-x-1/2 -bottom-5 -z-10"></span>
          <span className="w-full h-52 bg-primaryColor opacity-50 absolute rounded-2xl scale-[0.83] left-1/2 -translate-x-1/2 -bottom-9 -z-10"></span>
          <span className="w-full h-52 bg-primaryColor opacity-30 absolute rounded-2xl scale-[0.73] left-1/2 -translate-x-1/2 -bottom-14 -z-10"></span>
        </div>
      </div>
      <div className=" px-8 py-2 flex justify-center items-center w-full mt-10">
        <NextQuestion />
      </div>
    </div>
  );
};

export default page;
