import React from 'react';
import './Hamburger.css';

export default function Hamburger({ open, setOpen, menuRef }) {
  return (
    <div className='hamburger'>
      <div className='bar-container' onClick={() => setOpen(!open)}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <div className='menu hide' ref={menuRef}>
        <a href='#about' className='link' onClick={() => setOpen(false)}>
          About
        </a>
        <a href='#projects' className='link' onClick={() => setOpen(false)}>
          Projects
        </a>
        <a href='#contact' className='link' onClick={() => setOpen(false)}>
          Contact
        </a>
      </div>
    </div>
  );
}
