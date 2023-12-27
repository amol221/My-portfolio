import React from "react";
import "./footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Amol
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.instagram.com/amol_25470/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/amol221">
          <BsLinkedin />
        </a>
        <a href="https://www.linkedin.com/in/amol-nilkanthe-27560b1b8/">
          <FaGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Amol Nilkanthe - All right reserved</small>
      </div>
    </footer>
  );
};

export default footer;
