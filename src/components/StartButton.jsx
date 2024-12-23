"use client";
import { reset, startQuestion } from "@/redux/features/questionSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";

const StartButton = () => {
  const dispatch = useDispatch();
  const resetApp = () => {
    dispatch(reset())
    dispatch(startQuestion());
  };
  return (
    <Link
      onClick={resetApp}
      href="/twoOption"
      className="bg-white px-24 py-2 rounded-xl text-primaryColor border-2 border-black absolute right-[10%] bottom-[16%] border-b-4 hover:scale-90 transition-transform duration-200 "
    >
      شروع
    </Link>
  );
};

export default StartButton;
