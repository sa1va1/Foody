import React from 'react'
import './Footer.scss'
import logo from '../../assets/svg/logo.svg'
import line from '../../assets/svg/footer-line.svg'
import twitter from '../../assets/svg/twitter.svg'
import insatgram from '../../assets/svg/instagram.svg'
import facebook from '../../assets/svg/facebook.svg'
import github from '../../assets/svg/gitHub.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer__wrapper">
          <div className='footer__top'>
            <a className='footer__logo' href="#"><img src={logo} alt="" /></a>
            <ul className='footer__list'>
              <li className='footer__items'><a href="#">About</a></li>
              <li className='footer__items'><a href="#">Service</a></li>
              <li className='footer__items'><a href="#">Blog</a></li>
              <li className='footer__items'><a href="#">Contact Us</a></li>
            </ul>
            <ol className='socialls'>
              <a className='sociall__link' href="#"><img src={twitter} alt="" /></a>
              <a className='sociall__link' href="#"><img src={facebook} alt="" /></a>
              <a className='sociall__link' href="#"><img src={insatgram} width={20} height={20} alt="" /></a>
              <a className='sociall__link' href="#"><img src={github} alt="" /></a>
            </ol>
          </div>
          <img className='footer__line' src={line} alt="" />
          <div className='footer__bottom'>
            <p className='copy-reserved'>© Copyright 2022, All Rights Reserved</p>
            <div className='privacy-terms'>
              <p className='copy-reserved'>Privacy Policy</p>
              <p className='copy-reserved'>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer