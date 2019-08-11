import React, { Component } from 'react';
import './resume.css';

export default class Resume extends Component {
    render() {
        return (
            <div className='resume_section' id='resume'>
                <div className='resume_section_title'>Resume</div>
                <div className="experience_item_a">
                    <p className="job_title">IT & Project Management Consultant</p>
                    <p className="company_name">Company: G2D Group</p>
                    <p className="dates_employed">Aug 2017 – Present</p>
                    <p className="employment_duration">1 yr 10 mos</p>
                    <p className="location_style">Huntington, New York</p>
                    <p className="job_description">
                    G2D develops, manages and brokers commercial and residential real estate across Manhattan and Long Island. Consulted on technological operations, policy, services and equipment; configured and deployed infrastructure, firewall, routers, switches and user hardware; deployed and managed backoffice services and user administration; implemented IT policies, procedures and best practices; managed IT and communicational services and vendors.
                    </p>
                </div>

                <div className="experience_item_b">
                    <p className="job_title">Chief Technology Officer</p>
                    <p className="company_name">Company: SIMPLENIGHT</p>
                    <p className="dates_employed">May 2014 – Jun 2017</p>
                    <p className="employment_duration">3 yrs 2 mos</p>
                    <p className="location_style">New York, NY</p>
                    <p className="job_description">
                    Hired to architect and build founder’s vision; recruited over 50 engineers and designersfrom around the world; developed policies, procedures and workflows for a 24 -hour development cycle; established a roadmap for software development and releases; oversaw team leaders and project managers: UX, design, infrastructure, QA, developers; worked closely with CEO and board developing and implementing business strategy; pushed more than 1million lines of code in 9 months; developed MVP that helped raise institutional investment ; participated in pitches with VCs, and sales presentations with vendors, partners and channels.
                    </p>
                </div>

                <div className="experience_item_a">
                    <p className="job_title">Cofounder & Chief Technology Officer</p>
                    <p className="company_name">Company: Cuzie</p>
                    <p className="dates_employed">2011 – 2014</p>
                    <p className="employment_duration">3 yrs</p>
                    <p className="location_style">New York, NY</p>
                    <p className="job_description">
                    Conceived and cofounded Cuzie.com, a web-based, video recruiting platform that quantified, matched and assessed candidates for posted jobs. Raised $3.5M in seed/angel investment. Oversaw all technical aspects of the business; UX, design, systems, front/backend development, QA, systems, unit testing; authored multiple Patent Filings; developed policies, procedures and workflows for a 24-hour development cycle, established a roadmap for development and releases; oversaw team leaders and PMs of UX/Design, Systems, QA, Front/Backend Devs; participated in Investment pitches for VCs and Sales presentations for vendors, partners and channels; absorbed previously founded startup, ReyesPearson International.
                    </p>
                </div>

                <div className="experience_item_b">
                    <p className="job_title">Director, Information Technology & Managed Services</p>
                    <p className="company_name">Company: BrandWizard</p>
                    <p className="dates_employed">Mar 2002 – Feb 2010</p>
                    <p className="employment_duration">8 yrs</p>
                    <p className="location_style">New York, NY</p>
                    <p className="job_description">
                    BrandWizard is an Omnicom Group subsidiary providing digital brand management SAAS for Fortune500 companies. Hired to build founder's hosting services division; Microsoft Certified Systems Engineer; built and rolled out hundreds of servers and networking equipment; managed day-to-day operations of company's IT and hosting business; Managed Services business generated more than 33% of company's revenue and most profitable revenue stream; oversaw P&L and forecasted annual finances; managed assets and client relationships; oversaw compliance of Sarbanes Oxley; utilized networking skills overseeing infrastructure, such as firewall & security management, penetration testing, vulnerability testing, load balancing, web/db/app services, hardware deployment, and vendor services.
                    </p>
                </div>

                <div className="experience_item_a">
                    <p className="job_title">Senior IT Executive</p>
                    <p className="company_name">Company: Raw Communications</p>
                    <p className="dates_employed">Oct 2000 – Mar 2002</p>
                    <p className="employment_duration">1 yr 6 mos</p>
                    <p className="location_style">New York, NY</p>
                    <p className="job_description">
                    Raw captured live, financial reports from public companies and satellite streamed video to traders and fund managers. Installed satellite dishes, services and networks on rooftop of the largest financial institutions, such as the World Trade Center, Fidelity Building, American Century, AIM, Northern Trust, Brandes, GE Financial, and Alliance Capital and others; traveled to all major cities in the US to major financial districts and trading floors; managed team of engineers conducting installations and maintenance projects; push projects amidst bureaucracies dealing with building unions, vendors, suppliers, contractors and security personnel; contributed direct input with R&D; skilled in multiplexing, routing, fiber/POTS lines, IRD satellite receivers and management servers; worked closely with sales, client project and executive management.
                    </p>
                </div>

                <div className="experience_item_b">
                    <p className="job_title">Systems and IT Support Engineer</p>
                    <p className="company_name">Company: US Interactive</p>
                    <p className="dates_employed">Feb 1999 – Oct 2000</p>
                    <p className="employment_duration">1 yr 9 mos</p>
                    <p className="location_style">New York, NY</p>
                    <p className="job_description">
                    US Interactive went public on the Nasdaq as one of Silicon Alley's most prominent Web Consultancy companies with 13 global offices. Early hire, company grew to over 2,000 users worldwide; deployed and maintained user computers and web servers for all offices worldwide; maintained user computers and software networking equipment and domain controllers; fought through the Melissa virus catastrophe; completed Microsoft Certified Systems Engineering certification.
                    </p>
                </div>

                <div className="experience_item_a">
                    <p className="job_title">PC Support Specialist</p>
                    <p className="company_name">Company: Sullivan & Cromwell</p>
                    <p className="dates_employed">Feb 1998 – Feb 1999</p>
                    <p className="employment_duration">1 yr 1 mo</p>
                    <p className="location_style">New York, NY</p>
                    <p className="job_description">
                    S&C serves as one of the most prestigious, international corporate law firms in the Financial District. Assigned to the historic Microsoft Anti-Trust Trial in Washington DC as lead tech support engineer supporting the IT needs of famed NY Partners, John Warden, Steve Holly, their associates, executives and counsel of Microsoft as such Bill Gates, Steve Balmer, Jim Allchin, Paul Maritz and Bill Neukom and other executives; supported office of over 500 attornies and over 1,500 staff worldwide on a Novell Network; supported 12 global offices and private home users via remote control LanSight and Cytrix WinFrame.
                    </p>
                </div>
            </div>
        )
    }
}
