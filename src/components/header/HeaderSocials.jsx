import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/higor-zica-dev-ti/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/higorzica" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/higor_zica/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials