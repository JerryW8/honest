import React, { useState, useEffect } from 'react'
import Chemical from './Chemical'

const Summary = () => {

    const [chemicals, setChemical] = useState([1, 2, 3])

    return (
        <div>
            <div className="tldr">
                Here's what we found TLDR;
            </div>
            <div className="container">
                {chemicals.map(item => <Chemical chemical={item} />)}
            </div>
        </div>
    )
}

export default Summary