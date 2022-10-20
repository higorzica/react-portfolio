import { t } from 'i18next'
import React from 'react'
import CV from '../../assets/curriculum.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>{t('Contate-me')}</a>
    </div>
  )
}

export default CTA