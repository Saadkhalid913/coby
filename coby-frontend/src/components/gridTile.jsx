import React, { useContext } from 'react'
import MatrixContext from '../contexts/matrixContext'

const GridTile = ({ onChange, defaultValue, id }) => {
    const {setMatrixValue} = useContext(MatrixContext)
    return <input type="number" className = "matrix-grid-tile"  onChange = {e => setMatrixValue(e.target.value, id[0], id[1])} />
}
 

export default GridTile