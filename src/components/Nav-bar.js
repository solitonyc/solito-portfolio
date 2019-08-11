import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from './images/logo.jpg';
import './nav-bar.css';

export default class Nav-bar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop(); 
    };
    render() {
        return (
            <div className="nav-bar">
                <img src={logo} 
                    alt="Logo" 
                    className='nav_logo'
                    onClick={this.scrollToTop}
                    />
                <Link
                    className="nav-links"
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                    >Home</Link>
                
                <Link
                    className="nav-links"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >Resume</Link>
                
                <Link
                    className="nav-links"
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >Portfolio</Link>
                
                <Link
                    className="nav-links"
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >Education</Link>

             </div>   
        )
    }
}
