import React from "react";
import { Link } from "react-router-dom";
import icon from "../images/icon.png";
import camera from "../images/camera.png";
import './nav.css';


const Navbar = ()=>{

    return(
        <div className="header">
            <div className="logo">
                <img className="logo-img" src={icon} alt ="logo" />
                <span>InstaClone</span>
            </div>
            <div className="camera-icon">
              <Link to="/form"><img className="camera-img" src={camera} alt="camera" /></Link>
            </div>
        </div>
    )
}
export default Navbar