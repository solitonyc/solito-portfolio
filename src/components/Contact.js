import React, { Component } from 'react';
import './contact.css';
import contactBgImage from './images/backgrounds/contact-bg.jpg';
import inImage from './images/li-logo.png';

export default class Contact extends Component {
    render() {
        let style = {
            backgroundImage: `url(${contactBgImage})`
        }
        return (
            <div className="contact_section" id="contact">
                <div style={style} className='contact_section_background'> 
                <div className="contact_section_content_container">
                    <div className='contact_title'>
                        Contact Me for Hire
                    </div>
                    <div className='contact_content'>
                        Solito Reyes<br />
                        Phone: (646) 403.7500<br />
                        New York, NY<br />
                        Email: solitonyc@gmail.com<br />
                            
                    </div>  
                    <div className='linked_in'>
                    <a href='https://www.linkedin.com/in/solito/' target="_blank"><img className='logo_image' alt='' src={inImage} /></a><br />  
                        <a href='https://www.linkedin.com/in/solito/' target="_blank">See LinkedIn Profile</a>
                    </div> 
                    <div className='contact_subtitle'>
                        Send Me a Private Message
                    </div>              
                    <div className='contact_content'>
                        Click the button below and complete the following form.  I'll respond back ASAP.
                    </div>
                    <div>
                        <button className='contact_button'><a href="/form.html">Contact Me</a></button>
                    </div>                        
                </div>                        
            </div>                  
        </div> 
       
        )
    }
}
