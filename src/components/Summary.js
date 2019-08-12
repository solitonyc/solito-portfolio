import React, { Component } from 'react';
import summaryBgImage from './images/backgrounds/summary-bg.jpg';
import './summary.css';

export default class Summary extends Component {
    render() {
        let style = {
            backgroundImage: `url(${summaryBgImage})`
        }
        return (
            <div style={style} className='summary_section' id='summary'>
                <div className="skills_section_title">SUMMARY</div>
                <div className="skills_content">Former CTO, with over 18 years of tech industry experience, seeking a role leveraging leadership qualities, managerial aptitude, busines acumen, software skills and experiences working with tech-minded companies in New York. Possesses extensive experiences overseeing the development and production of software products through its extensive lifecycle from board-room idea to production.</div>
                <div className="skills_section_subtitle">Possible Roles:</div>
                <div className="skills_content">Seeking role as Chief Technology Officer, Product Manager or Project Manager. Also has hands on full-stack coding experience.</div>
              
            </div>
        )
    }
}
