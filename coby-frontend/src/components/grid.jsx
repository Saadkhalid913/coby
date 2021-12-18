import React, { useState, useEffect, useContext } from 'react'
import MatrixContext from '../contexts/matrixContext'
import GridTile from './gridTile'
const Grid = ({ gridSize }) => {
    const [size, setSize]= useState(1)
    useEffect(() => {
        setSize(gridSize || 1)
    }, [gridSize])

    const {matrix} = useContext(MatrixContext)
    const tiles = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            tiles.push(<GridTile key={`grid-tile${i}-${j}`}  id = {[i,j]} className = "matrix-grid-tile" />)
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