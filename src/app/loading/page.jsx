"use client";
import { useEffect, useState } from "react";
import ProgressBar from "react-svg-progressbar";

const Loading = () => {
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setProgressBar((prev) => prev + 10), 500);

    return () => timeout(clearTimeout);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <ProgressBar
        size={150} // Size of the circle
        progress={progressBar} // Progress percentage
        strokeWidth={8} // Thickness of the progress bar
        trackColor="#e5e7eb" // Background circle color
        indicatorColor="#E5AA27" // Progress indicator color
        text={`${progressBar}%`} // Text to display inside the circle
        textColor="#E5AA27" // Text color
        textStyle={{ fontSize: "16px", fontWeight: "bold" }} // Text styling
      />
      <p className="text-primaryColor mt-4">درحال پردازش اطلاعات شما ...</p>
    </div>
  );
};

export default Loading;
