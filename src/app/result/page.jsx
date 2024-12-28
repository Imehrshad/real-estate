import Certification from "@/components/resultPage/Certification";
import CommonQuestion from "@/components/resultPage/CommonQuestion";
import Consultation from "@/components/resultPage/Consultation";
import HouseOffer from "@/components/resultPage/HouseOffer";
import ImageSlider from "@/components/resultPage/ImageSlider";
import MohseSanei from "@/components/resultPage/MohseSanei";
import ProcessOfBuying from "@/components/resultPage/ProcessOfBuying";
import ResultBox from "@/components/resultPage/ResultBox";

const page = () => {
  return (
    <main className="w-full ">
      <Consultation />
      <h2 className="w-full text-center p-10">نتیجه پاسخ های شما</h2>
      <ResultBox />
      <HouseOffer />
      <ImageSlider />
      <ProcessOfBuying />
      <MohseSanei />
      <Certification/>
      <CommonQuestion/>
    </main>
  );
};

export default page;
