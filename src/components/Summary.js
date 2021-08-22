import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import PropagateLoader from 'react-spinners/PropagateLoader'
import Chemical from './Chemical'

const Summary = (props) => {

    const [chemicals, setChemicals] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        async function getList() {
            const text = props.history.location.state ? props.history.location.state.text : 'Retinoids'
            const ingredientsList = text.split(/,\s*/)
            let data = []
            console.log(ingredientsList)
            for (let i = 0; i < ingredientsList.length; i++) {
                const summ = await (await fetch('/summary/' + ingredientsList[i])).json()
                const status = await (await fetch('/carcinogen/' + ingredientsList[i])).json()
                data.push({
                    name: ingredientsList[i],
                    summ: summ.summary,
                    carcinogen: status.carcinogen
                })
                console.log(data)
            }
            setChemicals(data)
            setLoading(false)
        }
        getList()
    }, []);

    async function goToStart() {
        history.push("/")
    }

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
                    <button className="done" onClick={() => goToStart()}>Done</button>
                </div>
            }
        </>
    )
}

export default Summary