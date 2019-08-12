import React, { Component } from 'react';
import './education.css';

export default class Education extends Component {
    render() {
        return (
            <div className='education_section' id='education'>
                <div className='education_section_title'>Education</div>
                <div className="education_item_a">
                    <p className="school_name">General Assembly</p>
                    <p className="degree_name">Web Development Immersive</p>
                    <p className="degree_descrip">Compressed course in HTML, CSS/Flex/Grid, Git, JavaScript, Node.js, React.js, Express, PostGreSQL, Ruby, Ruby on Rails, Heroku, Agile, Khan Ban</p>
                    <p className="location_style">Manhattan, NY</p>
                </div>
                <div className="education_item_b">
                    <p className="school_name">Devry</p>
                    <p className="degree_name">Telecommunications</p>
                    <p className="degree_descrip">Telecommunications, Electrical Engineering, Intranetworking, Infrastructure</p>
                    <p className="location_style">North Brunswick, NJ</p>
                </div>
                <div className="education_item_a">
                    <p className="school_name">Monmouth University</p>
                    <p className="degree_name">Political Science // Bachelors Degree // GPA: 3.5</p>
                    <p className="location_style">W. Long Branch, NJ</p>
                </div>
                <div className='education_section_subtitle'>Certifications</div>
                <div className="education_item_a">
                    <p className="school_name">MCSE</p>
                    <p className="degree_name">Microsoft Certified Systems Engineer</p>
                    <p className="degree_descrip">Intranetworking, Infrastructure, DevOps, TCP/IP, DNS, Routing, Switching, Firewalls, NOS, Domain Management</p>
                    <p className="location_style">New York, NY</p>
                </div>
            </div>
        )
    }
}
