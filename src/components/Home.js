import React, { Component } from 'react';
import homeBgImage from './images/backgrounds/home_bg.jpg';
import './home.css';

export default class Home extends Component {
    render() {
        let style = {
            backgroundImage: `url(${homeBgImage})`
        }
        return (
            <div className="home_section" id="main">
                <div style={style} className='home_section_background'>
                    <div className="home_section_content_container">
                        <div className='home_container_title'>CREATIVE ENGINEERING!</div>
                   </div>                  
                </div>
            </div>
        )
    }
}
