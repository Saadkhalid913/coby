import React, { Component, useEffect, useState } from 'react'
import ImageBox from './ImageBox'
import MatrixBox from './matrixBox'

export default class MainComponent extends Component {
    state = {}

    render() {
        return (
            <div>
                <MatrixBox gridSize={5}/>
                <ImageBox />
            </div>
        )
    }
}