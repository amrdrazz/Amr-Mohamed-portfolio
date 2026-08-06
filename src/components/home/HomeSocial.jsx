import React from 'react'

import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";

function HomeSocial() {
  return (
    <div className='home_social'>
      <a href="https://www.linkedin.com/in/amr-abbas-?utm_source=share_via&utm_content=profile&utm_medium=member_android" target='_blank'><FaLinkedin /></a>
      <a href="https://github.com/amrdrazz" target='_blank'><FaGithub /></a>
      <a href="#" target='_blank'><FaDribbble /></a>
    </div>
  )
}

export default HomeSocial
