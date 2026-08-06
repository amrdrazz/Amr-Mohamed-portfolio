import React, {useRef} from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import emailjs from '@emailjs/browser'

const ContactData = [
  {
    id:0,
    icon: <MdOutlineEmail />,
    title:"Email",
    info: "amr.draz.2009@gmail.com",
    link: "mailto:amr.draz.2009@gmail.com",
  },
  {
    id:1,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Amr Mohamed",
    link: "https://m.me/macro.yz.871835",
  },
  {
    id:2,
    icon: <BsWhatsapp />,
    title:"WhatsApp",
    info: "01553477287",
    link: "https://api.whatsapp.com/send?phone=201553477287",
  }
]

function Contact() {

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICES_ID;
  const templatwId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templatwId, form.current, publicId)
    
    e.target.reset()
  };
  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({id, icon, title, info, link}) => (
            <article key={id} className='contact_option'>
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target='_blank'>Send Message</a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail} action="">
          <input type="text" placeholder='Full Name' name='name'/>
          <input type="email" placeholder='Your email' name='email'/>
          <textarea rows={10} name="message" id="" placeholder='Inter Your Message'></textarea>
          <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
