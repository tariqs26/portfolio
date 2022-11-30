import { useEffect, useRef } from 'react';

export default function useAnimations() {
  const mainRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const animate = entry.target.querySelectorAll(
            '.section-heading h2, .section-heading-rule'
          );          
          if (entry.isIntersecting) {
            for (let elem of entry.target.querySelectorAll('.hidden'))
              elem.classList.remove('hidden');
            for (let elem of animate) elem.classList.add('animation');
          }
        });
      },
      { threshold: 0.5 }
    );

    setTimeout(() => {
      mainRef.current &&
        (mainRef.current as HTMLElement)
          .querySelectorAll('.section-container')
          .forEach((section) => {
            observer.observe(section);
          });
    }, 1000);
  }, [mainRef]);

  return mainRef;
}
