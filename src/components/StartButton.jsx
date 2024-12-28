"use client";
import { reset, startQuestion } from "@/redux/features/questionSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";

const StartButton = () => {
  const dispatch = useDispatch();
  const resetApp = () => {
    dispatch(reset());
    dispatch(startQuestion());
  };
  return (
    <Link
      onClick={resetApp}
      href="/twoOption"
      className="bg-white lg:px-24 md:px-20 px-14 md:py-2 py-1 rounded-xl text-primaryColor border-2 border-black mt-2 right-[10%] bottom-[16%] border-b-4 hover:scale-90 transition-transform duration-200"
    >
      شروع
    </Link>
  );
};

export default StartButton;
