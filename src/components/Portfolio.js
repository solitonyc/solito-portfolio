import React, { Component } from 'react';
import './portfolio.css';
import portfolioBgImage from './images/backgrounds/portfolio-bg.jpg';
import portfolioImage01 from './images/portfolio-01.jpg';
import portfolioImage02 from './images/portfolio-02.jpg';
import portfolioImage03 from './images/portfolio-03.jpg';
import portfolioImage04 from './images/portfolio-04.jpg';
import portfolioImage05 from './images/portfolio-05.jpg';

export default class Portfolio extends Component {
    render() {
        let style = {
            backgroundImage: `url(${portfolioBgImage})`
        }
        return (
            <div style={style} className='portfolio_section' id='portfolio'>
                <div className='portfolio_section_title'>PORTFOLIO</div>
                <div className='portfolio_section_subtitle'>Take a look at some of my personal and freelance programming projects. </div>
                                    
                        <div className='portfolio_card'>
                            <h2 className="portfolio_card_title">Duck Hunt Game</h2>
                            <p className="portfolio_content">A simplified, desktop version of the classic Nintendo first person shoooter, video game. Use your mouse to aim at ducks flying around, then click to shoot. Go ahead, play it!</p>
                            <p className="portfolio_content">HTML | CSS | Javascript | GitHub</p>  
                            <a href='https://solitonyc.github.io/duck-hunt/' target="_blank"><img className='portfolio_box_image' alt='' src={portfolioImage01} /></a>        
                            
                        </div>

                        <div class='portfolio_card'>
                            <h2 className="portfolio_card_title">Full Stack, Social Network</h2>
                            <p className="portfolio_content">A full-stack, social media CRUD application for General Assembly graduates.</p>
                            <p className="portfolio_content">HTML | CSS Flex | Javascript | Auth | React.js | Express | Rails | PostGreSQL | GitHub | Heroku</p>
                            <a href='http://ensemble-ga.surge.sh/' target="_blank"><img className='portfolio_box_image' alt='' src={portfolioImage02} /></a>      
                            
                        </div>
                            
                        <div class='portfolio_card'>
                            <h2 className="portfolio_card_title">Picture Puzzle Game</h2>        
                            <p className="portfolio_content">A simple image puzzle that utilizes drag-and-drop. Place random pieces from one side of the board to its proper position on the other to complete the picture. I developed this game as a course project.</p>
                            <p className="portfolio_content">HTML | CSS Flex | Javascript | GitHub</p>    
                            <a href='https://solitonyc.github.io/puzzle-game/' target="_blank"><img className='portfolio_box_image' alt='' src={portfolioImage03} />  </a>        
                            
                        </div>

                        <div class='portfolio_card'>
                            <h2 className="portfolio_card_title">Freelance Website</h2>        
                            <p className="portfolio_content">A website I developed for a client as part of a bigger re-brand project. I worked closely with their executive team in developing their brand, and collaborated with their sales and content writers for the website.</p>
                            <p className="portfolio_content">HTML | CSS | Javascript | WordPress</p>
                            <a href='http://sequentialtech.com/' target="_blank"><img className='portfolio_box_image' alt='' src={portfolioImage04} /></a>       
                            
                        </div>              
                    
                        <div className='portfolio_card'>
                            <h2 className="portfolio_card_title">API Integration &amp; Retrieve</h2>        
                            <p className="portfolio_content">By utilizing fetch to integrate into Marvel's API, I created a search tool that retrieves Marvel characters from it's catalogue that match submitted character strings.</p>
                            <p className="portfolio_content">HTML | CSS Flex | Javascript | Node | React | Fetch | Marvel API | Heroku</p>                    
                            <a href='https://ancient-shelf-14355.herokuapp.com/welcome' target="_blank"> <img className='portfolio_box_image' alt='' src={portfolioImage05} /></a>        
                            
                        </div>                    
            
            </div>
        )
    }
}
