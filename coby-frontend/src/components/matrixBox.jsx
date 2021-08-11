import React, { useState, useEffect } from 'react'
import Grid from './grid'

const MatrixBox = ({gridSize}) => {
    return (
    <div className = "matrix-box">
        <Grid gridSize = {gridSize}/>
    </div>
    )
}

export default MatrixBox