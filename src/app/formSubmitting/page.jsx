"use client";

import MyForm from "@/components/MyForm";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const page = () => {
  const formRef = useRef();
  const router = useRouter();
  const submitForm = () => {
    formRef.current.submitForm();
  };
  return (
    <div className=" no-select w-full h-full flex justify-between items-center flex-col relative">
      <img
        src="/images/form submitting/backgroundImage.png"
        alt="تصویر پس زمینه"
        className="w-full aspect-square h-[35%]"
      />
      <div className="px-8 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full  ">
        <div className=" bg-primaryColor rounded-lg gap-5   py-16 px-6 flex justify-start items-center flex-col text-sm ">
          <h4>برای دریافت پاسخ سوالات اطلاعات خود را وارد نمایید</h4>
          <MyForm formRef={formRef} />
        </div>
      </div>
      <div className=" px-8 py-2 flex justify-center items-center w-full mb-5">
        <button
          onClick={submitForm}
          className="text-white no-select bg-secondaryColor w-10/12 py-3 rounded-lg border-2 border-primaryColor hover:scale-95 transition-transform duration-200  "
        >
          ثبت اطلاعات
        </button>
      </div>
    </div>
  );
};

export default page;
