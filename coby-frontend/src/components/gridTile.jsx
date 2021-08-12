import React, { Component, useState, useEffect } from 'react'

const GridTile = ({ onChange, defaultValue, id }) => {
    return <input type="number" className = "matrix-grid-tile"  onChange = {e => onChange(e.target.value, id)} />

}
 

export default GridTile