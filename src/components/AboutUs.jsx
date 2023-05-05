import React from 'react'
import classes from '../styles/aboutUs.module.css'
import aboutUsImg from '../assets/aboutUs.png'
import MyButton from '../components/MyButton'

const AboutUs = () => {
  return (
    <div className='aboutUs' >
        <img src={aboutUsImg} alt=""  className={classes.img}/>
        <div className={classes.content}>
            <h2 className={classes.title}>About Us</h2>
            <div className={classes.txt}>Our tour agency offers unique and exciting travel experiences for individuals and groups. With a focus on adventure, culture, and sustainable tourism, we strive to create unforgettable memories for our clients.</div>
            <div className={classes.txt}>Our team of knowledgeable guides and friendly staff are dedicated to providing excellent service and ensuring a safe and enjoyable trip for all. From exploring exotic destinations to trying new activities and cuisines, we specialize in customized itineraries that cater to diverse interests and budgets. Join us for a memorable journey that will broaden your horizons and leave you feeling inspired.</div>
            <MyButton text="Read More"/>
        </div>
    </div>
  )
}

export default AboutUs