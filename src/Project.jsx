import "./styles/project.css"
import React from 'react';
import { useState, useEffect, useRef } from "react"
import arrow from '../src/img/arrow.png';
import kb1 from './img/kb1.png';
import kb2 from './img/kb2.png';
import kb3 from './img/kb3.png';
import kb4 from './img/kb4.png';
import kb5 from './img/kb5.png';
import wt1 from './img/wt1.png';
import wt2 from './img/wt2.png';
import wt3 from './img/wt3.png';
import wt4 from './img/wt4.png';
import ak1 from './img/ak1.png';
import ak2 from './img/ak2.png';
import ak3 from './img/ak3.png';
import ak4 from './img/ak4.png';
import ak5 from './img/ak5.png';
import cr1 from './img/cr1.png';
import cr2 from './img/cr2.png';
import pr1 from './img/pr1.png';
import pr2 from './img/pr2.png';
import pr3 from './img/pr3.png';
import pr4 from './img/pr4.png';
import sm1 from './img/sm1.png';
import sm2 from './img/sm2.png';
import sm3 from './img/sm3.png';
import sw1 from './img/sw1.png';
import sw2 from './img/sw2.png';
import sw3 from './img/sw3.png';
import sw4 from './img/sw4.png';
import sw5 from './img/sw5.png';
import reacticon from './img/reacticon.png';
import instaIcon from './img/instagram.png';
import html from './img/html.png';
import scss from './img/scss.png';
import shortarrow from './img/shortarrow.png';
import portfolio from "./download/sumi_han_portfolio.pdf";


