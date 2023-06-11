import React from 'react'
import "./header.css";
import cv from './CV_Website.pdf';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">Sindhura Jain</Link>

                <div className={"nav__menu show-menu"}>
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
                </div>

            </nav>
        </header>
    );
};

export default Header;