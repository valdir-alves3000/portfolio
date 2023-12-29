"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export function ScrollToTop() {
  const [showsScrolBtn, setShowScrolBtn] = useState(false);

  useEffect(() => {
    const handleButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowScrolBtn(true) : setShowScrolBtn(false);
    };

    window.addEventListener("scroll", handleButtonVisibility);
    return () => {
      window.addEventListener("scroll", handleButtonVisibility);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className={clsx(
        "right-10 bottom-10 p-2 bg-gray-600 shadow-2xl rounded transition-all z-40 animate-pulse",
        showsScrolBtn ? "fixed " : "hidden"
      )}
    >
      <AiOutlineArrowUp className="text-4xl text-gray-800" />
    </button>
  );
}
