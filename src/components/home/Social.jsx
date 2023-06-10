import React from 'react'
import "./home.css";
import {Link} from "react-router-dom";

const Social = () => {
    return (
        <div className ="home__social">
            <a href="https://www.linkedin.com/in/sindhura-jain" className="home__social-icon" target="_blank">
            <i class="uil uil-linkedin"></i>
            </a>

            <a href="mailto:sindhura394@gmail.com" className="home__social-icon" target="_blank">
            <i class="uil uil-envelope"></i>
            </a>

            <a href="https://github.com/sindhurajain" className="home__social-icon" target="_blank">
            <i class="uil uil-github"></i>
            </a>
        </div>
    )
}
export default Social;