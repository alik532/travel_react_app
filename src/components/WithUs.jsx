import React from 'react'
import classes from '../styles/WithUs.module.css'
import withUs from '../assets/withUs.png'

const Switch = ({num}) => {
    return (
        <div className={classes.switch}>
            <h2 className={classes.number}>{num}</h2>
        </div>
    )
}

const WithUs = () => {
  return (
    <div className='withUs'>
        <h2 className={classes.title}>What you will get with us</h2>
        <div className={classes.options}>
            <div className={classes.option}>
                <Switch num={1}/>
                <h2 className={classes.subtitle}>Expert travel advice</h2>
                <p>A reputable travel agency should have experienced and knowledgeable staff who can provide expert advice on destinations, activities, accommodation, and transportation.</p>
            </div>
            <div className={classes.option}>
                <Switch num={2}/>
                <h2 className={classes.subtitle}>Competitive pricing</h2>
                <p>A reputable travel agency will negotiate with travel suppliers on your behalf to get you the best possible prices.</p>
            </div>
            <div className={classes.option}>
                <Switch num={3}/>
                <h2 className={classes.subtitle}>Customized itineraries</h2>
                <p>A good travel agency will work with you to create a personalized itinerary that suits your preferences, budget, and schedule.</p>
            </div>
        </div>
        <img src={withUs} alt="" className={classes.img}/>
    </div>
  )
}

export default WithUs