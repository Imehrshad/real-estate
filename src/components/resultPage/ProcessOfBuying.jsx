import { FaPlay } from "react-icons/fa";

const ProcessOfBuying = () => {
  return (
    <div className="px-8 py-2 relative">
      <h3 className=" p-5 text-center">مراحل فرآیند خرید ملک ما </h3>
      <div className="rounded-xl border-2 border-primaryColor overflow-hidden">
        <img
          src="/images/result/videoThumbnail.jpg"
          alt="video thumbnail"
          className="object-fill brightness-50"
        />
      </div>
      <FaPlay className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3rem] text-primaryColor  " />
    </div>
  );
};

export default ProcessOfBuying;
