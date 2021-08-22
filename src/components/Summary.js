import React, { useState, useEffect } from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'
import Chemical from './Chemical'

const Summary = (props) => {

    const [chemicals, setChemical] = useState([1, 2, 3])
    const [data, setData] = useState({})
    const [text, setText] = useState(props.history.location.state ? props.history.location.state.text : '')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api').then(
            response => response.json()
        ).then(
            data => {
                setData(data)
                setLoading(false)
            }
        )
    }, []);

    return (
        <>
            {loading ? 
                <div className="loader"><PropagateLoader color="#00FFFF" loading={loading} size={10}/></div>
            : 
                <div>
                    <div className="tldr">
                        Here's what we found TLDR;
                    </div>
                    <div className="container">
                        {chemicals.map((item, i) => <Chemical key={i} chemical={item} />)}
                    </div>
                </div>
            }
        </>
    )
}

export default Summary