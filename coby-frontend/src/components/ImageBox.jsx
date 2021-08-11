import React from 'react'

const ImageBox = ({imgSrc, onImgChange}) => {
    return (
        <div className = "img-box-wrapper">
            <div className = "img-box">
                <img alt="" src = {imgSrc} />
                <input  type = "file" onChange={e => {console.log(e.target.files[0])}}/>
            </div>
        </div>
    )
}

export default ImageBox