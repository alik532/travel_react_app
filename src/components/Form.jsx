import React from 'react'
import classes from '../styles/Form.module.css'
import formImage from '../assets/form.png'
import MyInput from './MyInput'
import MyButton from './MyButton'

const Form = () => {
  return (
    <div className={classes.form}>
        <img src={formImage} alt='' className={classes.img}/>
        <div className={classes.inputs}>
            <h2>Let Us Plan Your Dream Trip - just fill out the form</h2>
            <MyInput placeholder="Name"/>
            <MyInput placeholder="Surname"/>
            <MyInput placeholder="Email"/>
            <MyInput placeholder="Phone Number"/>
            <MyButton text="Send"/>
        </div>
    </div>
  )
}

export default Form