import useNavShadow from '../../hooks/useNavShadow';
import { LogoIcon, DarkIcon, LightIcon } from './components/Icons';
import Hamburger from './components/Hamburger';
import useNavMenu from '../../hooks/useNavMenu';
import NavLinks from './components/NavLinks';
import './Navbar.css';

export default function Navbar({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}) {
  useNavShadow();
  const { open, setOpen, menuRef } = useNavMenu();
  return (
    <nav className='nav'>
      <a
        href='/#'
        className='nav-a'
        onClick={() => {
          setOpen(false);
        }}
      >
        <LogoIcon />
      </a>
      <NavLinks />
      <Hamburger {...{ open, setOpen, menuRef }} />
      <div className='nav-icon-container'>
        {darkMode ? (
          <DarkIcon onClick={() => setDarkMode(false)} />
        ) : (
          <LightIcon onClick={() => setDarkMode(true)} />
        )}
      </div>
    </nav>
  );
}
