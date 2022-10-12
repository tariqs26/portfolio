import { useEffect, useState } from 'react';

export default function useNavShadow() {
  const [pos, setPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      (pos <= 20 || window.scrollY <= 20) && setPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pos]);

  useEffect(() => {    
    if (pos >= 20) document.querySelector(".nav")?.classList.add("nav-shadow");
    else document.querySelector(".nav")?.classList.remove("nav-shadow");
  }, [pos]);
} 