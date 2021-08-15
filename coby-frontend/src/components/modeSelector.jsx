import React from 'react'

const ModeSelector = ({ onChange, options }) => {
    const elements = []

    for (let i = 0; i < options.length; i++) {
        elements.push(<option key={options[i]} className = "mode-selector-option" >{options[i]}</option>)
    }

    return (
        <select onChange={(e) => {onChange(e.target.value)}} className = "mode-selector-select">
            {elements}
        </select>
    )
}

export default ModeSelector