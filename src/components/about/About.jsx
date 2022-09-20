import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.jpg'
import {FaAward} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>I am:</h2>
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
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>

              <article className='about__card'>
                <HiUsers className='about__icon' />
                <h5>Clients</h5>
                <small>20+ Worldwide</small>
              </article>

              <article className='about__card'>
                <VscFolderActive className='about__icon' />
                <h5>Projects</h5>
                <small>3+ Completed </small>
              </article>
            </div>
            <p>
            Meu nome é Higor Zica, sou técnico em informática e bacharel em Admnistração. Sou fascinado por programação e principalmente pelo desenvolvimento web/mobile, estando sempre a procura de conhecimento e novos desafios.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          </div>
        </div>
    </section>
  )
}

export default About