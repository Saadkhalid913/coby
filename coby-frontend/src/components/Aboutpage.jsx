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
                        Coby is an online image editing/matrix convolution visualizer tool. It was 
                        created using React.js and the Flask framework for python 3. The tool allows 
                        you to be able to manipulate images quickly and reactivly with matrices. 
                    </p>
                </div>
                <div className="creator-section">
                <h2 className = "about-page-heading">About the Creator</h2>
                <p className="about-page-paragraph">
                    My name is <a target = "_blank" rel="noreferrer" href="http://saadkhalid.ca">Saad Khalid</a>, 
                    and I created this web app as a side project to better understand the steps taken 
                    by CNN's (Convolutional Neural Networks) to extract features from images. 
                </p>
                </div>
            </div>
      </React.Fragment>

    )
}

export default Aboutpage