import React from 'react'
import classes from '../styles/Explore.module.css'
import MyButton from '../components/MyButton'

const Explore = () => {
  return (
    <div className='explore'>
      <div className={classes.left}>
        <h2 className={classes.title}>
          Let’s see Cappadocia with<br/> us and with you
        </h2>
        <MyButton text="Explore"/>
      </div>
      <div className={classes.text}>
        Marvel at the surreal landscape of bizarre rock formations and stunning valleys as you traverse through this magical land.
        <br/>
        <br/>
        Whether you prefer hot air ballooning, horseback riding, or hiking, Cappadocia has something for everyone. Join us and experience the unique charm of Turkey's beautiful Cappadocia.
      </div>
    </div>
  )
}

export default Explore