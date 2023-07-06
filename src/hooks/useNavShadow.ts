import { useEffect } from "react"

export default function useNavShadow() {
  useEffect(() => {
    const navList = (document.querySelector("nav") as HTMLElement).classList
    const handleScroll = () => {
      const contains = navList.contains("nav-shadow")
      if (window.scrollY > 20) !contains && navList.add("nav-shadow")
      else contains && navList.remove("nav-shadow")
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
}
