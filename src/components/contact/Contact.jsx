import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin,BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import  '../../utils/i18n'
import { useTranslation } from 'react-i18next'

const Contact = () => {

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ziake5k', 'template_gjap3yc', form.current, 'OxN33F_FYr9DDCjsD')

    e.target.reset()

  };

  return (
    <section id='contact'>
      <h2>{t('Para entrar em contato')}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>higorbhe@gmail.com</h5>
            <a href="mailto:higorbhe@gmail.com" target="_blank">{t('Enviar Mensagem')}</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>higorzica.dev</h5>
            <a href="https://www.linkedin.com/in/higor-zica-dev-ti/" target="_blank">{t('Enviar Mensagem')}</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>(31) 9 9652-0278</h5>
            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5531996520278" target="_blank">{t('Enviar Mensagem')}</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea type="text" name="message" rows= "7" placeholder='Your Message' required> </textarea>
          <button type="submit" className='btn btn-primary'>{t('Enviar Mensagem')}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact