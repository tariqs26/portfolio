import { useState, useRef, useEffect } from "react";

export default function useNavMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    menuRef.current &&
      (open
        ? (menuRef.current as HTMLElement).classList.remove("hidden")
        : (menuRef.current as HTMLElement).classList.add("hidden"));
  }, [open]);

  return { open, setOpen, menuRef };
}
