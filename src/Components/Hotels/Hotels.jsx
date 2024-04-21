import React from 'react'
import './Hotels.css'
import hotel_pic from '../../assets/Hotel.jpg'
import play_icon from '../../assets/play-icon.png'
const Hotels = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={hotel_pic} alt="" className='hotel-pic'/>
            <img src={play_icon} alt=""  className='play_icon' />
        </div>
      <div className='about-right'>
        <h3>Hotels</h3>
        <h2>Offering You Best Hotels</h2>
        <p>Indulge in luxury and comfort with our curated selection of the best hotels worldwide. From elegant resorts to cozy boutique accommodations, we ensure every stay is a memorable experience. Your perfect retreat awaits!
        </p>
        <p>Unwind in style at our meticulously selected hotels, each offering top-notch amenities and impeccable service. Whether you're seeking a beachfront oasis, a chic urban escape, or a tranquil countryside retreat, we have the perfect accommodation to suit your preferences. Let us elevate your travel experience with our carefully curated hotel collection.
        </p>
        <p>From iconic landmarks to hidden gems, our hotels are strategically located to ensure convenience and easy access to the best attractions. Immerse yourself in the local culture, savor delectable cuisine, and create lasting memories as you explore the wonders of each destination. With our commitment to excellence, your stay will exceed expectations every time.
        </p>
      </div>
    </div>
  )
}

export default Hotels
