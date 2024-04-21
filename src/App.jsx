import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Holidays from './Components/Holidays/Holidays'
import Title from './Components/Title/Title'
import Hotels from './Components/Hotels/Hotels'
import Flights from './Components/Flights/Flights'
import Locations from './Components/Locations/Locations'
import Contact from './Components/Contact/Contact'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero/>
      <div className='2Container'>
      <Title subtitle='Holidays' title='Spend your Holidays  with us'/>
      <Holidays/>
      <Hotels/>
      <Title subtitle='Flights' title='Cheap Prices For Your Flights'/>
      <Flights/>
      <Title subtitle='Locations' title='Top Most Visited Sites'/>
      <Locations />
      <Title subtitle='Contact Us' title='Feel Free To Contact Us'/>
      <Contact></Contact>
      </div>
    </div>
  )
}

export default App
