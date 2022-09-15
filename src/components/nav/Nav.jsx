import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser,AiOutlineMessage} from 'react-icons/ai'
import {RiInformationFill,RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('')
  return (
    <nav>
      <a href="#" title='Home' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><AiOutlineHome/></a>
      <a href="#about" title='About' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><AiOutlineUser/></a>
      <a href="#experience" title='Experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><RiInformationFill/></a>
      <a href="#services" title='Services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : '' }><RiServiceLine/></a>
      <a href="#contact" title='Contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav