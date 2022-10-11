import { useEffect, useState } from 'react';

export default function useNavShadow() {
  const [pos, setPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      (pos === 0 || window.scrollY === 0) && setPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pos]);

  useEffect(() => {    
    if (pos > 0) document.querySelector(".nav")?.classList.add("nav-shadow");
    else document.querySelector(".nav")?.classList.remove("nav-shadow");
  }, [pos]);
} 