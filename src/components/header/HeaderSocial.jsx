import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const headerSocial = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/amol-nilkanthe-27560b1b8/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/amol221" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/amol_25470/" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
};

export default headerSocial;
