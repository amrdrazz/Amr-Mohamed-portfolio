import React from 'react'
import './footer.css'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>Amr Mohamed</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_social">
        <a href="https://www.facebook.com/share/194qyZ72tV/" target='_blank'><FaFacebookF /></a>
        <a href="https://www.instagram.com/amm_or12?igsh=ZGtsaXd6bG0yMWNj" target='_blank'><FaInstagram /></a>
        <a href="https://www.tiktok.com/@amor09310?_r=1&_t=ZS-98eux1eLs7J" target='_blank'><FaTiktok /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; <a href="https://www.facebook.com/share/194qyZ72tV/">Amr Mohamed</a> All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
