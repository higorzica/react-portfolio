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


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        My recent Work
      </h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>Site Persolizável com Sistema de Gestão para Barbearias. </h3>
          <h5>Responsivo para Mobile</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className='btn'>GitHub</a>
            <a href="https://dribbble.com/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio1" />
          </div>
          <h3>Site Persolizável com Sistema de Cadastro para Cardápio Online. </h3>
          <h5>Responsivo para Mobile</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className='btn'>GitHub</a>
            <a href="https://dribbble.com/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio1" />
          </div>
          <h3>Sistema de Gestão para Salão de Beleza. </h3>
          <h5>Responsivo para Mobile</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className='btn'>GitHub</a>
            <a href="https://dribbble.com/" target='_blank' className='btn btn-primary'>Live Demo</a>
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
          <h3>Site Persolizável com Sistema de Gestão para Aulas Particulares / Escola de Idiomas. </h3>
          <h5>Responsivo para Mobile</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className='btn'>GitHub</a>
            <a href="https://dribbble.com/" target='_blank' className='btn btn-primary'>Live Demo</a>
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
          <h3>Site Nubank, reformulação aplicando SASS, Conceitos de Design 3d, UX/UI compativel com a cultura da organização. </h3>
          <h5>Responsivo para Mobile</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className='btn'>GitHub</a>
            <a href="https://dribbble.com/" target='_blank' className='btn btn-primary'>Live Demo</a>
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
          <h3>Site para empresa de Software de Gerenciamento Escolar, tecnologia usadas HTML, SASS, JS, UX/UI compativel com a cultura da organização. </h3>
          <h5>Responsivo para Mobile</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className='btn'>GitHub</a>
            <a href="http://academic.profmargauxfrances.com/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio