import React, { useState, useEffect } from 'react';
import './Navbar.css';
import MenuButton from './MenuButton.jsx';
import Menu from './Menu.jsx';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 👇 NEW: scroll behavior
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${show ? 'show' : 'hide'}`}>
      <div className="navbar-left">Portfolio</div>

      <div className="navbar-center">
        <button className="nav-theme-button">
          <span className="special-letter">S</span>ugar Mae A. Doringo
        </button>
      </div>

      <div className="navbar-right">
        <MenuButton onClick={() => setIsOpen(true)} />
        <Menu open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </nav>
  );
}

export default Navbar;