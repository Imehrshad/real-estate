"use client";
import React, { useState, useEffect } from "react";
import LoadingResult from "../../components/LoadingResult";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import Link from "next/link";

const CheckYourEmailPage = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const state = useSelector((state) => state.question);
  const checkQuestionStarted = () => {
    if (!state.isStarted) {
      router.push("/");
    }
  };
  useEffect(() => {
    checkQuestionStarted();
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    //  resize event listener
    window.addEventListener("resize", handleResize);

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return <LoadingResult />;
  }

  return (
    <div className="px-8 no-select relative h-full text-xl w-full flex justify-center items-center flex-col bg-primaryColor">
      <Confetti width={windowSize.width} height={windowSize.height} />
      <div className="z-10 relative flex justify-center items-center flex-col bg-secondaryColor w-5/6 px-10 text-center py-16 rounded-xl text-white gap-2 ">
        <div className="absolute  -top-5 left-1/2 -translate-x-1/2 bg-green-300 p-4 rounded-full">
          <FaCheck className="text-green-500" />
        </div>
        <h1 className="text-base font-sm font-normal">
          اطلاعات شما با موفقیت ثبت شد{" "}
        </h1>
        <h2 className=" text-[0.85rem] font-normal">
          لطفا برای دریافت نتیجه به ایمیل خود مراجعه کنید
        </h2>
      </div>

      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute scale-[5] opacity-80"
      >
        <rect
          x="1.92494"
          y="24.0164"
          width="45.7945"
          height="45.7945"
          rx="4"
          transform="rotate(-28.8426 1.92494 24.0164)"
          stroke="#E1A302"
          strokeWidth="6"
        />
        <rect
          x="14.1866"
          y="27.5691"
          width="27.7397"
          height="27.7397"
          rx="3.5"
          transform="rotate(-28.8426 14.1866 27.5691)"
          stroke="#E1A302"
          strokeWidth="5"
        />
      </svg>
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute  top-32 left-20  contrast-[0.95]"
      >
        <rect
          x="1.92494"
          y="24.0164"
          width="45.7945"
          height="45.7945"
          rx="4"
          transform="rotate(-28.8426 1.92494 24.0164)"
          stroke="#E1A302"
          strokeWidth="6"
        />
        <rect
          x="14.1866"
          y="27.5691"
          width="27.7397"
          height="27.7397"
          rx="3.5"
          transform="rotate(-28.8426 14.1866 27.5691)"
          stroke="#E1A302"
          strokeWidth="5"
        />
      </svg>
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute  bottom-32 right-20 contrast-[0.95]"
      >
        <rect
          x="1.92494"
          y="24.0164"
          width="45.7945"
          height="45.7945"
          rx="4"
          transform="rotate(-28.8426 1.92494 24.0164)"
          stroke="#E1A302"
          strokeWidth="6"
        />
        <rect
          x="14.1866"
          y="27.5691"
          width="27.7397"
          height="27.7397"
          rx="3.5"
          transform="rotate(-28.8426 14.1866 27.5691)"
          stroke="#E1A302"
          strokeWidth="5"
        />
      </svg>
      <Link
        className="w-2/3 absolute z-10 bottom-10 bg-secondaryColor text-white p-5 rounded-2xl text-center hover:scale-90 transition-transform duration-300"
        href="/"
      >
        تغییر اطلاعات
      </Link>
    </div>
  );
};

export default CheckYourEmailPage;
