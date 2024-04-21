import React,{useEffect,useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {

  const[sticky,setSticky]= useState(false);
  useEffect(()=>{
    window.addEventListener( "scroll", () => {
      window.scrollY>600?setSticky(true): setSticky(false);
    })
  })
  return (
    <nav className={sticky ?'dark-nav':''}>
        <img src={logo} alt="Logo" height={100} width={100} className='logo' />
        <ul>
            <li>Home</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Locations</li>
            <li><button className='btn'>Contact Us</button></li>

        </ul>
         
    </nav>
  )
}
export default Navbar