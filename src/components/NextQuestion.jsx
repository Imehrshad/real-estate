"use client";

import { increaseSteps } from "@/redux/features/questionSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const NextQuestion = () => {
  const state = useSelector((state) => state.question);
  const dispatch = useDispatch();
  const router = useRouter();

  const clickHandler = () => {
    dispatch(increaseSteps());
  };
  useEffect(() => {
    if (state.step === state.totalStep) {
      router.push("/formSubmitting");
    }
  }, [state.step]);

  return (
    <button
      onClick={clickHandler}
      className="text-white bg-secondaryColor w-10/12 py-3 rounded-lg border-2 border-primaryColor hover:scale-95 transition-transform duration-200"
    >
      بعدی
    </button>
  );
};

export default NextQuestion;
