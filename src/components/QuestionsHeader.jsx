"use client";

import { decreaseSteps } from "@/redux/features/questionSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const QuestionsHeader = () => {
  const state = useSelector((state) => state.question);
  const router = useRouter();
  const dispatch = useDispatch();
  const clickHandler = () => {
    if (state.step === 1) {
      router.push("/twoOption");
    } else {
      dispatch(decreaseSteps());
    }
  };
  return (
    <div
      className="flex justify-center items-center gap-1 cursor-pointer"
      onClick={clickHandler}
    >
      <p>قبلی</p>
      <svg
        width="27"
        height="22"
        viewBox="0 0 27 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.8333 15.5833L13.25 11"
          stroke="#292929"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.25 11L17.8333 6.41667"
          stroke="#292929"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.8333 15.5833L8.25 11"
          stroke="#E1A302"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.25 11L12.8333 6.41667"
          stroke="#E1A302"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default QuestionsHeader;
