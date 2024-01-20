import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const data = JSON.parse(localStorage.getItem(key));

    if (data === null) {
      return initialValue;
    }
    try {
      return data;
    } catch (e) {
      localStorage.removeItem(key);
      return data;
    }
  });

  const save = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setStoredValue(newValue);
  };

  return [storedValue, save];
}
