import React from 'react'
import './footer.css'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>HZ-TECH</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/higor-zica-dev-ti/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; HZ-TECH - Todos os direitos reservados
        </small>
      </div>

    </footer>
  )
}

export default Footer