import { useEffect, useState } from 'react';
import useAnimations from 'hooks/useAnimations';
import Navbar from 'components/Navbar/Navbar';
import Hero from 'components/Hero/Hero';
import About from 'components/About/About';
import Projects from 'components/Projects/Projects';
import Contact from 'components/Contact/Contact';
import Footer from 'components/Footer/Footer';

import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem('theme') !== 'light'
  );
  useEffect(() => {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    !darkMode && document.body.classList.add('light');
  }, []);

  const setDarkModeHandler = (darkMode: boolean) => {
    setDarkMode(darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.body.classList.toggle('light');
  };
  useAnimations();

  return (
    <div className='App'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkModeHandler} />
      <main>
        <Hero />
        <About />
        <div className='spacer spacer2' />
        <Projects />
        <div className='spacer' />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
