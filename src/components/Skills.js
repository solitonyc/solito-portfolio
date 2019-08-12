import React, { Component } from 'react';
import './skills.css';

export default class Skills extends Component {
    render() {
        return (
            
            <div className='skills_section' id='skills'>
                <div className="skills_section_title">SKILLS</div>
                 <div className="skills_columns_container">
                    <div className='skills_column_box'>
                        <div className="skills_column_title">Management</div>
                            <ul className="skills_column_list">
                                <li>Product Management</li>
                                <li>Project Management</li>
                                <li>Technical Writing</li>
                                <li>Agile</li>
                                <li>JIRA</li>
                                <li>24-Hour Development Cycle</li>
                                <li>Recruiting</li>		
                            </ul>
                        </div>
                      

                        <div className="skills_column_box">
                            <div className="skills_column_title">Business</div>
                            <ul className="skills_column_list">
                                <li>C-Level Management</li>
                                <li>Operations Management</li>
                                <li>Business Modeling</li>
                                <li>Business Strategy</li>
                                <li>Investor Relations and Presentations</li>
                                <li>Marketing and Brand Management</li>
                                <li>Strategic Partnerships</li>		
                            </ul>
                        </div>

                        <div className="skills_column_box">
                            <div className="skills_column_title">Technical</div>
                            <ul className="skills_column_list">
                                <li>HTML, CSS</li>
                                <li>JavaScript</li>
                                <li>Node.js</li>
                                <li>PostGreSQL</li>
                                <li>React</li>
                                <li>Ruby / Ruby on Rails</li>
                                <li>Git/GitHub</li>		
                            </ul>
                        </div>
                    </div>
                
                
               
            </div>
          
                              
            
           
        )
    }
}
