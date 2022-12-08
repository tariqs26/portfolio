import { useState, useRef, useEffect } from 'react';

export default function useNavMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = menuRef.current as HTMLElement;
    const arr = menu.parentElement as HTMLElement;
    if (open) {
      menu.classList.remove('hide');
      for (let bar of arr.querySelectorAll('.bar'))
        bar.classList.toggle('anim');
    } else {
      menu.classList.add('hide');
      for (let bar of arr.querySelectorAll('.bar'))
        bar.classList.remove('anim');
    }
  }, [open]);

  return { open, setOpen, menuRef };
}
