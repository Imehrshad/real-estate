"use client";

import { addAnswer, increaseSteps } from "@/redux/features/questionSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDangerous } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const NextQuestion = ({ selectedItem, setSelectedItem }) => {
  const state = useSelector((state) => state.question);
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState(false);

  const clickHandler = () => {
    if (selectedItem === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    } else {
      setError(false);
      dispatch(increaseSteps());
      dispatch(addAnswer(selectedItem));
      setSelectedItem("");
    }
  };
  useEffect(() => {
    if (state.step === state.totalStep) {
      router.push("/formSubmitting");
    }
  }, [state.step]);

  return (
    <>
      <button
        onClick={clickHandler}
        className="text-white  bg-secondaryColor w-10/12 py-3 rounded-lg border-2 border-primaryColor hover:scale-95 transition-transform duration-200"
      >
        بعدی
      </button>

      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={() => setError(false)}
            className="max-w-[500px] w-full h-full fixed bg-black/5 backdrop-blur-sm top-0 flex justify-center items-center"
          >
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 0.3, duration: 0.5 }}
              exit={{ opacity: 0, y: 200, transition: { duration: 0.2 } }}
              className="w-2/3 bg-white py-10 rounded-xl px-10 relative shadow-[0_0_50px] shadow-red-500/30  border-red-600"
            >
              <p className="text-sm text-center mt-1 text-red-700">
                لطفا یک گزینه را انتخاب کنید
              </p>
              <MdDangerous
                className="text-red-600 absolute -top-[15%] left-1/2 -translate-x-1/2"
                size={45}
              />
            </motion.div>
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );
};

export default NextQuestion;
