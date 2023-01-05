import useNavShadow from 'hooks/useNavShadow';
import useNavMenu from 'hooks/useNavMenu';
import { LogoIcon, DarkIcon, LightIcon } from 'components/Icons';
import Hamburger from './components/Hamburger';
import NavLinks from './components/NavLinks';
import './Navbar.css';

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  useNavShadow();
  const { open, setOpen, menuRef } = useNavMenu();
  return (
    <nav className='nav'>
      <a
        href='/#top'
        aria-label='Home'
        onClick={() => {
          setOpen(false);
        }}
      >
        <LogoIcon />
      </a>
      <NavLinks />
      <Hamburger {...{ open, setOpen, menuRef }} />
      <div className='mode-container'>
        {darkMode ? (
          <DarkIcon onClick={() => setDarkMode(false)} />
        ) : (
          <LightIcon onClick={() => setDarkMode(true)} />
        )}
      </div>
    </nav>
  );
}
