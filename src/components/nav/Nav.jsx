import React, { useState } from 'react';
import './nav.css';
import { IoIosHome } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import { FaSuitcase } from 'react-icons/fa';
import { GrServices } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <IoIosHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <FaSuitcase />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <GrServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BsFillTelephoneFill />
      </a>
    </nav>
  );
};

export default Nav;
