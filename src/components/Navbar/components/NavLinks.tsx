import React from 'react';
import './NavLinks.css';

export default function NavLinks() {
  return (
    <div className='nav-links'>
      <a href='#about' className='link'>
        About
      </a>
      <a href='#projects' className='link'>
        Projects
      </a>
      <a href='#contact' className='link'>
        Contact
      </a>
    </div>
  );
}
