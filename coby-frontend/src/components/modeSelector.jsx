import React from 'react'

const ModeSelector = ({ onChange, options, defaultMode}) => {
    const elements = []

    for (let i = 0; i < options.length; i++) {
        // if (options[i] === defaultMode) elements.push(<option selected key={options[i]} className = "mode-selector-option" >{options[i]}</option>)
        elements.push(<option key={options[i]} className = "mode-selector-option" >{options[i]}</option>)
    }

    return (
        <div className = "mode-selector">
            <h4>Select Mode:</h4>
            <select defaultValue = {defaultMode} onChange={(e) => {onChange(e.target.value)}} className = "mode-selector-select">
                {elements}
            </select>   

        </div>
    )
}

export default ModeSelector