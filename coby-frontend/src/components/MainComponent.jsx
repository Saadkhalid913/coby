import React, { Component } from 'react'
import ImageBox from './ImageBox'
import MatrixBox from './matrixBox'
import MatrixContext from "../contexts/matrixContext"
import ImageContext from "../contexts/imageContext"
export default class MainComponent extends Component {
    state = {
        gridSize: 2,
        matrix: [],
        image: undefined,
        original_image: undefined
    }

    componentDidMount() {
        this.setGridSize(2)
    }

    render() {
        return (
            <ImageContext.Provider value={{src: this.state.image, setImage: this.setImage}}>
                <MatrixContext.Provider value={{ matrix: this.state.matrix, setMatrixValue:  this.setMatrixValue}}>
                    <div className = "main-content-wrapper">
                        <div className = "main-component-wrapper">
                            <MatrixBox gridSize={this.state.gridSize} setGridSize ={this.setGridSize}/>
                            <ImageBox />
                        </div>
                        <button onClick = {this.submitImage}>Submit</button>
                        <button onClick = {this.revertImage}>Revert</button>
                    </div>
                </MatrixContext.Provider>
            </ImageContext.Provider>
        )
    }

    setGridSize = (gridSize) => {
        this.setState({gridSize})
        const matrix = this.createMatrixZeros(gridSize)
        this.setState({matrix})
    }

    createMatrixZeros = (size) => {
        const matrix = []
        for (let i = 0; i < size; i++) {
            matrix.push([])
            for (let j = 0; j < size; j++) {
                matrix[i].push(0)
            }
        }
        return matrix
    }

    setMatrixValue = (value, i, j) => {
        const oldMatrix = [...this.state.matrix] 
        oldMatrix[i][j] = parseInt(value)
        this.setState({matrix :oldMatrix} )
    }

    submitImage = async () => {
        if (!this.state.image) return 

        let imageform = new FormData()
        imageform.append("image", this.state.image)
        imageform.append("matrix", this.state.matrix)
        imageform.append("size", this.state.gridSize)
        imageform.append("mode",  "conv")
        const data  = await fetch("http://localhost:5000/upload", {
            mode: "cors",
            method: "post",
            body: imageform
        })
        console.log(data)
        const data1 = JSON.parse(JSON.stringify(data))
        try {
            const body = await data1.json()
            console.log(body)
        }
        catch(ex) {
            const imageData = await data.blob()
            this.setState({image: imageData})
        }
    }

    setImage = (image) => {
        this.setState({image})
        this.setState({original_image: image})
    }

    revertImage = () => {
        const original_image = this.state.original_image
        this.setState({image: original_image})
    }
}

