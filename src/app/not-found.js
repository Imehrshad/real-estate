import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" no-select relative h-full text-xl w-full flex justify-center items-center flex-col bg-primaryColor">
      <h1 className="z-10">صفحه مورد نظر پیدا نشد</h1>
      <Link href="/" className="text-sm z-10">
        {" "}
        بازگشت به صفحه اصلی
      </Link>
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute scale-[3] opacity-50"
      >
        <rect
          x="1.92494"
          y="24.0164"
          width="45.7945"
          height="45.7945"
          rx="4"
          transform="rotate(-28.8426 1.92494 24.0164)"
          stroke="#E1A302"
          strokeWidth="6"
        />
        <rect
          x="14.1866"
          y="27.5691"
          width="27.7397"
          height="27.7397"
          rx="3.5"
          transform="rotate(-28.8426 14.1866 27.5691)"
          stroke="#E1A302"
          strokeWidth="5"
        />
      </svg>
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute  top-32 left-20  contrast-[0.95]"
      >
        <rect
          x="1.92494"
          y="24.0164"
          width="45.7945"
          height="45.7945"
          rx="4"
          transform="rotate(-28.8426 1.92494 24.0164)"
          stroke="#E1A302"
          strokeWidth="6"
        />
        <rect
          x="14.1866"
          y="27.5691"
          width="27.7397"
          height="27.7397"
          rx="3.5"
          transform="rotate(-28.8426 14.1866 27.5691)"
          stroke="#E1A302"
          strokeWidth="5"
        />
      </svg>
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute  bottom-32 right-20 contrast-[0.95]"
      >
        <rect
          x="1.92494"
          y="24.0164"
          width="45.7945"
          height="45.7945"
          rx="4"
          transform="rotate(-28.8426 1.92494 24.0164)"
          stroke="#E1A302"
          strokeWidth="6"
        />
        <rect
          x="14.1866"
          y="27.5691"
          width="27.7397"
          height="27.7397"
          rx="3.5"
          transform="rotate(-28.8426 14.1866 27.5691)"
          stroke="#E1A302"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}
