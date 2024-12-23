"use client";
import {
  addAnswer,
  increaseSteps,
  startQuestion,
} from "@/redux/features/questionSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const clickHandler = (value) => {
    dispatch(increaseSteps());
    dispatch(addAnswer(value));
  };
  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-3 no-select">
      <div className="relative w-full">
        <img
          src="/images/two question/logo.png"
          alt="لوگو"
          className="absolute top-3 right-2"
        />
        <img
          src="/images/two question/building.png"
          className="w-full"
          alt="ساختمان"
        />
        <span
          className="absolute w-full h-20 bottom-0 bg-gradient-to-t
from-white via-transparent to-transparent"
        ></span>
      </div>

      <div className="w-full text-center text-lg">
        برای ادامه یکی را انتخاب کنید
      </div>
      <div className="flex justify-center items-center  flex-col gap-5 w-full ">
        <Link
          href="/questions"
          className="border-2 border-primaryColor p-5 w-2/3 rounded-lg flex justify-center items-center flex-col gap-2 hover:shadow-[0_0_10px] !shadow-primaryColor hover:scale-95 duration-200 cursor-pointer"
          onClick={() => clickHandler("میخواهم بفروشم")}
        >
          <img
            src="/images/two question/first option.png"
            alt="میخواهم بفروشم"
          />
          <p>میخواهم بفروشم</p>
        </Link>
        <Link
          href="/questions"
          className="border-2 hover:shadow-[0_0_10px] !shadow-primaryColor hover:scale-95 duration-200 cursor-pointer border-primaryColor p-5 w-2/3 rounded-lg flex justify-center items-center flex-col gap-2"
          onClick={() => clickHandler("میخواهم بخرم")}
        >
          <img
            src="/images/two question/second option.png"
            alt="میخواهم بخرم"
          />
          <p>میخواهم بخرم</p>
        </Link>
      </div>
    </div>
  );
};

export default page;
