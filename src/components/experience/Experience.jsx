import React from 'react'
import './experience.css'
import {SiMysql, SiDelphi, SiReact, SiPhp} from 'react-icons/si'
import { IoLogoHtml5,IoLogoCss3,IoLogoAngular,IoLogoNodejs,IoLogoTux,IoLogoJavascript } from 'react-icons/io'
import  '../../utils/i18n'
import { useTranslation } from 'react-i18next'

const Experience = () => {

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
    <section id='experience'>
      <h5>{t('Quais habilidades possuo ?')} </h5>
      <h2>{t('Minha Experiencia')} </h2>
    <div className="container experience__container">
      <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <IoLogoHtml5 className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience__details'>
              <IoLogoCss3 className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediário (Tailwind, SCSS, Bootstrap)</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoJavascript className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced (ES6, Vanille)</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoAngular className='experience__details-icon' />
              <div>
              <h4>Angular</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiReact className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediário</small>
              </div>
            </article>
          </div>
      </div>
      <div className="experience__backend">
      <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <IoLogoNodejs className='experience__details-icon' />
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Experienced (API, AUTHENTICATION)</small>
              </div>
              </article>
              <article className='experience__details'>
              <SiMysql className='experience__details-icon' />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediário (SQL, Développé performances consultes)</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoTux className='experience__details-icon' />
              <div>
              <h4>Linux</h4>
              <small className='text-light'>Experienced (SAMBA SERVER) </small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPhp className='experience__details-icon' />
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Experienced (Laravel, Symfony) </small>
              </div>
            </article>
            {/* <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
              <h4>Access </h4>
              <small className='text-light'>Intermediário</small>
              </div>
            </article> */}
            <article className='experience__details'>
              <SiDelphi className='experience__details-icon' />
              <div>
              <h4>Delphi </h4>
              <small className='text-light'>Intermediário (ERP Educational)</small>
              </div>
            </article>
          </div>
        </div>
    </div>

    </section>
  )
}

export default Experience