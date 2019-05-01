import { useEffect, useState } from "react";

/**
 * A listener for Checkbox
 * @param initialValue {boolean} default value
 * @return { [ boolean, function ] }
 */
export const useCheckbox = initialValue => {
  const [value, setValue] = useState(initialValue);
  const updateValue = event => setValue(event.target.checked);
  return [value, updateValue];
};

/**
 * A listener for Text's Fields
 * @param initialValue {string} default value
 * @return { [ string, function ] }
 */
export const useTextListener = initialValue => {
  const [value, setValue] = useState(initialValue);
  const updateValue = event => setValue(event.target.value);
  return [value, updateValue];
};

/**
 * Flip a {boolean} value
 * @param initialValue {boolean} default value
 * @return { [ boolean, function ] }
 */
export const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);
  const flipValue = () => setValue(!value);
  return [value, flipValue];
};

/**
 * Detect whether the page is at top-scroll position
 * @param initialValue {boolean} default value before the listener has been triggered
 * @return { boolean }
 */
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
