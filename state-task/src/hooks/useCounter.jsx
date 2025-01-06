import React, {useState} from "react";
import useLocalStorage from "./useLocalStorage";

export default function useCounter() {
    const [key, value, setValue] = useLocalStorage("count", 0)
  

  function icrease() {
    setValue(value + 1);
  }
  function decrease() {
    setValue(value - 1);
  }

  return [value, icrease, decrease];
}
