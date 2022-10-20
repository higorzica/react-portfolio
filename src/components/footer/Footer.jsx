import React from 'react'
import './footer.css'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'
import  '../../utils/i18n'
import { useTranslation } from 'react-i18next'

const Footer = () => {

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
    <footer>
      <a href="#" className='footer__logo'>HZ-TECH</a>
      <ul className='permalinks'>
        <li><a href="#">{t('Início')}</a></li>
        <li><a href="#about">{t('História')}</a></li>
        <li><a href="#experience">{t('Experiência')}</a></li>
        <li><a href="#services">{t('Serviços')}</a></li>
        <li><a href="#portfolio">{t('Portfólio')}</a></li>
        <li><a href="#contact">{t('Contate-me')}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/higor-zica-dev-ti/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/higorzica" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/higor_zica/" target="_blank"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; HZ-TECH - Todos os direitos reservados
        </small>
      </div>

    </footer>
  )
}

export default Footer