import { useState } from 'react';

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const setDarkModeHandler = (darkMode: boolean) => {
    setDarkMode(darkMode);
    const root = document.querySelector(':root');
    darkMode && root?.classList.add('light');
    !darkMode && root?.classList.remove('light');
  };
  return [darkMode, setDarkModeHandler];
}
