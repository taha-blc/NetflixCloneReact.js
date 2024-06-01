import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twiter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-icons'>
                <img src={youtube_icon} alt="" />
                <img src={twiter_icon} alt="" />
                <img src={instagram_icon} alt="" />
                <img src={facebook_icon} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>help centre </li>
                <li>gift cards</li>
                <li>media centre</li>
                <li>Investor relatiın</li>
                <li>Jobs</li>
                <li>term of use</li>
                <li>privacy</li>
                <li>legal notices</li>
                <li>cookie preferences</li>
                <li>corporate information</li>
                <li>Contact Us</li>
            </ul>
            <p className='copyright-text'>25/05/2024 created by Taha Bilici</p>
        </div>
    )
}

export default Footer