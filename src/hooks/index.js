import { useEffect, useState } from "react";

export const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue)

  const flipValue = (optionalValue = !value) => setValue(optionalValue)

  return [value, flipValue]
}

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
