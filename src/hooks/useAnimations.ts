import { useEffect, useRef } from "react";

export default function useAnimations() {
  const mainRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target;
          const sectionContent = section.querySelector(".section-content");
          const sectionText = section.querySelector(".section-heading");
          const sectionTextH2 = section.querySelector(".section-heading h2");
          const sectionRule = section.querySelector(".section-heading-rule");

          if (entry.isIntersecting) {
            for (let elem of [sectionContent, sectionText])
              elem!.classList.remove("hidden");
            for (let elem of [sectionTextH2, sectionRule])
              elem!.classList.add("animation");
          }
        });
      },
      { threshold: 0.5 }
    );

    mainRef.current &&
      (mainRef.current as HTMLElement)
        .querySelectorAll(".section-container")
        .forEach((section) => {
          observer.observe(section);
        });
  }, [mainRef]);

  return mainRef;
}