function Project(){
    const [vdProject, setvdProject] = useState("kb");
    const [cdProject, setCdProject] = useState("cr");
    const [category, setCategory] = useState("visualDesign");
    const [kbGallary, setKbGallary] = useState(0);
    const [wtGallary, setWtGallary] = useState(0);
    const [akGallary, setAkGallary] = useState(0);
    const [crGallary, setCrGallary] = useState(0);
    const [prGallary, setPrGallary] = useState(0);
    const [smGallary, setSmGallary] = useState(0);
    const [swGallary, setSwGallary] = useState(0);

    const kbGallaryList = [ kb1, kb2, kb3, kb4, kb5 ];
    const wtGallaryList = [ wt1, wt2, wt3, wt4 ];
    const akGallaryList = [ ak1, ak2, ak3, ak4, ak5 ];
    const crGallaryList = [ cr1, cr2 ];
    const prGallaryList = [ pr1, pr2, pr3, pr4 ];
    const smGallaryList = [ sm1, sm2, sm3 ];
    const swGallaryList = [ sw1, sw2, sw3, sw4, sw5 ];


    function SlideArrows({ list, setGallary }) {
        function prevSlide() {
          setGallary((currentIndex) =>
            currentIndex === 0 ? list.length - 1 : currentIndex - 1 );
        }
        function nextSlide() {
          setGallary((currentIndex) =>
            currentIndex === list.length - 1 ? 0 : currentIndex + 1 );
        }
        return (
          <div className="gallaryFilter">
            <div onClick={prevSlide}>&lt;</div>
            <div onClick={nextSlide}>&gt;</div>
          </div>
        );
    }

    function Listmapping({list, gallary, setGallary}) {
        return list.map((item, index) => (
          <button
            key={index}
            className={gallary === index ? "gallaryButtonClicked" : ""}
            onClick={() => setGallary(index)}
          ></button>
        ));
    }

    function CodingButton(){
        return(
            <div className="projectButtons">
                <button onClick={() => setCdProject("cr")}><div
                    className={`projectButton cdpjno ${cdProject === 'cr' && 'projectClicked'}`}
                    ></div>
                </button>
                <button onClick={() => setCdProject("pr")}><div
                    className={`projectButton cdpjno ${cdProject === 'pr' && 'projectClicked'}`}
                    ></div>
                </button>
                <button onClick={() => setCdProject("sm")}><div
                    className={`projectButton cdpjno ${cdProject === 'sm' && 'projectClicked'}`}
                    ></div>
                </button>    
            </div>
        )
    }
    function VisualDesignButton(){
        return(
            <div className="projectButtons">
                <button onClick={() => setvdProject("kb")}><div
                    className={`projectButton vdpjno ${vdProject === 'kb' && 'projectClicked'}`}
                    ></div>
                </button>
                <button onClick={() => setvdProject("wt")}><div
                    className={`projectButton vdpjno ${vdProject === 'wt' && 'projectClicked'}`}
                    ></div>
                </button>
                <button onClick={() => setvdProject("ak")}><div
                    className={`projectButton vdpjno ${vdProject === 'ak' && 'projectClicked'}`}
                    ></div>
                </button>
                <button onClick={() => setvdProject("sw")}><div
                    className={`projectButton vdpjno ${vdProject === 'sw' && 'projectClicked'}`}
                    ></div>
                </button>
    
            </div>
        )
    }
    function VisualDesign(){
        return(
            <div>
                {vdProject === "kb" && <ProjectGallary list={kbGallaryList} gallary={kbGallary} setGallary={setKbGallary}/>}
                {vdProject === "wt" && <ProjectGallary list={wtGallaryList} gallary={wtGallary} setGallary={setWtGallary}/>}
                {vdProject === "ak" && <ProjectGallary list={akGallaryList} gallary={akGallary} setGallary={setAkGallary}/>}
                {vdProject === "sw" && <ProjectGallary list={swGallaryList} gallary={swGallary} setGallary={setSwGallary}/>}                
            </div>
        )
    }
    function Coding(){
        return(
            <div>
                {cdProject === "cr" && <ProjectGallary list={crGallaryList} gallary={crGallary} setGallary={setCrGallary}/>}
                {cdProject === "pr" && <ProjectGallary list={prGallaryList} gallary={prGallary} setGallary={setPrGallary}/>}
                {cdProject === "sm" && <ProjectGallary list={smGallaryList} gallary={smGallary} setGallary={setSmGallary}/>}
                
            </div>
        )
    }
    function ProjectGallary({list, gallary, setGallary}){
        return(
            <div>
                <div className="gallary">
                    <div className="gallary-container">
                        <img 
                            src={list[gallary]}>
                        </img>
                        <SlideArrows
                            list={list}
                            setGallary={setGallary}
                        />  
                    </div>
                    
                    <div className="gallaryButtons">
                        <Listmapping 
                            list={list} 
                            gallary={gallary} 
                            setGallary={setGallary} 
                        />
                    </div>
                </div>
            </div>
        )

    }
    function Desc(des){
        return(
            <div className="projectRole">
                <img src={shortarrow}></img>
                <div>{des}</div>
            </div>
        )
    }
    function KbDes(){
        return(
            <div>
                <div className="projectName">Krazybird</div>
                <div className="projectStat">
                    <div className="projectCircle pink">16k</div>
                    <div className="projectCircleDes">Reach<br></br>per month</div>
                    <div className="projectCircle blue">80k</div>
                    <div className="projectCircleDes">Total<br></br>reels view</div>
                </div>
                <div className="projectRoleWrap">
                    <div className="projectRoles">
                        {Desc("Photo editing")}
                        {Desc("Brand visual formating")}
                        {Desc("SNS marketing")}
                        {Desc("Short form video filming")}
                    </div>
                    <div className="projectRoles">
                        {Desc("Promo managing")}
                        {Desc("Banner design")}
                        {Desc("Poster design")}
                        {Desc("Video editing")}
                    </div>
                </div>
                <div className="projectTags">
                    <a className="projectTag" target="_blank" href="https://www.instagram.com/krazybird.pennanthills/">Instagram</a>
                </div>
                
            </div>
        )

    }
    function WtDes(){
        return(
            <div>
                <div className="projectName">Wagyu on the Table</div>
                <div className="projectStat">
                    <div className="projectCircle pink">30k</div>
                    <div className="projectCircleDes">Reach<br></br>per month</div>
                    <div className="projectCircle blue">80k</div>
                    <div className="projectCircleDes">Total<br></br>reels view</div>
                </div>
                <div className="projectRoleWrap">
                    <div className="projectRoles">
                        {Desc("Photo editing")}
                        {Desc("Brand visual formating")}
                        {Desc("SNS marketing")}
                        {Desc("Short form video filming")}
                    </div>
                    <div className="projectRoles">
                        {Desc("Promotion managing")}
                        {Desc("Banner design")}
                        {Desc("Menu design")}
                        {Desc("Video editing")}
                       
                    </div>
                </div>
                <div className="projectTags">
                    <a className="projectTag" target="_blank" href="https://www.instagram.com/wagyuonthetable/">Instagram</a>
                </div>
                
                
            </div>
        )

    }
    function AkDes(){
        return(
            <div>
                <div className="projectName">Akira Sushi</div>
                <div className="projectStat">
                    <div className="projectCircle pink">20%</div>
                    <div className="projectCircleDes">Sales increase on avg <br></br>for every branch</div>
                </div>
                <div className="projectRoleWrap">
                    <div className="projectRoles">
                        {Desc("Photo editing")}
                        {Desc("Menu design")}
                        {Desc("SNS marketing")}
                        {Desc("Banner design")}
                    </div>
                    <div className="projectRoles">
                        {Desc("Promotion managing")}
                        {Desc("Menu photoshooting")}
                       
                    </div>
                </div>
                
            </div>
        )

    }
    function SwDes(){
        return(
            <div>
                <div className="projectName">Sushi & More Waterloo</div>
                <div className="projectStat">
                    <div className="projectCircle pink">20%</div>
                    <div className="projectCircleDes">Sales increase on avg <br></br>for every branch</div>
                </div>
                <div className="projectRoleWrap">
                    <div className="projectRoles">
                        {Desc("Photo editing")}
                        {Desc("Menu design")}
                        {Desc("SNS marketing")}
                        {Desc("Banner design")}
                    </div>
                    <div className="projectRoles">
                        {Desc("Promotion managing")}
                        {Desc("Menu photoshooting")}
                       
                    </div>
                </div>
                <div className="projectTags">
                    <a className="projectTag" target="_blank" href="https://www.instagram.com/sushimorewaterloo/">Instagram</a>
                </div>
                
                
            </div>
        )

    }
    function CrDes(){
        return(
            <div>
                <div className="projectName">This Website</div>
                <div className="projectPrograms">
                    <div className="projectProgram">
                        <div className="projectUsedCircle"><img className="projectUsedImg" src={reacticon}></img></div>
                        <div className="projectUsed">ReactJS</div>
                    </div>
                    <div className="projectProgram">
                        <div className="projectUsedCircle"><img className="projectUsedImg" src={html}></img></div>
                        <div className="projectUsed">HTML</div>
                    </div>
                </div>
                <div className="projectPrograms">
                    <div className="projectProgram">
                        <div className="projectUsedCircle"><img className="projectUsedImg" src={scss}></img></div>
                        <div className="projectUsed">CSS / <br></br>SCSS</div>
                    </div>

                </div>
                <div className="projectTags tagMargin">
                    <a className="projectTag" target="_blank" href="https://github.com/Sumi-Dumi/sumi-portfolio">Git Hub</a>
                </div>
                
                

                
            </div>
        )

    }
    function PrDes(){
        return(
            <div>
                <div className="projectName">My Previous Website</div>
                <div className="projectPrograms">
                    <div className="projectProgram">
                        <div className="projectUsedCircle"><img className="projectUsedImg" src={reacticon}></img></div>
                        <div className="projectUsed">ReactJS</div>
                    </div>
                    <div className="projectProgram">
                        <div className="projectUsedCircle"><img className="projectUsedImg" src={html}></img></div>
                        <div className="projectUsed">HTML</div>
                    </div>
                </div>
                <div className="projectPrograms">
                    <div className="projectProgram">
                        <div className="projectUsedCircle"><img className="projectUsedImg" src={scss}></img></div>
                        <div className="projectUsed">CSS / <br></br>SCSS</div>
                    </div>

                </div>
                <div className="projectTags tagMargin">
                    <a className="projectTag" target="_blank" href="https://github.com/Sumi-Dumi/react-prac-1">Git Hub</a>
                    <a className="projectTag" target="_blank" href="https://sumi-dumi.github.io/react-prac-1/">Website</a>
                </div>
                
                

                
            </div>
        )

    }
    function SmDes(){
        return(
            <div>
                <div className="projectName">Sushi & More</div>
                <div className="projectPrograms">
                    <div className="projectProgram">
                        <div className="projectUsedCircle"><img className="projectUsedImg" src={html}></img></div>
                        <div className="projectUsed">HTML</div>
                    </div>
                    <div className="projectProgram">
                        <div className="projectUsedCircle"><img className="projectUsedImg" src={scss}></img></div>
                        <div className="projectUsed">CSS / <br></br>SCSS</div>
                    </div>
                </div>
                <div className="projectTags tagMargin">
                    <a className="projectTag" target="_blank" href="https://github.com/Sumi-Dumi/restaurant-website-prac">Git Hub</a>
                </div>
            </div>
        )

    }
    
    return(
        <div className="project">
            <div className="projectNumber">
                <img className="projectLine" src={arrow}></img>
                <div className="number2">02</div>
                <img className="projectLine projectLine2" src={arrow}></img>
            </div>
            <div className="subtitle">PROJECTS</div>
            <div className="buttons">
                <button 
                    className={category === "visualDesign" && "projectMode"} 
                    onClick={() => setCategory("visualDesign")}>
                    VISUAL DESIGN
                </button>
                <button
                    className={category === "coding" && "projectMode"}  
                    onClick={() => setCategory("coding")}>
                    CODING
                </button>
            </div>
            {category === "visualDesign" && <VisualDesignButton></VisualDesignButton>}
            {category === "coding" && <CodingButton></CodingButton>}
            
            <div className="projectSection">
                
                <div className="photoGallary">
                    {category === "visualDesign" && <VisualDesign></VisualDesign>}
                    {category === "coding" && <Coding></Coding>}

                </div>
                <div className="projectDes">
                    {vdProject === "kb" && category === "visualDesign" && <KbDes></KbDes>}
                    {vdProject === "wt" && category === "visualDesign" && <WtDes></WtDes>}
                    {vdProject === "ak" && category === "visualDesign" && <AkDes></AkDes>}
                    {vdProject === "sw" && category === "visualDesign" && <SwDes></SwDes>}
                    {cdProject === "cr" && category === "coding" && <CrDes></CrDes>}
                    {cdProject === "pr" && category === "coding" && <PrDes></PrDes>}
                    {cdProject === "sm" && category === "coding" && <SmDes></SmDes>}
                </div>
            </div>
            <a href={portfolio} className="downloadPortfolio"download="Sumi-Han-Portfolio.pdf">
                FULL PORTFOLIO DOWNLOAD
            </a>  
            
        </div>
    )
}



export default Project; 