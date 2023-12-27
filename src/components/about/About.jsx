import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/profilepic.jpg";
const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img
              src={ME}
              style={{ width: "310px", height: "320px" }}
              alt="About Image"
            />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Year Experience</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Education</h5>
              <small>MCA - Pune University</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Projects</small>
            </article>
          </div>
          <p>
            <strong style={{ color: "yellow", fontSize: "larger" }}>
              I am{" "}
            </strong>
            highly motivated and enthusiastic recent graduate with a passion for
            work in IT filed.{" "}
            <span>
              <strong style={{ color: "yellow" }}>A quick learner</strong>
            </span>{" "}
            with a strong academic backgroundand relevant internships. Possesses
            excellent communication and teamwork skills, combined with a
            proactive attitude. Eager to contribute fresh ideas and make a
            positive impact as I embark on my professional journey.{" "}
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
