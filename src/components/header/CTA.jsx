import { t } from 'i18next'
import React, { useState } from 'react'
import Modal from '../modal/modal'
import CV1 from '../../assets/curriculum portugues_2023_compressed.pdf'
import CV2 from '../../assets/curriculum_fr_2023_compressed.pdf'

const CTA = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='cta'>
        <button onClick={() => setOpenModal(true) } className='btn'>Download CV</button>
        <a href="#contact" className='btn btn-primary'>{t('Contate-me')}</a>
    <div className="modal">
    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
      <div>
       <p> DOWNLOAD CV </p>
       <br />
        <a href={CV1} download className='btn'>Download CV PT-BR</a>
        <a href={CV2} download className='btn'>Download CV FRANÇAIS</a>

      </div>
      </Modal>
    </div>
    </div>
  )
}

export default CTA