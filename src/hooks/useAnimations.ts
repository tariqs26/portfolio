import { useEffect } from 'react';

export default function useAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const animate = entry.target.querySelectorAll(
            'h3, .section-heading-rule'
          );          
          if (entry.isIntersecting) {
            for (let elem of entry.target.querySelectorAll('.hidden'))
              elem.classList.remove('hidden');
            for (let elem of animate) elem.classList.add('animation');
          }
        });
      },
      { threshold: 0.6 }
    );

    setTimeout(() => {
        document
          .querySelectorAll('.section-container')
          .forEach((section) => {
            observer.observe(section);
          });
    }, 1000);
  }, []);
}
