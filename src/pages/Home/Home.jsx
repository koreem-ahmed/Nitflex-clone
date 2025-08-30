import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards.js/TitleCards';
import Footer from '../../components/Footer/Footer';
import hero_banner from '../../../public/hero_banner.jpg'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className="hero">
          <img src={hero_banner} alt="" className='img-ban' />
          <div className="img-title">
            <img src={hero_title} alt="" />
            <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
            <div className="btn-cont">
              <button className='play-btn'>
              <div  className='play_img'><img src={play_icon} alt=""/></div>
              Play
            </button>
            <button className='more-btn'>
              <div  className='info_img'><img src={info_icon} alt=""/></div>
              More Info
            </button>
            </div>
            <TitleCards tit="Popular on Netflix"/>
          </div>
        </div>
        <div className='more-cards'>
        <TitleCards title={"Top Movies"} category={"top_rated"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Only On Netflix"} category={"popular"} />
        </div>
        <Footer />
    </div>
  )
}

export default Home
