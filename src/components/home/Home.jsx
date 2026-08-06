import React from 'react'
import './home.css'

import CV from '../../assets/cv.pdf'

import Me from '../../assets/me.png'
import HomeSocial from './HomeSocial'

function Home() {
  return (
    <div className='home'>
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Amr Mohamed</h1>
        <h4 className='text-light'>Full Stack Web Developer</h4>

        <div className="btns">
          <a href={CV} className="btn" download>Download CV</a>
          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>

        <div className="me">
          <img src={Me} alt="" />
        </div>

        <a href="#about" className='scroll_down'>Scroll Down</a>

        <HomeSocial />
      </div>
    </div>
  )
}

export default Home
