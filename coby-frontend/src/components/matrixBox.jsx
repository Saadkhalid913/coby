import React from 'react'
import Grid from './grid'
import GridSelector from './gridSelector'
import ModeSelector from './modeSelector'
const MatrixBox = ({ gridSize, setGridSize, onModeChange}) => {
    return (
    <div className = "matrix-box">
        <ModeSelector options = {["Convolution", "Greyscale", "Filter"]} onChange={(a) => onModeChange(a)}/>
        <Grid gridSize = {gridSize}/>
        <h2>{gridSize}x{gridSize}</h2>
        <GridSelector onChange = {setGridSize} value = {gridSize} min = {2} max = {7}/>
    </div>
    )
}

export default MatrixBox