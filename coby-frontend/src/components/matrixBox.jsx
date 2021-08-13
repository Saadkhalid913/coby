import React from 'react'
import Grid from './grid'
import GridSelector from './gridSelector'
const MatrixBox = ({ gridSize, setGridSize}) => {
    return (
    <div className = "matrix-box">
        <Grid gridSize = {gridSize}/>
        <h2>{gridSize}x{gridSize}</h2>
        <GridSelector onChange = {setGridSize} value = {gridSize} min = {2} max = {7}/>
    </div>
    )
}

export default MatrixBox