import { useEffect, useState } from "react";

export const useTopDetector = initialValue => {
  const [isAtTop, setIsAsTop] = useState(initialValue);

  useEffect(() => {
    const listenToScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = winScroll / height;

      setIsAsTop(scrolled === 0);
    };

    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return isAtTop;
};
