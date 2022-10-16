import { useEffect, useRef } from "react";

export default function useAnimations() {
  const mainRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target;
          const sectionTextH2 = section.querySelector(".section-heading h2");
          const sectionRule = section.querySelector(".section-heading-rule");
          if (entry.isIntersecting) {
            for (let elem of section.querySelectorAll(".hidden"))
              elem && elem.classList.remove("hidden");
            for (let elem of [sectionTextH2, sectionRule])
              elem && elem.classList.add("animation");
          }
        });
      },
      { threshold: 0.6 }
    );

    setTimeout(() => {
      mainRef.current &&
        (mainRef.current as HTMLElement)
          .querySelectorAll(".section-container")
          .forEach((section) => {
            observer.observe(section);
          });
    }, 1000);
  }, [mainRef]);

  return mainRef;
}
