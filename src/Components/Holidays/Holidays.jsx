import React from 'react'
import './Holidays.css'
import holidays_1 from  '../../assets/holidays-1.jpg'
import holidays_2 from  '../../assets/holidays-2.jpg'
import holidays_3 from  '../../assets/holidays-3.jpg'
import airplane from  '../../assets/airplane.png'

const Holidays = () => {
  return (
    <div className='holidays'>
        <div className='holiday'>
            <img src={holidays_1} alt="russia"></img>
            <div className="caption">
            <img src={airplane} alt="russia"></img>
                <p>Visit Russia</p>
            </div>
        </div>
        <div className='holiday'>
            <img src={holidays_2} alt="singapore"></img>
            <div className="caption">
            <img src={airplane} alt="russia"></img>
                <p>Visit Singapore</p>
            </div>
        </div>
        <div className='holiday'>
            <img src={holidays_3} alt="bali"></img>
            <div className="caption">
            <img src={airplane} alt="russia"></img>
                <p>Visit Bali</p>
            </div>
        </div>
    </div>
  )
}

export default Holidays
