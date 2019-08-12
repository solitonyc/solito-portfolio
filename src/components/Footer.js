import React, { Component } from 'react';
import './footer.css';
import {Link, animateScroll as scroll } from "react-scroll";

export default class Footer extends Component {
    scrollToTop = () => {
        scroll.scrollToTop(); 
    };
    render() {        
        return (
            <div className="footer_section" id="footer">
                <div className="back_to_top">
                    <Link onClick={this.scrollToTop} className="back_to_top">Back to Top</Link>
                </div>
                <div className='footer_content'>Copyright &copy; 2019 Solito Reyes II || All Rights Reserved <br/> Some images are original, copyright protected works.</div> 
            </div>
        )
    }
}
