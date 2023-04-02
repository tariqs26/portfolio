import './Hamburger.css';

type HamburgerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  menuRef: React.RefObject<HTMLDivElement>;
};
export default function Hamburger({ open, setOpen, menuRef }: HamburgerProps) {
  return (
    <div className='hamburger'>
      <div
        className='bar-container'
        onClick={() => setOpen(!open)}
        aria-controls='menu'
        title='Menu'
        role='button'
      >
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <div
        className='menu hide'
        ref={menuRef}
        aria-expanded={open}
        onClick={(e) => {
          e.target instanceof HTMLAnchorElement && setOpen(false);
        }}
      >
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </div>
    </div>
  );
}
