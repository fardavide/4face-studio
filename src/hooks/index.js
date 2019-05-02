import { useEffect, useState } from "react";
import { currentLang, setCurrentLang } from "../res/strings";

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
 * Change the language of the App
 * @return { function }
 */
export const useLanguage = () => {
  const [_, setValue] = useState(currentLang);
  return lang => {
    setCurrentLang(lang);
    setValue(lang);
  };
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
 * Set a {*} value for the state, if the value is not {defaultValue}, set {defaultValue} after the declared {millis}
 * @param defaultValue {*} initial and default value, it will be set every time after {millis}
 * @param millis {number} milliseconds before restore {defaultValue}
 * @param unstableValues {*|*[]} An object or an Array of value that needs to return to {defaultValue} after {millis}
 */
export const useTimeout = ({ defaultValue, millis, unstableValues }) => {
  const [value, setValue] = useState(defaultValue);
  const updateValue = newValue => {
    setValue(newValue);
    try {
      if (unstableValues === newValue || unstableValues.includes(newValue))
        setTimeout(() => setValue(defaultValue), millis);
    } catch (e) {
      console.log(e);
    }
  };
  return [value, updateValue];
};

/**
 * Flip a {boolean} value for the state
 * @param initialValue {boolean} initial value
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
