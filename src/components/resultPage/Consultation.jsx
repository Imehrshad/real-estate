import React from "react";
import InstageramSvg from "./InstageramSvg";
import WhatsAppSvg from "./WhatsAppSvg";


const Consultation = () => {
  return (
    <div className="w-full bg-primaryColor p-5 flex justify-center items-center gap-2">
        <img src="/images/result/logo.png" alt="لوگو" className="w-14 h-14" />
      <section className="flex gap-2">
        <p className="whitespace-nowrap">مشاوره رایگان :</p>
        <p className="font-iransansNum font-bold">09123456789</p>
      </section>
      <section className=" flex gap-2">
        <a href="">
          <WhatsAppSvg className="w-10 h-10" />
        </a>
        <a href="">
          <InstageramSvg className="w-12 h-12" />
        </a>
      </section>
    </div>
  );
};

export default Consultation;
