import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import Webcam from "react-webcam"
import Tesseract from 'tesseract.js'

const Capture = (props) => {

    let history = useHistory()
    const cameraRef = useRef(null)
    const [finishScan, setFinishScan] = useState(true)

    // const videoConstraints = {
    //     width: '100%',
    //     height: '100%'
    // }

    async function imageToText(b64) {
        await Tesseract
                .recognize(b64, 'eng', { logger: m => console.log(m) })
                .then(({ data: { text } }) => {
                    console.log(text);
                    setFinishScan(true)
                    history.push({
                        pathname: '/tldr',
                        state: { text: text }
                    })
                })
    }

    const capture = React.useCallback(
        async () => {
            const imageSrc = cameraRef.current.getScreenshot()
            console.log(imageSrc)
            setFinishScan(false)
            await imageToText(imageSrc)
        },
        [cameraRef]
    )

    return (
        <>
            <div className="camera">
                <Webcam 
                    ref={cameraRef}
                    screenshotFormat="image/jpeg"
                    screenshotQuality={1}
                    // videoConstraints={videoConstraints}
                    width="100%"
                    height="100%"
                />
            </div>
            {!finishScan && <div className="scanning-msg">Scanning your product...</div> }
            <button className="snap" onClick={capture}></button>
        </>
    )
}

export default Capture