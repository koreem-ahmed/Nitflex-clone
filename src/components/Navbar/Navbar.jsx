import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import user from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  
  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      if(window.scrollY > 0){
        navRef.current.classList.add('nav-d')
        document.querySelector(".search-box").classList.remove("bgc-se");
        document.querySelector(".noti").classList.add("light");
        document.querySelector(".tri-noti").classList.add("lights");
      }
      else{
        navRef.current.classList.remove('nav-d')
        document.querySelector(".search-box").classList.add("bgc-se");
        document.querySelector(".noti").classList.remove("light");
        document.querySelector(".tri-noti").classList.remove("lights");
      }
    })
  }, [])

  return (
    <div ref={navRef} className='navbar'>
      <div className='left-nav'>
          <img src={Logo} alt="netflix logo" className='logo-img' />
          <ul>
            <li><HashLink className='links-nav' smooth to="#hommy" >Home</HashLink></li>
            <li><HashLink className='links-nav' smooth to="#tv-shows" >TV Shows</HashLink></li>
            <li><HashLink className='links-nav' smooth to="#moviees" >Movies</HashLink></li>
            <li><HashLink className='links-nav' smooth to="#my-list" >My list</HashLink></li>
          </ul>
      </div>
      <div className='right-nav'>
          <input type="search" name="" id="" className='search-box bgc-se' />
          <img onClick={() => {
          document.querySelector(".search-box").classList.toggle("block");
          document.querySelector(".search-box").style.cssText = "animation: fadein 0.5s linear;";
          }}        
          src={search} alt="search_icon" className='bell'/>
          <p>Children</p>
          <img src={user} alt="use_icon" 
          onClick={()=>{
            document.querySelector(".noti").classList.toggle("block");
            document.querySelector(".tri-noti").classList.toggle("block");
            document.querySelector(".tri-noti").style.cssText = "animation: fadein 0.2s linear;";
            document.querySelector(".noti").style.cssText = "animation: fadein 0.2s linear;";
          }} className='bell' />
          <div className='noti-big'>
            <div className='tri-noti'>
            </div>
            <div className='noti'>
              <p>There is no notifications right now</p>
            </div>
          </div>
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