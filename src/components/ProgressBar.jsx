"use client";

import { useSelector } from "react-redux";

const ProgressBar = () => {
  const state = useSelector((state) => state.question);
  return (
    <label className="w-full relative bg-zinc-200 rounded-md h-3">
      <span
        className={`absolute left-0 h-full rounded-md bg-secondaryColor w-1  transition-all duration-300`}
        style={{ width: (state.step * 100) / state.totalStep+"%" }}
      ></span>
    </label>
  );
};

export default ProgressBar;
