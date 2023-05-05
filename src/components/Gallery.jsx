import React from 'react'
import classes from '../styles/Gallery.module.css'
import gallery1 from '../assets/gallery1.png'
import gallery2 from '../assets/gallery2.png'
import gallery3 from '../assets/gallery3.png'
import gallery4 from '../assets/gallery4.png'
import gallery5 from '../assets/gallery5.png'

const Gallery = () => {
  return (
    <div className={classes.gallery}>
        <img src={gallery1} alt="" className={classes.img}/>
        <img src={gallery2} alt="" className={classes.img}/>
        <img src={gallery3} alt="" className={classes.img1}/>
        <img src={gallery4} alt="" className={classes.img}/>
        <img src={gallery5} alt="" className={classes.img}/>
    </div>
  )
}

export default Gallery