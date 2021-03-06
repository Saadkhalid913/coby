import React, {useContext} from 'react'
import ImageContext from '../contexts/imageContext'

const ImageBox = ({imgSrc, onImgChange}) => {
    const {src, setImage}  = useContext(ImageContext)

    return (
        <div className = "img-box-wrapper">
            <div className = "img-box">
                <img alt="" src = {src ? URL.createObjectURL(src) : ""} />
                <input name="file-dropbox" type = "file" accept=".png, .jpeg, .jpg" onChange={e => {setImage(e.target.files[0])}}/>
            </div>
        </div>
    )
}

export default ImageBox