import React, { Component } from 'react'
import ImageBox from './ImageBox'
import MatrixBox from './matrixBox'
import MatrixContext from "../contexts/matrixContext"
import ImageContext from "../contexts/imageContext"
import LoadingIcon from "./LoadingIcon.gif"
import Homepage from './HomePage'
import { toast } from "react-toastify"

toast.configure()

export default class MainComponent extends Component {
    state = {
        gridSize: 2,
        matrix: [],
        image: undefined,
        original_image: undefined,
        loading: false,
        mode: "Convolution"
    }

    componentDidMount() {
        this.setGridSize(2)
    }

    render() {
        if (this.state.loading) return <div className = "loading-box"><img src = {LoadingIcon} alt="Loading" />Loading...</div>
        return (
            <ImageContext.Provider value={{src: this.state.image, setImage: this.setImage}}>
                <MatrixContext.Provider value={{ matrix: this.state.matrix, setMatrixValue:  this.setMatrixValue}}>
                    <Homepage/>
                    <div className = "main-content-wrapper">
                        <div className = "main-component-wrapper">
                            <MatrixBox defaultMode = {this.state.mode} gridSize={this.state.gridSize} setGridSize ={this.setGridSize} onModeChange={this.onModeChange}/>
                            <ImageBox />
                        </div>
                       <div className = "main-button-wrapper">
                            <button className = "btn" onClick = {this.submitImage}>Submit</button>
                            <button className = "btn" onClick = {this.revertImage}>Revert</button>
                       </div>
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

    onModeChange = (mode) => {
        this.setState({ mode })
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
        imageform.append("mode",  this.state.mode)

        this.setState({loading: true})
        const data  = await fetch("/upload", {
            mode: "cors",
            method: "post",
            body: imageform
        }).catch(err => toast.error("There was an error connecting to the server"))

        if (data.status !== 200) return toast.error("There was an error")



        const data1 = JSON.parse(JSON.stringify(data))
        try {
            const body = await data1.json()
        }
        catch(ex) {
            const imageData = await data.blob()
            this.setState({image: imageData})
        }
        this.setState({loading: false})

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

