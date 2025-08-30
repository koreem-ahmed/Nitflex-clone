import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import user from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {
  
  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      if(window.scrollY > 0){
        navRef.current.classList.add('nav-d')
      }
      else{
        navRef.current.classList.remove('nav-d')
      }
    })
  }, [])
  
  return (
    <div ref={navRef} className='navbar'>
      <div className='left-nav'>
          <img src={Logo} alt="netflix logo" className='logo-img' />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>My list</li>
            <li>Browse By Launguges</li>
          </ul>
      </div>
      <div className='right-nav'>
          <img src={search} alt="search_icon" />
          <p>Children</p>
          <img src={user} alt="user_icon" />
          <div className="nav-profile">
            <img src={profile} alt="" className='prof-img'/>
            <img src={caret} alt="" />
            <div className='dropdown'>
            <p onClick={()=>{logout()}}>Signout of Netflix</p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar