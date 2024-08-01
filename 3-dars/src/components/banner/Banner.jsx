import React from 'react'
import './Banner.scss'
import Hero from '../../assets/images/Hero.png'
import Burger from '../../assets/images/Burger.png'
import deliveryHuman from '../../assets/svg/delHuman.svg'
import playVideo from '../../assets/svg/play-video.svg'

const Banner = () => {
  return (
    <div className='hero'>
      <div className="container">
        <div className="banner__wrapper">
          <div className='banner__left'>
            <span className='banner__subtitle'>Fast Delivery <img src={deliveryHuman} alt="" /></span>
            <h2 className='banner__title'>Fastest <span className='banner__title banner-color'>Delivery</span> & Esay <span className='banner__title banner-color'>Pickup.</span></h2>
            <p className='banner__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.</p>
            <div className='banner__btns'>
              <button className='banner__btn'>Order Now</button>
              <button className='play-video'><img className='banner__bg' src={playVideo} alt="" /><span className='banner__btn-text'>Watch Video</span></button>
            </div>
          </div>
          <img className='Hero-image' src={Hero} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner