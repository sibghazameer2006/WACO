"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setHidden(true);
      document.body.style.overflow = "";
    }, 2000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="preloader" data-hidden={hidden} aria-hidden={hidden}>
      <div className="preloader-mark">
        <span className="preloader-word">Waqas Afzal &amp; Co.</span>
        <span className="preloader-bar" />
      </div>
    </div>
  );
}
