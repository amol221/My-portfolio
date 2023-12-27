import React from "react";
import "./portfolio.css";
import img1 from "../../assets/My-portfolio.jpg";
import img2 from "../../assets/Alumni's-payroll-system.jpg";
import img3 from "../../assets/Inventory_management.jpg";
import img4 from "../../assets/Avada-web-clone.jpg";
import img5 from "../../assets/task-manager.jpg";
import img6 from "../../assets/projectimg.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "My Portfolio",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: img2,
    title: "Alumni's payroll system",
    github: "https://github.com/amol221/assitancepayrollsystem",
    demo: "https://github.com/amol221/assitancepayrollsystem",
  },
  {
    id: 3,
    image: img3,
    title: "Inventory management",
    github: "https://github.com/amol221/neu_edge_assesment",
    demo: "https://github.com/amol221/neu_edge_assesment",
  },
  {
    id: 4,
    image: img4,
    title: " Avada Clone App",
    github: "https://github.com/amol221/web-clone",
    demo: "https://github.com/amol221/web-clone",
  },
  {
    id: 5,
    image: img5,
    title: "Task Manager",
    github: "https://github.com/amol221/Real-time-task-management-app",
    demo: "https://github.com/amol221/Real-time-task-management-app",
  },
  {
    id: 6,
    image: img6,
    title: "Coming Soon...",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_items">
              <div className="portfolio_item-image">
                <img src={image} alt="{title}" />
              </div>
              <h3> {title}</h3>
              <div className="portfolio_items-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
