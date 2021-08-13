const GridSelector = ({onChange, value, min, max}) => {
    return (
        <div className = "grid-selector">
            <button className = "btn" onClick = {() => {if (value > min) onChange(value-1)}}>-</button>
            <h3>{value}</h3>
            <button className = "btn" onClick = {() => {if (value < max) onChange(value+1)}}>+</button>
        </div>
    )
}
export default GridSelector