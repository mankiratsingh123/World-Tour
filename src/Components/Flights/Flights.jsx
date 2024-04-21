import React from 'react'
import './Flights.css'
import flight1 from '../../assets/flight1.jpg'
import flight2 from '../../assets/flight2.jpg'
import flight3 from '../../assets/flight3.jpg'
import flight4 from '../../assets/flight4.jpg'
const Flights = () => {
  return (
    <>
    <div className='flight'>
        <div className="card 1">
            <img src={flight1} alt="" className='cardimg' />
            <h2 className='price'>$300</h2>
            <p className='desc'>From New York To New Delhi</p>
            <button className='btn dark'>Book Now</button>
        </div>
        <div className="card 2">
        <img src={flight2} alt="" className='cardimg' />
            <h2 className='price'>$450</h2>
            <p className='desc' >From Moscow To London</p>
            <button className='btn dark'>Book Now</button>
        </div>
        <div className="card 3">
        <img src={flight4} alt="" className='cardimg' />
            <h2 className='price'>$400</h2>
            <p className='desc' >From Sydney To Mexico</p>
            <button className='btn dark'>Book Now</button>
        </div>
        <div className="card 4">
        <img src={flight3} alt="" className='cardimg' />
            <h2 className='price'>$320</h2>
            <p className='desc' >From Mumbai To Berlin</p>
            <button className='btn dark'>Book Now</button>
        </div>

      
    </div>
    <div className="seemore">
    <button className='btn dark'>See More</button>
    </div>
    </>
  )
}

export default Flights
