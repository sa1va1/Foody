import React from 'react'
import './Header.scss'
import logo from '../../assets/svg/logo.svg'
import search from '../../assets/svg/search.svg'
import buys from '../../assets/svg/buys.svg'
import logBtn from '../../assets/svg/login-btn.svg'
import ArrowBottom from '../../assets/svg/arrow-bottom.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className='nav__wrapper'>
          <div className="logo">
            <a href="#"><img src={logo} alt="" /></a>
          </div>
          <ul className='nav__list'>
            <li className='nav__item'>Home</li>
            <li className='nav__item'>Service</li>
            <li className='nav__item'>Menu <img className='menu__arrow' src={ArrowBottom} alt="" /></li>
            <li className='nav__item'>Help</li>
          </ul>
          <div className='nav__log'>
            <a href="#"><img src={search} alt="" /></a>
            <a href="#"><img src={buys} alt="" /></a>
            <button className='nav__btn'>
              <img className='nav__btn-img' src={logBtn} alt="" />
              <span className='nav__btn-text'>Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header