import React from 'react'
import classes from '../styles/GuideCard.module.css'

const GuideCard = ({data, isOpen, setIsOpen}) => {

    const toggle = () => {
        if (isOpen) {
            setIsOpen("")
        }
        else {
            setIsOpen(data.name)
        }
    }
        
    return (
        <div className={isOpen ? classes.openCard : classes.closedCard} onClick={toggle}>
            <img src={data.img} alt="" className={isOpen ? classes.img1 : classes.img}/>
            <div style={{display: isOpen ? "initial" : "none"}} className={classes.info}>
                <h3 className={classes.name}>{data.name}</h3>
                <div className={classes.languages}>
                    Languages: {data.languages.map(language => <div>{language}</div>)}
                </div>
                <div className={classes.experience}>
                    Experience: {data.experience}
                </div>
                <div className={classes.description}>
                    {data.description}
                </div>
            </div>
        </div>
    )
}

export default GuideCard