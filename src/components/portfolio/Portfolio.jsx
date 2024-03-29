import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/barbearia.png'
import IMG2 from '../../assets/pizzaria.png'
import IMG3 from '../../assets/salao.png'
import IMG4 from '../../assets/profmargaux.jpeg'
import IMG5 from '../../assets/profmargauxpacotes.png'
import IMG6 from '../../assets/nubank-proj.jpeg'
import IMG7 from '../../assets/nubank-mockup.png'
import IMG8 from '../../assets/AcademicSite.png'
import IMG9 from '../../assets/AcademicSuporte.png'
import IMG10 from '../../assets/blog2.png'
import IMG11 from '../../assets/blog1.png'
import IMG12 from '../../assets/site-info1.png'
import IMG13 from '../../assets/site-info2.png'
import  '../../utils/i18n'
import { useTranslation } from 'react-i18next'


const Portfolio = () => {

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
    <section id='portfolio'>
      <h5>
        {t('Meus trabalhos recentes')}
      </h5>
      <h2>{t('Portfólio')}</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>{t('Site Persolizável com Sistema de Gestão para Barbearias.')}</h3>
          <h5>{t('Responsivo para Mobile')}</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className='btn'>GitHub</a>
            <a href="#" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio1" />
          </div>
          <h3>{t('Site Persolizável com Sistema de Cadastro para Cardápio Online.')}</h3>
          <h5>{t('Responsivo para Mobile')}</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className='btn'>GitHub</a>
            <a href="#" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio1" />
          </div>
          <h3>{t('Sistema de Gestão para Salão de Beleza.')}</h3>
          <h5>{t('Responsivo para Mobile')}</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className='btn'>GitHub</a>
            <a href="#" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="portfolio1" />
          </div>
          <br />
          <div className="portfolio__item-image">
            <img src={IMG5} alt="portfolio1" />
          </div>
          <h3>{t('Site Persolizável com Sistema de Gestão para Aulas Particulares / Escola de Idiomas.')}</h3>
          <h5>{t('Responsivo para Mobile')}</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/higorzica/react-portfolio" target='_blank' className='btn'>GitHub</a>
            <a href="http://profmargauxfrances.com/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="portfolio1" />
          </div>
          <br />
          <div className="portfolio__item-image">
            <img src={IMG7} alt="portfolio1" />
          </div>
          <h3>{t('Site Nubank, reformulação aplicando SASS, Conceitos de Design 3d, UX/UI compativel com a cultura da organização.')}</h3>
          <h5>{t('Responsivo para Mobile')}</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className='btn'>GitHub</a>
            <a href="#" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG8} alt="portfolio1" />
          </div>
          <br />
          <div className="portfolio__item-image">
            <img src={IMG9} alt="portfolio1" />
          </div>
          <h3>{t('Site para empresa de Software de Gerenciamento Escolar, tecnologia usadas HTML, SASS, JS, UX/UI compativel com a cultura da organização.')}</h3>
          <h5>{t('Responsivo para Mobile')}</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className='btn'>GitHub</a>
            <a href="http://academic.profmargauxfrances.com/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG10} alt="portfolio1" />
          </div>
          <br />
          <div className="portfolio__item-image">
            <img src={IMG11} alt="portfolio1" />
          </div>
          <h3>{t('Blog de tecnologia para compartilhar dicas e conhecimento, tecnologia usadas Angular, API, JS, UX/UI compativel com a com tema proposto pelo cliente.')}</h3>
          <h5>{t('Responsivo para Mobile')}</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/higorzica/angular-blog-HzTech" target='_blank' className='btn'>GitHub</a>
            <a href="#" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG12} alt="portfolio1" />
          </div>
          <br />
          <div className="portfolio__item-image">
            <img src={IMG13} alt="portfolio1" />
          </div>
          <h3>{t('Site institucional para empresa de manutenção de computadores e notebooks, tecnologias usadas HTML, SCSS, JS, UX/UI compativel com a cultura da organização.')}</h3>
          <h5>{t('Responsivo para Mobile')}</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/higorzica/Site-Informatica" target='_blank' className='btn'>GitHub</a>
            <a href="#" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src='https://user-images.githubusercontent.com/93283509/213568292-88d8b4fe-f135-48c1-9600-2f4248799ced.png' alt="portfolio1" />
          </div>
          <h3>{t('App de controle financeiro com base de dados em LocalStorage + Usando Components Styled. Tecnologias usadas React, SCSS, JS.')}</h3>
          <h5>{t('Responsivo para Mobile')}</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/higorzica/App_Financeiro" target='_blank' className='btn'>GitHub</a>
            <a href="#" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio