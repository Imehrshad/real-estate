import LoadingSvg from "@/components/LoadingSvg";

const loading = () => {
  return (
    <div className="w-full h-full flex-col flex justify-content items-center">
      <LoadingSvg />
      <div>
        <div className="">
            <span></span>
        </div>
        <h3>درحال پردازش اطلاعات شما</h3>
      </div>
      <LoadingSvg />
    </div>
  );
};

export default loading;
