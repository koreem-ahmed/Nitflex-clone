import React from 'react'
import './Footer.css'
import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <a target='_blank' href="https://www.youtube.com/@Netflix"><img src={youtube} alt="" /></a>
        <a target='_blank' href="https://x.com/netflix?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src={twitter} alt="" /></a>
        <a target='_blank' href="https://www.instagram.com/netflix"><img src={instagram} alt="" /></a>
        <a target='_blank' href="https://www.facebook.com/netflix"><img src={facebook} alt="" /></a>
      </div>
      <ul className='footer-links'>
        <li><a className='links-foot' target='_blank' href="https://brand.netflix.com/en/terms">Audio and Subtitles</a></li>
        <li><a className='links-foot' target='_blank' href="https://brand.netflix.com/en/terms">Audio Description</a></li>
        <li><a className='links-foot' target='_blank' href="https://brand.netflix.com/en/terms">Help Center</a></li>
        <li><a className='links-foot' target='_blank' href="https://brand.netflix.com/en/terms">Gift Cards</a></li>
        <li><a className='links-foot' target='_blank' href="https://brand.netflix.com/en/terms">Media Center</a></li>
        <li><a className='links-foot' target='_blank' href="https://brand.netflix.com/en/terms">Investor Relations</a></li>
        <li><a className='links-foot' target='_blank' href="https://brand.netflix.com/en/terms">Jobs</a></li>
        <li><a className='links-foot' target='_blank' href="https://brand.netflix.com/en/terms">Terms of Use</a></li>
        <li><a className='links-foot' target='_blank' href="https://brand.netflix.com/en/terms">Privacy</a></li>
        <li><a className='links-foot' target='_blank' href="https://brand.netflix.com/en/terms">Legal Notices</a></li>
        <li><a className='links-foot' target='_blank' href="https://brand.netflix.com/en/terms">Cookie Preferences</a></li>
        <li><a className='links-foot' target='_blank' href="https://brand.netflix.com/en/terms">Contact Us</a></li>
      </ul>
      <p className='footer-cp'>© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer