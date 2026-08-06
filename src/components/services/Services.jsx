import React from 'react'
import './services.css'

import { MdOutlineWeb } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

function Services() {
  return (
    <section className="services" id="services">
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>

      <div className="container services_container">
        <article className="services_card">
          <MdOutlineWeb className='icon' />
          <h3>Web Development</h3>
          <p className='text-light'>Build secure and scalable web applications using React, Node.js, Express, and MongoDB with clean architecture and modern best practices.</p>
        </article>

        <article className="services_card">
          <IoIosRocket   className='icon '/>
          <h3>Fast Performance </h3>
          <p className='text-light'>Improve loading speed, optimize APIs, and enhance website performance to deliver a fast and smooth user experience.</p>
        </article>


        <article className="services_card">
          <FaCode  className='icon '/>
          <h3>Clean Code</h3>
          <p className='text-light'>Write maintainable, reusable, and secure code following industry standards to ensure reliability and long-term scalability.</p>
        </article>
      </div>
    </section>
  )
}

export default Services
