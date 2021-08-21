import React, { useState, useEffect } from 'react'

const Chemical = (props) => {

    // Sets image of circle
    const getColor = (type) => {
        return {
            background: "#D23C3C"
        }
        return {
            background: "#3CD293"
        }
        return {
            background: "#85C6EA"
        }
    }

    // Sets status of the chemical
    const getMessage = (type) => {
        return "This agent may be harmful"
        return "This agent may be helpful for your skin"
        return "This agent is neutral"
    }

    return (
        <div className="tag">
            <div className="banner">
                <span className="circle" style={getColor(1)}></span>
                <div className="title">
                    <div className="name">Chemical</div>
                    <div className="status">{getMessage(1)}</div>
                </div>
            </div>
            <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a pellentesque lacus. Ut ac sapien nec 
            </div>
        </div>
    )
}

export default Chemical