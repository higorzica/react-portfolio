import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import  '../../utils/i18n'
import { useTranslation } from 'react-i18next'

const Services = () => {

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
    <section id='services'>
      <h5>{t('O que eu ofereço?')}</h5>
      <h2>{t('Meus Serviços')}</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{t('Criação de interfaces mais fáceis e amigáveis.')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{t('Elaboração de ideias para: botões, tipografia, ícones e cores.')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{t('Foco em melhorar experiência do usuário.')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{t('Materializar os sonhos do clientes por meio dos seus produtos e serviços.')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{t('Criar mecanismos que guiam o usuário pelas interfaces gráficas e visuais.')}</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{t('Especialista em desenvolvimento de sistemas para a internet.')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{t('Objetivo de transformar seu site em uma excelente experiência a quem irá usar.')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{t('Manutenção em bancos de dados, armazenamento e atualização de informações, a fim de atender o volume de internautas e seu correto funcionamento.')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{t('Levar a ideia do cliente a um patamar executável de negócio.')}</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services