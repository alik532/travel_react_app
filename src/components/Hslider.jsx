import React from 'react'
import classes from '../styles/Hslider.module.css'

const Hslider = ({children}) => {
  return (
    <div className={classes.slider}>
        {children}
    </div>
  )
}

export default Hslider