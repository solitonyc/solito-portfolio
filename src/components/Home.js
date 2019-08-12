import React, { Component } from 'react';
import homeBgImage from './images/backgrounds/home_bg.jpg';
import './home.css';

export default class Home extends Component {
    render() {
        let style = {
            backgroundImage: `url(${homeBgImage})`
        }
        return (
            <div className="home_section" id="home">
                <div style={style} className='home_section_background'>
                    <div className="home_section_content_container">
                        <div className='home_title'>CREATIVE ENGINEERING & LEADERSHIP</div>
                        <div className='home_subtitle'>Portfolio Site of <span id='highlight'>Solito Reyes</span></div>
                   </div>                  
                </div>
            </div>
        )
    }
}
