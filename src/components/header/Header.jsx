import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/FOTO.png'
import HeaderSocials from './HeaderSocials'
import  '../../utils/i18n'
import { useTranslation } from 'react-i18next'

const Header = () => {

  const {t,i18n} = useTranslation();

  const changeLanguage = value => {
    i18n.changeLanguage(value)
    .then( () => {
      console.log("LINGUAGEM ALTERADA")
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <header>
      <h5 className='titulo'>Idiomas</h5>
    <div className='ctaidiomas'>
        <button onClick = {() => changeLanguage('en')} href='#' className='btn-idiomas'>Inglês</button>
        <button onClick = {() => changeLanguage('pt')} href='#' className='btn-idiomas'>Português</button>
        <button onClick = {() => changeLanguage('fr')} href="#" className='btn-idiomas'>Français</button>
    </div>
      <div className="container header__container">
        <h5>{t('Olá - Seja Bem-vindo ! Eu Sou')} </h5>
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