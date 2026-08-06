import React from "react";

import "./skills.css";

import CSS from "../../assets/css3.svg";
import Xpressjs from "../../assets/expressjs.svg";
import Figma from "../../assets/figma.svg";
import Javascript from "../../assets/javascript.svg";
import Mongodb from "../../assets/mongodb.svg";
import Nodejs from "../../assets/nodejs.svg";
import ReactJS from "../../assets/react.svg";
import Tailwind from "../../assets/tailwindcss.svg";

function Skills() {
  const skillsData = [
    { id: 0, image: CSS, title: "CSS", disc: "User Interface" },
    { id: 1, image: Javascript, title: "JavaScript", disc: "Interaction" },
    { id: 2, image: ReactJS, title: "React", disc: "Framework" },
    { id: 3, image: Tailwind, title: "TailwindCSS", disc: "User Interface" },
    { id: 4, image: Nodejs, title: "NodeJS", disc: "Web Server" },
    { id: 5, image: Figma, title: "Figma", disc: "Design tool" },
    { id: 6, image: Xpressjs, title: "ExpressJS", disc: "Node Framework" },
    { id: 7, image: Mongodb, title: "MongoDB", disc: "Database" },
  ];
  return (
    <section className="skills" id="skills">
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Expreience</h2>
      </div>

      <div className="container skills_container">
        {skillsData.map(({ id, image, title, disc }) => (
          <article key={id} className="skills_card">
            <div className="icon">
              <img src={image} alt="" />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text_light">{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
