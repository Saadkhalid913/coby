const GridSelector = ({onChange, value, min, max}) => {
    return (
        <div className = "grid-selector">
            <button onClick = {() => {if (value > min) onChange(value-1)}}>-</button>
            <h3>{value}</h3>
            <button onClick = {() => {if (value < max) onChange(value+1)}}>+</button>
        </div>
    )
}
export default GridSelector