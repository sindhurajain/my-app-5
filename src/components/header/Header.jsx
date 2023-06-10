import React, { useState } from 'react'
import "./header.css";
import cv from './CV_Website.pdf';
import {Link} from "react-router-dom";


const Header = () => {
        const[Toggle, showMenu] = useState(false);
    return (
        <header className="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">Sindhura Jain</Link>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className = "nav__list grid"> 


                        <li className = "nav__item">
                            <a href ={cv} target="_blank" className = "nav__link">
                                <i className="uil uil-user nav__icon"> </i> Resume
                            </a>
                        </li>

                        <li className = "nav__item">
                            <Link to="/work-experience" className = "nav__link">
                                <i className="uil uil-file-alt nav__icon"> </i> Work Experience
                            </Link>
                        </li>


                        <li className = "nav__item">
                            <Link to="/projects" className = "nav__link">
                                <i className="uil uil-scenery nav__icon"> </i> Projects
                            </Link>
                        </li>

                    </ul>

                <i class = "uil uil-times nav__close" onClick={() => showMenu
                (!Toggle)}> </i>

                </div>

                <div className="nav__toggle" onClick={() => showMenu
                (!Toggle)}> 
                    <i class="uil uil-apps"> </i>
                </div>
            </nav>
        </header>
    );
};

export default Header;