import React, { useState, useEffect } from 'react'

const ImageBox = ({imgSrc, onImgChange}) => {
    return (
        <div className = "img-box-wrapper">
            <div className = "img-box">
                <img src = {imgSrc} />
                <input type = "file" onChange={e => {console.log(e.target.files)}}/>
            </div>
        </div>
    )
}

export default ImageBox