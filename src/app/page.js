import LeftSideSvg from "@/components/LeftSideSvg";
import MohseSaneiSvg from "@/components/MohseSaneiSvg";
import NextIcon from "@/components/NextIcon";
import StartButton from "@/components/StartButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`relative w-full h-full no-select `}>
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
      {/* <span
        className="w-3/12 h-[35%] bg-white absolute m-auto left-0 bottom-0 "
        style={{
          clipPath: "polygon(0 25%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      ></span> */}

      <LeftSideSvg className="w-full absolute right-0 bottom-0 md:h-[55%]" />
      <MohseSaneiSvg className="absolute  bottom-[35%] "/>
      <p className="lg:text-[0.92rem] text-[0.8rem] w-3/4 absolute bottom-[25%] right-[5%]">
        «لطفاً برای کمک به ما در ارائه خدمات بهتر، چند سوال کوتاه درباره نیازها
        و ترجیحات خود در زمینه املاک پاسخ دهید.»
      </p>
      <StartButton />
      <span className="left-1/2 -translate-x-1/2 bottom-3 text-primaryColor lg:text-sm text-[0.8rem] absolute whitespace-nowrap flex gap-1">
        مدت زمان پاسخگویی به سوالات <p className="font-iransansNum font-bold"> 30 </p> ثانیه
      </span>
    </div>
  );
}
