"use client";
import { useRef } from "react";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  return (
    <div
      className="flex w-full justify-start items-center flex-col"
    >
      <div className="w-full flex justify-between items-center p-3 ">
        <p className="text-sm font-light">{item.question}</p>
        <RiArrowDropDownLine
          size={40}
          className={`cursor-pointer transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180":"rotate-0"}`}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      <p
      ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className={`text-[0.75rem] overflow-hidden transition-all duration-300 ease-in-out px-3`}
      >
        {item.answer}
      </p>
    </div>
  );
};

export default DropDown;
