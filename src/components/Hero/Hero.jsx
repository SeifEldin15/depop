import React from 'react'
import "./Hero.css"
import ShopNow from "../ShopNow/ShopNow"
import pic from "../../assets/pictures/Pasted_image_20240222190203.webp"
const Hero = () => {
  return (
    <div className='Hero'>
        <div className="left-hero">
            <img src={pic} alt="not found" className='hero-img'/>
            <a href="" className='wear-link'>Womenswear</a>
            <ShopNow />
        </div>
        <div className="right-hero">
            <img src={pic} alt="not found" className='hero-img'/>
            <a href="" className='wear-link'>Menswear</a>
            <ShopNow />
        </div>
    </div>
  )
}

export default Hero
