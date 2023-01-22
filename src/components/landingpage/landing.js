import React from "react";
import { Link } from "react-router-dom";
import lens from "../../images/lens.png";
import './landing.css' ;

const LandingPage =()=>{

    return(
        <div className="landing">
            <div className="landing-image">
              <img id="image"  src={lens} alt="lensimage" />
            </div>
            <div className="para">
                <div><b>Welcome to 10X Academy</b></div>
                 <button><Link to="/post">Enter</Link></button>
                </div> 
                
        </div>
    )
}
export default LandingPage;