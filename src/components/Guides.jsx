import React from 'react'
import { guides } from '../data'
import GuideCard from './GuideCard'
import { useState } from 'react'

const Guides = () => {

    const [isOpen, setIsOpen] = useState()

    return (
        <div className='guides'>
            {guides.map(guide => 
                <GuideCard data={guide} isOpen={guide.name === isOpen} setIsOpen={(name) => setIsOpen(name)}/>  
            )}
        </div>
    )
}

export default Guides