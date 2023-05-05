import React from 'react'
import classes from '../styles/LocationCard.module.css'
import Star from '../assets/star.svg'

const LocationCard = ({data}) => {

  return (
    <div className={classes.card}>
        <img src={data.img} className={classes.img} alt=""/>
        <div className={classes.rating}>{data.rating}<img src={Star} alt=''/></div>
          <h2 className={classes.name}>
            {data.name}
          </h2>
          <div className={classes.info}>
            <h4 className={classes.price}>{data.price}$ /per person</h4>
            <a href="/" className={classes.book}>Book Now</a>
          </div>
    </div>
  )
}

export default LocationCard