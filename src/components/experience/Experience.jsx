import React from "react";
import "./experience.css";
import { HiBadgeCheck } from "react-icons/hi";

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="company_worked">
        <h2>Nomura,Powai.</h2>
        <p>(Jan-2023 to june-2023)</p>
        <small>Analyst-Intern</small>
        <h3>Tech-stack : Python,flask,Html5,Css3,SQL,GIT,Linux</h3>
        <ul>
          <li>
            &#x2022; Developed MI Dashboard (Web Application) presenting
            analytics both visually and numerically.
          </li>
          <li>
            &#x2022; Application captures activities, maintains records, and
            visually displays key metrics like curation, endorsement, etc.
          </li>
          <li>&#x2022; Configured user management</li>
          <li>
            &#x2022; Executed data reconciliation processes to ensure data
            accuracy.
          </li>
          <li>
            &#x2022; Executed data reconciliation processes to ensure data
            accuracy.
          </li>
          <li>&#x2022; Leveraged REST APIs to pull data from the backend.</li>
          <li>
            &#x2022; Authored complex SQL queries for specific data retrieval.
          </li>
          <li>&#x2022; Utilized Jinja2 for data rendering to frontend.</li>
          <li>
            &#x2022; Utilized Html5,CSS,Chartjs for the frontend presentation,
            enhancing user interactivity.
          </li>
        </ul>
      </div>

      <div className="container exp_container">
        <div className="exp_frontend">
          <h3>Frontend Development</h3>
          <div className="exp_content">
            <article className="exp_details">
              <HiBadgeCheck className="exp_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <HiBadgeCheck className="exp_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>
            <article className="exp_details">
              <HiBadgeCheck className="exp_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>
            <article className="exp_details">
              <HiBadgeCheck className="exp_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>
            <article className="exp_details">
              <HiBadgeCheck className="exp_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="exp_backend">
          {/* end of front end */}
          <h3>Backend Development</h3>
          <div className="exp_content">
            <article className="exp_details">
              <HiBadgeCheck className="exp_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <HiBadgeCheck className="exp_details-icon" />
              <div>
                <h4>Flask</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>
            <article className="exp_details">
              <HiBadgeCheck className="exp_details-icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>
            <article className="exp_details">
              <HiBadgeCheck className="exp_details-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <HiBadgeCheck className="exp_details-icon" />
              <div>
                <h4>C\C++</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>
            <article className="exp_details">
              <HiBadgeCheck className="exp_details-icon" />
              <div>
                <h4>GIT</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <HiBadgeCheck className="exp_details-icon" />
              <div>
                <h4>Linux</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
