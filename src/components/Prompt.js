import React, { useEffect } from 'react'
import bottle from '../images/bottle.png'
import { BsArrowRight } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'

const Prompt = () => {

    const history = useHistory()

    useEffect(() => {
        document.body.style.backgroundColor = "#F6E8FA"
        return () => {
            document.body.style.backgroundColor = null
        }
    }, [])

    async function goToCamera() {
        history.push("/capture")
    }

    return (
        <div>
            <div className="prompt">
                Please hold your bottle upwards and make sure the ingredient list is legible like this:
            </div>
            <img src={bottle} alt="bottle" className="bottle-image" />
            <div onClick={goToCamera}><BsArrowRight size="100px" className="arrow" /></div>
        </div>
    )
}

export default Prompt