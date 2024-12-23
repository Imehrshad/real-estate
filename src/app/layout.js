"use client";
import { store } from "@/redux/store";
import { useEffect } from "react";
import { Provider } from "react-redux";
import "./globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    const setDynamicHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Set on load
    setDynamicHeight();

    // Update on resize
    window.addEventListener("resize", setDynamicHeight);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", setDynamicHeight);
    };
  }, []);
  return (
    <html lang="fa" dir="rtl">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <body className="m-auto max-w-[500px] overflow-x-hidden">
        <div className=" w-full h-screen">
          <Provider store={store}>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
