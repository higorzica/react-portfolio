import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/FOTO.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá - Seja Bem-vindo ! Eu Sou </h5>
        <h1>Higor Zica</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="HigorZica" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header