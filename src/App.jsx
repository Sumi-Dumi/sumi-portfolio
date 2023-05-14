import "./styles/app.css"
import resume from "./download/resume.pdf"
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react"
import menuIcon from "./img/menu.png"
import closeIcon from './img/close.png'
import githubIcon from './img/github.png'
import linkedinIcon from './img/linkedin.png'
import About from './About'
import Project from './Project'

function Main({order, des1, des2, tag1, tag2, tag3, tag4, tag5, tag6}){
  return(
    <div className={`descriptionWrapper ${order}`}>
      <div className="descriptionWrapper2">
        <p>{des1}<br></br>{des2}</p>
        <div className="tags">
          <div className="tagrow1">
            <div className="tag">{tag1}</div>
            <div className="tag">{tag2}</div>
            <div className="tag">{tag3}</div>
          </div>
          <div className="tagrow2">
            <div className="tag">{tag4}</div>
            <div className="tag">{tag5}</div>
            <div className="tag">{tag6}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Line(){
  return(
    <div className="lineSection">
      <div className="line">
        <div className="lineright line1 linewidth"></div><div className="linewidth"></div>
      </div>
      <div className="dotSection">
        <div className="dot"></div>
      </div>
      <div className="line">
        <div className="lineright line2 linewidth"></div><div className="linewidth"></div>
      </div>
      <div className="dotSection">
        <div className="dot"></div>
      </div>
      <div className="line">
        <div className="lineright line3 linewidth"></div><div className="linewidth"></div>
      </div>
    </div>
  )
  
}



function App() {

  const githublink = "https://github.com/Sumi-Dumi"
  const linkedinlink = "https://www.linkedin.com/in/han-sumi-13117b242/"

  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  const toAbout = () => {
    const element = document.querySelector('.About');
    element.scrollIntoView({ behavior: 'smooth' });
  };
  const toProject = () => {
    const element = document.querySelector('.underbar');
    element.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div>
      
      <div className="body">
        <div className="navbarSection">
          <Link to="/"><button className="myName"><h1>Sumi</h1><h2>Han</h2></button></Link>  
          <button>
            <img 
              onClick={toggleNavbar}
              className={`menu ${isOpen ? 'active' : ''}`}
              src={menuIcon}
            > 
            </img>
          </button>    
          <div className={`nav ${isOpen ? 'active' : ''}`} >
            <button onClick={toggleNavbar}>
              <img classname="closeIcon" src={closeIcon}></img>
            </button>
            <div>
              <a onClick={toAbout}>About</a>
              <a onClick={toProject}>Projects</a>
              <a href={resume} className="resumeButton" download="Sumi-Han-CV-Resume.pdf">
                RESUME
              </a>  
            </div>          
          </div>
        </div>

        <div className="main">
          <Main 
            order="des1"
            des1={"Web & publishable design"}
            des2={"Marketing content design"}
            tag1={"DIGITAL"}
            tag2={"PRINTABLE"}
            tag3={"VIDEO"}
            tag4={"SNS"}
            tag5={"EDITING"}
            tag6={"BRANDING"}
          />
          <Main 
            order="des2"
            des1={"Front-end developing skills"}
            des2={"with a bit of back-end"}
            tag1={"HTML"}
            tag2={"CSS"}
            tag3={"JAVA SCRIPT"}
            tag4={"PYTHON"}
            tag5={"SCSS"}
            tag6={"REACT JS"}
          />
          <Line />
          <div className="mainfont slide-left title1">VISUAL DESIGNER
            <div className="subfont slide-left">VISUAL DESIGNER</div>
          </div>
          <div className="mainfont slide-left title2">CODER
            <div className="subfont slide-left">CODER</div>
          </div>
        </div>
        <About></About>
        <Project></Project>
      </div>
      
      <div className="social">
        <a href={linkedinlink} target="_blank"><img className="snslink" src={linkedinIcon}></img></a>
        <a href={githublink} target="_blank"><img className="snslink" src={githubIcon}></img></a>
      </div>

      

    </div>

  )
}

export default App
