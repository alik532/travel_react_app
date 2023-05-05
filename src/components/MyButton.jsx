import React from 'react'
import classes from '../styles/MyButton.module.css'

const MyButton = ({text}) => {
  return (
    <button className={classes.myButton}>
        <div className={classes.text}>
            {text ? text : "Click"}
        </div>
    </button>
  )
}

export default MyButton