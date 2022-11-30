import './Hamburger.css';

export default function Hamburger({
  open,
  setOpen,
  menuRef,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  menuRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div className='hamburger'>
      <div className='bar-container' onClick={() => setOpen(!open)}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <div className='menu hide' ref={menuRef}>
        <a href='#about' onClick={() => setOpen(false)}>
          About
        </a>
        <a href='#projects' onClick={() => setOpen(false)}>
          Projects
        </a>
        <a href='#contact' onClick={() => setOpen(false)}>
          Contact
        </a>
      </div>
    </div>
  );
}
