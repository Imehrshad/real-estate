"use client";

import { FaCaretLeft } from "react-icons/fa";

const ResultBox = () => {
  return (
    <div className="w-full flex justify-center items-center px-8 py-5 ">
      <div className="w-full bg-primaryColor border-secondaryColor flex items-start justify-start flex-col gap-3 border rounded-lg px-5 py-10">
        <div className="flex gap-2 items-center justify-start">
          <FaCaretLeft className="text-secondaryColor" />
          <p> مشاوره مالی:</p>
        </div>
        <p className="text-sm ">
          <strong className="font-bold text-base p-1">راهکار :</strong> مشاوره
          با یک مشاور مالی جهت بررسی دقیق وضعیت مالی و انتخاب بهترین روش پرداخت.
        </p>
        <p className="text-sm ">
          <strong className="font-bold text-base p-1">توضیح :</strong>
          مشاور مالی می‌تواند شما را راهنمایی کند که چگونه بودجه خود را مدیریت
          کرده و بهترین گزینه‌های پرداخت اقساط را انتخاب کنید.
        </p>
        <div className="flex gap-2 items-center justify-start">
          <FaCaretLeft className="text-secondaryColor" />
          <p> پیش‌ پرداخت بالا:</p>
        </div>
        <p className="text-sm ">
          <strong className="font-bold text-base p-1">راهکار :</strong>
          افزایش میزان پیش‌پرداخت به منظور کاهش مبلغ اقساط ماهیانه.
        </p>
        <p className="text-sm ">
          <strong className="font-bold text-base p-1">توضیح :</strong> با افزایش
          پیش‌پرداخت، می‌توانید میزان اقساط ماهیانه خود را کاهش دهید و بهره
          کمتری بپردازید.
        </p>
        <div className="flex gap-2 items-center justify-start">
          <FaCaretLeft className="text-secondaryColor" />
          <p> انتخاب وام‌های مناسب:</p>
        </div>
        <p className="text-sm ">
          <strong className="font-bold text-base p-1">راهکار :</strong> خرید
          بیمه مسکن برای حفاظت از سرمایه‌گذاری خود.
        </p>
        <p className="text-sm ">
          <strong className="font-bold text-base p-1">توضیح :</strong>
          بیمه مسکن می‌تواند شما را در برابر خسارات احتمالی حفاظت کند و اطمینان
          بیشتری به شما بدهد.
        </p>
      </div>
    </div>
  );
};

export default ResultBox;
