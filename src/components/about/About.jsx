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
        <h2>Sobre mim:</h2>
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
                <small>15+ Completed </small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, neque mollitia. Molestiae odio quo, quis esse labore rem quisquam deleniti magnam fuga quasi perspiciatis nemo dolores voluptas inventore voluptatibus? Corporis.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          </div>
        </div>
    </section>
  )
}

export default About