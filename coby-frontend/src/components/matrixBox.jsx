import React, { useState } from 'react'
import Grid from './grid'
import GridSelector from './gridSelector'
const MatrixBox = (props) => {

    const [gridSize, setGridSize] = useState(2)

    return (
    <div className = "matrix-box">
        <Grid gridSize = {gridSize}/>
        <GridSelector onChange = {setGridSize} value = {gridSize} min = {2} max = {7}/>
    </div>
    )
}

export default MatrixBox