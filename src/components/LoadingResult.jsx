"use client";
import LoadingSvg from "@/components/LoadingSvg";
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LoadingResult = () => {
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setProgressBar((prev) => prev + 25), 500),
      setTimeout(() => setProgressBar((prev) => prev + 25), 1000),
      setTimeout(() => setProgressBar((prev) => prev + 25), 1500),
      setTimeout(() => setProgressBar((prev) => prev + 25), 1800),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col relative">
      <LoadingSvg className="absolute top-0 left-0" />
      <div className="w-40 h-40">
        <CircularProgressbar
          value={progressBar}
          text={`${progressBar}%`}
          styles={buildStyles({
            textSize: "16px",
            pathColor: "#E5AA27",
            textColor: "#E5AA27",
            trailColor: "#e5e7eb",
            textStyle: {
              fontFamily: "font-iransansNum",
              fontWeight: "bold",
            },
          })}
        />
      </div>
      <p className="text-primaryColor mt-4">درحال پردازش اطلاعات شما ...</p>
      <LoadingSvg className="absolute bottom-0 rotate-180 right-0" />
    </div>
  );
};

export default LoadingResult;
