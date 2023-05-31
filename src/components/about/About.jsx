import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.jpg'
import {FaAward} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {VscFolderActive} from 'react-icons/vsc'
import  '../../utils/i18n'
import { useTranslation } from 'react-i18next'

const About = () => {


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
    <section id='about'>
        <h2>{t('Minha História')}</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="Sobre" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>{t('Experiencia')}</h5>
                <small>{t('4+ Anos Trabalhando como Web Developer')}</small>
              </article>

              <article className='about__card'>
                <HiUsers className='about__icon' />
                <h5>{t('Clientes')}</h5>
                <small>{t('20+ por todo o Mundo')}</small>
              </article>

              <article className='about__card'>
                <VscFolderActive className='about__icon' />
                <h5>{t('Projetos')}</h5>
                <small>{t('3+ Completos')}</small>
              </article>
            </div>
            <p>
            {t('Meu nome é Higor Zica, sou técnico em informática e bacharel em Admnistração. Sou fascinado por programação e principalmente pelo desenvolvimento web/mobile, estando sempre a procura de conhecimento e novos desafios.')}</p>
            <a href="#contact" className='btn btn-primary'>{t('Contate-me')}</a>

          </div>
        </div>
    </section>
  )
}

export default About