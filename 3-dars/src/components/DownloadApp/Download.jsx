import React from 'react'
import './Download.scss'
import MobileApp from '../../assets/images/MobileApp.png'
import AppStore from '../../assets/svg/AppStore.svg'
import GooglePlay from '../../assets/svg/PlayMarket.svg'

const Download = () => {
  return (
    <div className='Mobile__app'>
      <div className="container">
        <div className="app__wrapper">
          <div className='App-texts'>
            <strong className='App-title'>Download our Mobile App</strong>
            <p className='App-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. 
              Amet, aliquam condimentum.</p>
            <div className='App-btns'>
              <a href="#"><img src={AppStore} alt="" /></a>
              <a href="#"><img src={GooglePlay} alt="" /></a>
            </div>
          </div>
          <img className='App-image' src={MobileApp} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Download