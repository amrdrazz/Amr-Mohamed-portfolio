import React from 'react'

import './about.css'

import ImageMe from '../../assets/me-about.jpeg'

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ImageMe} alt="" />
          </div>
        </div>

        <div className="about_content">

          <div className="about_cards">

            <div className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </div>

            <div className="about_card">
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </div>

            <div className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </div>
          </div>

          <p>
            I'm a Full-Stack Developer focused on creating fast, responsive, and scalable web 
            applications. I combine clean development practices with creative design skills, including 
            video editing and graphic design, to build complete digital experiences. I enjoy solving 
            problems, learning new technologies, and delivering work that makes an impact.
          </p>

          <a href="#contact" className="btn btn-primary">let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
