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
                                    
                        <div className='portfolio_card'>
                            <h2 className="portfolio_card_title">Classic Duck Hunt Game</h2>
                            <p className="portfolio_content">A simplified, desktop version of the classic Nintendo game. Go ahead, play it!</p>
                            <p className="portfolio_content">HTML | CSS | Javascript</p>  
                            <a href='https://solitonyc.github.io/duck-hunt/' target="_blank"><img className='portfolio_box_image' alt='' src={portfolioImage01} /></a>        
                            
                        </div>

                        <div class='portfolio_card'>
                            <h2 className="portfolio_card_title">Ensemble: An Alumni Social Network</h2>
                            <p className="portfolio_content">A full-stack, social media CRUD application for General Assembly graduates.</p>
                            <p className="portfolio_content">HTML | CSS Flex | Javascript | Auth | React.js | Express | Rails | PostGreSQL | Heroku</p>
                            <a href='http://ensemble-ga.surge.sh/' target="_blank"><img className='portfolio_box_image' alt='' src={portfolioImage02} /></a>      
                            
                        </div>
                            
                        <div class='portfolio_card'>
                            <h2 className="portfolio_card_title">Picture Puzzle Game</h2>        
                            <p className="portfolio_content">A simple image puzzle that utilizes drag-and-drop that I created as a course project.</p>
                            <p className="portfolio_content">HTML | CSS Flex | Javascript</p>    
                            <a href='https://solitonyc.github.io/puzzle-game/' target="_blank"><img className='portfolio_box_image' alt='' src={portfolioImage03} />  </a>        
                            
                        </div>

                        <div class='portfolio_card'>
                            <h2 className="portfolio_card_title">Freelance Website</h2>        
                            <p className="portfolio_content">A website I developed for STI as part of a bigger branding project.</p>
                            <p className="portfolio_content">HTML | CSS | Javascript | WordPress</p>
                            <a href='http://sequentialtech.com/' target="_blank"><img className='portfolio_box_image' alt='' src={portfolioImage04} /></a>       
                            
                        </div>              
                    
                        <div className='portfolio_card'>
                            <h2 className="portfolio_card_title">Marvel Comics Character Search</h2>        
                            <p className="portfolio_content">A search tool for matching Marvel characters with entered character strings.</p>
                            <p className="portfolio_content">HTML | CSS Flex | Javascript | Node.js | React.js | Fetch | Marvel API | Heroku</p>                    
                            <a href='https://ancient-shelf-14355.herokuapp.com/welcome' target="_blank"> <img className='portfolio_box_image' alt='' src={portfolioImage05} /></a>        
                            
                        </div>                    
            
            </div>
        )
    }
}
