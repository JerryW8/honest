import React, { useEffect } from 'react'
import bottle from '../images/bottle.png'
import { BsArrowRight } from 'react-icons/bs'

const Prompt = () => {

    useEffect(() => {
        document.body.style.backgroundColor = "#F6E8FA"
        return () => {
            document.body.style.backgroundColor = null
        }
    }, [])

    return (
        <div>
            <div className="prompt">
                Please hold your bottle upwards and make sure the ingredient list is legible like this:
            </div>
            <img src={bottle} alt="bottle" className="bottle-image" />
            <BsArrowRight size="100px" className="arrow" />
        </div>
    )
}

export default Prompt