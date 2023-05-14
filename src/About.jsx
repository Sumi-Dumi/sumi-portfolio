import "./styles/about.css"
import React from 'react';

function About(){
    return(
        <div className="About">
            <div className="stat">
                <div>
                    <h1>01</h1>
                    <div className="lineWrapper">
                        <div className="firstline"></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="number">
                <div className="numberWrapper">
                    <div className="numberCircle blue">
                        <h1>1.7</h1><h3>years</h3>
                    </div>
                    <div className="numberDes">VISUAL DESIGNER<br></br>WORK EXP</div>
                </div>
                <div className="numberWrapper">
                    <div className="numberCircle pink">
                        <h1>CODER</h1><h3>wannabe</h3>
                    </div>
                    <div className="numberDes">A DESPERATE<br></br>JOB SEEKER...very</div>
                </div>
            </div>
            <div className="aboutText">
                <div>ABOUT ME</div>
                <p>When a foodie became a <br></br>coder & designer</p>
            </div>
            <div className="underbar">
                <div className="lineWrapper">
                    <div className="firstline"></div>
                    <div></div>
                </div>
                
            </div>
        </div>
    )
   
}

export default About; 