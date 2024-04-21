import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png';
const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Discover the World <br/> Your Adventure Awaits!</h1>
            <p>Welcome to our world tour hub! Explore breathtaking destinations, plan your dream vacation, and embark on unforgettable adventures. Start your journey today!

            </p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="Arrow" /></button>
        </div>
      
    </div>
  )
}

export default Hero
