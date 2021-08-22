import React, { useState, useEffect } from 'react'

const Chemical = (props) => {

    // Sets image of circle
    const getColor = (carcinogen) => {
        if (carcinogen) {
            return {
                background: "#D23C3C"
            }
        } else {
            return {
                background: "#3CD293"
            }
        }
    }

    // Sets status of the chemical
    const getMessage = (carcinogen) => {
        if (carcinogen) {
            return "This agent may be carcinogenic"
        } else {
            return "This agent may be safe"
        }
    }

    return (
        <div className="tag">
            <div className="banner">
                <span className="circle" style={getColor(props.chemical.carcinogen)}></span>
                <div className="title">
                    <div className="name">{props.chemical.name}</div>
                    <div className="status">{getMessage(props.chemical.carcinogen)}</div>
                </div>
            </div>
            <div className="description">
                {props.chemical.summ}
            </div>
        </div>
    )
}

export default Chemical