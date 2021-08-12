import React, { Component } from 'react'
import ImageBox from './ImageBox'
import MatrixBox from './matrixBox'

export default class MainComponent extends Component {
    state = {}

    render() {
        return (
            <div className = "main-component-wrapper">
                <MatrixBox gridSize={5}/>
                <ImageBox />
            </div>
        )
    }
}

