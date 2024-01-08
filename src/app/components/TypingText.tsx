"use client";

import { useEffect } from "react";
import Typed from "typed.js";

export function TypingText({ text }: { text: string }) {
  useEffect(() => {
    const options = {
      strings: [text],
      typeSpeed: 100,
      backSpeed: 50,
    };

    const typed = new Typed(".typing-text", options);

    return () => {
      typed.destroy();
    };
  }, [text]);

  return <span className="typing-text"> </span>;
}
