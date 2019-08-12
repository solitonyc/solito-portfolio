import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from './images/logo.png';
import './nav.css';

export default class Nav extends Component {
    state = {};
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
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                    >Home</Link>
                
                <Link
                    className="nav-links"
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >Resume</Link>
                
                <Link
                    className="nav-links"
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >Portfolio</Link>
                
                <Link
                    className="nav-links"
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >Education</Link>

                <Link
                    className="nav-links"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >Contact</Link>

             </div>   
        )
    }
}
