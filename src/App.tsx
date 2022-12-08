import { useEffect, useState } from 'react';
import useAnimations from 'hooks/useAnimations';
import Navbar from 'components/Navbar/Navbar';
import Intro from 'components/Intro/Intro';
import About from 'components/About/About';
import Projects from 'components/Projects/Projects';
import Contact from 'components/Contact/Contact';

import './App.css';

export default function App() {
  useEffect(() => {
    window.location.href = '/#';
  }, []);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const setDarkModeHandler = (darkMode: boolean) => {
    setDarkMode(darkMode);
    document.body?.classList.toggle('light');
  };

  useAnimations();

  return (
    <div className='App'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkModeHandler} />
      <main>
        <Intro />
        <div className='spacer' id='about' />
        <About />
        <div className='spacer spacer2' id='projects' />
        <Projects />
        <div className='spacer' id='contact' />
        <Contact />
      </main>
    </div>
  );
}
