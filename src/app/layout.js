"use client";
import { store } from "@/redux/store";
import { useEffect } from "react";
import { Provider } from "react-redux";
import "./globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    const setFullHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setFullHeight();
    window.addEventListener("resize", setFullHeight);

    return () => {
      window.removeEventListener("resize", setFullHeight);
    };
  }, []);

  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className="m-auto max-w-[500px] overflow-x-hidden">
        <div className="w-full" style={{ height: "calc(var(--vh) * 100)" }}>
          <Provider store={store}>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
