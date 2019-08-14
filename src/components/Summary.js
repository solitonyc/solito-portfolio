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
                <div className="summary_content_container">
                    <div className="summary_section_title">SUMMARY</div>
                    <div className="summary_content">Former CTO, with over 18 years of tech industry experience, seeking a role leveraging leadership qualities, managerial aptitude, busines acumen, web development and infrastructure/systems engineering skills working with numerous tech-based companies in New York. Solito possesses extensive experiences overseeing the development and production of software products through its extensive lifecycle from board-room idea to production. He understands the critical planning, designing, budgeting, resourcing and roadmapping that must be solidifed before development even starts.</div>
                    <div className="summary_section_subtitle">Possible Roles:</div>
                    <div className="summary_content">Seeking role as Chief Technology Officer, Product Manager or Project Manager. In regards to programming, I posses over 3 years coding front-ends and web development. I posses junior level expertise coding full-stack apps.</div>
                </div>
            </div>
        )
    }
}
