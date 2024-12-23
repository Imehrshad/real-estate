"use client";

import { useSelector } from "react-redux";

const PercentageIndicator = () => {
  const state = useSelector((state) => state.question);

  return (
    <p className="text-[0.75rem]">
      <strong className="font-iransansNum font-bold">
        {Math.floor((100 - (state.step * 100) / state.totalStep))}
      </strong>
      {"%  "}
      تا کامل شدن
    </p>
  );
};

export default PercentageIndicator;
