import { useEffect, useState } from 'react';
import useAnimations from 'hooks/useAnimations';
import Navbar from 'components/Navbar/Navbar';
import Intro from 'components/Intro/Intro';
import About from 'components/About/About';
import Projects from 'components/Projects/Projects';
import Contact from 'components/Contact/Contact';

import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setDarkMode(theme === 'light');
    window.location.href = '/#';
  }, []);
  
  useEffect(() => {
    document.body.classList.toggle('light', darkMode);
  }, [darkMode]);

  const setDarkModeHandler = (darkMode: boolean) => {
    setDarkMode(darkMode);
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
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
