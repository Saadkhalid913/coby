import React from 'react'
import IntroPage from './intro'
import Navbar from './Navbar'

const Homepage = () => {
    return (
        <div className ="homepage-wrapper">
            <Navbar />
            <IntroPage/>
        </div>
    )
}

export default Homepage