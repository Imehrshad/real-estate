import LeftSideSvg from "@/components/LeftSideSvg";
import MohseSaneiSvg from "@/components/MohseSaneiSvg";
import NextIcon from "@/components/NextIcon";
import StartButton from "@/components/StartButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-full h-full no-select overflow-hidden relative">
      <Link
        href="/"
        className="flex justify-start items-center gap-2 absolute top-[3%] left-[5%]"
      >
        <p className="font-lobsterBold text-white text-lg">Msvancouver</p>
        <NextIcon />
      </Link>
      <img
        src="/images/backgroundelements.jpg"
        className=" -z-20 h-[100%] w-[150%] absolute -top-10 left-0 "
      />
      <img
        src="/images/shape1.svg"
        className="yellow-shape md:w-[80%] w-[85%] absolute lg:-bottom-[15%] md:-bottom-[3%] bottom-0 "
      />
      {/* <LeftSideSvg className="w-full absolute right-0 bottom-0 md:h-[55%] landscape:h-full landscape:lg:h-[55%]  " /> */}
      <div className="yellow-container absolute right-0 w-[75%] h-[44%] lg:h-[45%] md:h-[48%] bottom-0 flex justify-start items-center flex-col gap-8 ">
        <MohseSaneiSvg className=" self-start " />
        <p className=" px-3 w-full text-[0.85rem] ">
          «لطفاً برای کمک به ما در ارائه خدمات بهتر، چند سوال کوتاه درباره
          نیازها و ترجیحات خود در زمینه املاک پاسخ دهید.»
        </p>
        <StartButton />
      </div>
      <img
        src="images/shape2.svg"
        className="blue-shape w-full absolute -bottom-[5%] "
      />
      <span className="left-1/2 -translate-x-1/2 bottom-3 text-primaryColor lg:text-sm md:text-[0.8rem] text-[0.7rem] absolute whitespace-nowrap flex gap-1">
        مدت زمان پاسخگویی به سوالات{" "}
        <p className="font-iransansNum font-bold"> 30 </p> ثانیه
      </span>
    </div>
  );
}
