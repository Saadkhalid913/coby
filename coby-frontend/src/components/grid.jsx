import React, { useState, useEffect } from 'react'

const Grid = ({ gridSize }) => {
    const [size, setSize]= useState(3)
    useEffect(() => {
        setSize(gridSize || 3)
    }, [gridSize])

    const tiles = []
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            tiles.push(<div key={`grid-tile${i}-${j}`} className = "matrix-grid-tile"></div>)
        }
    }

    return (
        <div className = "matrix-grid-wrapper">
            <div className = "matrix-grid" style={getGridStyles(size)}>
                {tiles}
            </div>
        </div>

    )
}

const getGridStyles = (size) => {
    return {
        gridTemplateRows: "1fr ".repeat(size),
        gridTemplateColumns: "1fr ".repeat(size)
}}

export default Grid