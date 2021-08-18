import React from 'react'
import Navbar from "./Navbar"
import "../index.css"
const Aboutpage = () => {
    return (
      <React.Fragment>
            <Navbar />
            <div className="main-content">
                <div className="about-section">
                    <h2 className = "about-page-heading">About COBY</h2>
                    <p className = "about-page-paragraph">
                    Coby is an online image editing/matrix convolution visualizer tool. It was created using React.js and the Flask framework for python 3. The tool allows you to be able to manipulate images quickly and reactively with matrices. The tool accepts JPEG and PNG images and returns uncompressed .PNG format files (This is done to preserve quality).
                    </p>
                </div>
                <div className="creator-section">
                <h2 className = "about-page-heading">About the Creator</h2>
                <p className="about-page-paragraph">
                My name is <a href= "https://saadkhalid.ca">Saad Khalid</a>, I'm a high school student interested in machine learning and computational image processing. I created this web app as a side project to better understand the steps taken by CNN's (Convolutional Neural Networks) to extract features from images. This project is open source and there is a public <a href ="https://github.com/Saadkhalid913/coby">GitHub</a> repository that you can fork or contribute to.
                </p>
                </div>
                <div className="license-section">
                <h2 className = "about-page-heading">License</h2>
                <p className="about-page-paragraph">
                    This software is licensed under the <a href = "https://www.mit.edu/~amini/LICENSE.md">MIT licence</a> 
                </p>
                </div>
            </div>
      </React.Fragment>

    )
}

export default Aboutpage