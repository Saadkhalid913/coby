import React from 'react'
import cobylogo from "./cobylogo.png"
import {Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className = "navbar">
            <div className = "nav-img-wrapper">
                <Link to = "/about">
                <img alt = "coby logo" src ={cobylogo} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar