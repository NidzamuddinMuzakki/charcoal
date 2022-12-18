import React,{ useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {DivHeaderMenu,DivParentMenuTop,DivBurgerMenu, DivMenuTop,DivHero,DivLogoMenuTop, DivHitam, DivJudul,DivIcon, DivPunya,DivContentJudul ,DivImg, DivLeftMenu, DivRightMenu} from "./../home/styled";
// import HeroImg from './../../assets/img/hero1.webp'
import { DivContents, DivContent,DivIConCUy } from "../Content/styled";
import { DivIconContener,DivIconContenerS,DivContener,DivContenerS } from "../home/styled";
import Flame from './../../assets/img/flame-transformed.webp'
import Flame2 from './../../assets/img/25572-removebg-preview.png'
import { DivParentDetail,DivJudulSales,DivParnetSales, DivSales,DivButtonAsk } from "./styled";
import Content from "../Content/content";
import Tatesless from  './../../assets/img/Tasteless.png'
import LowAshContent from './../../assets/img/low_ash_content.png'

import Ouderless  from './../../assets/img/orderless.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
  } from "react-router-dom";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import ScrollTriggerProxy from "./../ScrollTriggerProxy";
import Footer from "../footer";
import IMG2 from './../../assets/img/ezgif.com-gif-maker.webp'
import IMG3 from './../../assets/img/ezgif.com-gif-maker (6).webp'
import Logo from './../../assets/img/wa.png'
import { InlineIcon } from "@iconify/react";
import { useOnLoadImages } from "../../loaded";
import Image1 from './../../assets/img/ezgif.com-gif-maker (6).webp'

import LazyLoad from "../../load";
const Home = ()=>{
    let m = useLocation();
    // const wrapperRef = useRef(null);
    let turbulance = useRef(null)
    const containerRef = useRef(null);
    let DivParentHomeRef = useRef(null);
    const cuyRef = useRef(null)
    const imagesLoaded = useOnLoadImages(cuyRef);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);
    let Image1Ref =useRef(null);
    let JudulLogo = useRef(null);
    let imgRef = useRef(null);
    let leftMenu = useRef(null);
    let righMenuIMG1 = useRef(null);
    let righMenuIMG2 = useRef(null);
    let divRightMenu = useRef(null)
    let logo = useRef(null)
    let line10 = useRef(null);
    let line12 = useRef(null);
    let line13 = useRef(null);
    let line14 = useRef(null);
   
    const [show, setShow]= useState(false)
    const [loaded, setLoaded] = useState(false)
    useEffect(()=>{
        if(imagesLoaded){
            setTimeout(()=>{
                setLoaded(true)
            },100)
        }else{
            setLoaded(false)
        }
    },[imagesLoaded])
    console.log(imagesLoaded)
    const handleCLikc = ()=>{
        // if(!show){
        //     document.getElementById("container").removeAttribute("data-scroll-container")
        // }else{
        //     document.getElementById("container").setAttribute("data-scroll-container",true)
        // }
        setShow(!show)
        let cuy = document.getElementById("nav-icon1")
        cuy.classList.toggle('open')
        if(!show){
            gsap.to(leftMenu, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                translateY:"0%",
                delay:0.2,
               
            });
            
            gsap.to([line10,line12,line13, line14], { 
                duration: 1.5, 
                ease: "power2.out",
                rotate:0,
                opacity:1, 
                y: -200,
                delay:0.2,
                stagger: {
                    amount: 0.4
                }
            });

        }else{
            gsap.to(leftMenu, { 
                duration: 0.5, 
                ease: "Power3.easeNone",
                opacity:1, 
                translateY:"100%",
                delay:0.4,
               
            });
           
            gsap.to([line10,line12,line13, line14], { 
                duration: 1.5, 
                ease: "power2.out",
                rotate:30,
                opacity:0, 
                y: 200,
                delay:0.1,
                stagger: {
                    amount: 0.4
                }
            });
        }
    }
  
    
    
    useEffect(()=>{
        window.addEventListener('scroll',function(e){
            if(this.window.scrollY>10){
                this.document.getElementById('menuTop').style.background="rgba(0,0,0,1)"
            }else{
                this.document.getElementById('menuTop').style.background="rgba(0,0,0,0.5)"

            }
            // console.log(this.window.scrollY)
        })
       
    },[])
    return(
<>
         
        <div id="container" data-scroll-container ref={containerRef}  style={{width:'100vw', height:'100%', background:'#242424'}}>
            <LazyLoad data-scroll data-scroll-sticky data-scroll-target="#targetID" imagesLoaded={imagesLoaded}></LazyLoad>
            
            <div id="targetID" data-scroll-section style={{width:'100%', height:'100%'}}>
                
                <div  data-scroll data-scroll-sticky data-scroll-target="#targetID" style={{display:!show?'none':'flex',alignItems:'center',position:'fixed',zIndex:show?98:0,right:0, width:'100vw',height:'100vh', overflow:'hidden',display:'flex', justifyContent:'center',alignItems:'center',color:'white' }}>
                        
                       
                        <DivRightMenu ref={el=>(leftMenu =el)}  style={{paddingLeft:'20px',fontSize:'40px', fontWeight:800,height:'100%',position:'relative',transform:'translateY(100%)',background:'#242424'}}>
                        
                            {/* <div style={{overflow:'hidden', height:'50px', }} ><div className="menu-item" style={{cursor:'pointer',transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line10 = el)}>
                                <div><span style="--index:0;">H</span><span style="--index:1;">o</span><span style="--index:2;">m</span><span style="--index:3;">e</span></div>
                                <div style="position: absolute; left: 0px; top: 0px;"><span style="--index:0;">H</span><span style="--index:1;">o</span><span style="--index:2;">m</span><span style="--index:3;">e</span></div>
                            </div></div>
                            <div style={{overflow:'hidden', height:'50px', }} ><div className="menu-item" style={{cursor:'pointer',transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line12 = el)}>
                                <div><span style="--index:0;">A</span><span style="--index:1;">b</span><span style="--index:2;">o</span><span style="--index:3;">u</span><span style="--index:4;">t</span></div>
                                <div style="position: absolute; left: 0px; top: 0px;"><span style="--index:0;">A</span><span style="--index:1;">b</span><span style="--index:2;">o</span><span style="--index:3;">u</span><span style="--index:4;">t</span></div>
                            </div></div> */}
                            <div style={{overflow:'hidden', height:'50px', }} >
                                <Link style={{color:m.pathname=="/"?"#D5651B":"white"}}  to={"/"}>
                                <div className="menu-item" style={{width:'150px',cursor:'pointer',transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line10 = el)}>
                                    <div><span style={{"--index":0}}>H</span><span style={{"--index":1}}>o</span><span style={{"--index":2}}>m</span><span style={{"--index":3}}>e</span></div>
                                    <div style={{position:"absolute", left: "0px",top: "0px"}}><span style={{"--index":0}}>H</span><span style={{"--index":1}}>o</span><span style={{"--index":2}}>m</span><span style={{"--index":3}}>e</span></div>
                                </div>
                                </Link>
                            </div>
                            <div style={{overflow:'hidden', height:'50px', }} >
                                <Link style={{color:m.pathname=="/spec"?"#D5651B":"white"}} to={"/spec"}>
                                <div  className="menu-item" style={{width:'150px',cursor:'pointer',transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line12 = el)}>
                                    <div><span style={{"--index":0}}>S</span><span style={{"--index":1}}>p</span><span style={{"--index":2}}>e</span><span style={{"--index":3}}>c</span></div>
                                    <div style={{position:"absolute", left: "0px",top: "0px"}}><span style={{"--index":0}}>S</span><span style={{"--index":1}}>p</span><span style={{"--index":2}}>e</span><span style={{"--index":3}}>c</span></div>
                                    </div>
                                </Link>
                            </div>
                            <div style={{overflow:'hidden', height:'50px', }} >
                                <Link style={{color:m.pathname=="/contact"?"#D5651B":"white"}} to={"/contact"}>
                                <div className="menu-item" style={{width:'180px',cursor:'pointer',transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line13 = el)}>
                                    <div><span style={{"--index":0}}>C</span><span style={{"--index":1}}>o</span><span style={{"--index":2}}>n</span><span style={{"--index":3}}>t</span><span style={{"--index":4}}>a</span><span style={{"--index":5}}>c</span><span style={{"--index":6}}>t</span></div>
                                    <div style={{position:"absolute", left: "0px",top: "0px"}}><span style={{"--index":0}}>C</span><span style={{"--index":1}}>o</span><span style={{"--index":2}}>n</span><span style={{"--index":3}}>t</span><span style={{"--index":4}}>a</span><span style={{"--index":5}}>c</span><span style={{"--index":6}}>t</span></div>
                                </div>
                                </Link>
                            </div>
                            <div style={{overflow:'hidden', height:'50px', }} >
                                <Link style={{color:m.pathname=="/faq"?"#D5651B":"white"}} to={"/faq"}>
                                <div className="menu-item" style={{width:'180px',cursor:'pointer',transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line14 = el)}>
                                    <div><span style={{"--index":0}}>F</span><span style={{"--index":1}}>a</span><span style={{"--index":2}}>q</span></div>
                                    <div style={{position:"absolute", left: "0px",top: "0px"}}><span style={{"--index":0}}>F</span><span style={{"--index":1}}>a</span><span style={{"--index":2}}>q</span></div>
                                </div>
                                </Link>
                            </div>
                            {/* <div style={{overflow:'hidden', height:'50px', position:'relative'}} ><div className="menu-item" style={{transform:'rotate(30deg)',position:'relative', top:"200px"}} ref={el => (line14= el)}></div></div> */}


                           
                
                        </DivRightMenu>
                </div >
                {/* <DivIcon data-scroll data-scroll-sticky data-scroll-target="#targetID" style={{overflow:'hidden',flexDirection:'column',position:'fixed',zIndex:9, right:0, width:'40px',height:'80px',gap:'20px',display:'flex', justifyContent:'center',alignItems:'center',color:'white' }}>
                    <a href=" https://wa.me/085156400713?text=I'm%20interested%20in%20your%20car%20for%20sale">
                        <InlineIcon style={{fontSize:"30px",}} icon="logos:whatsapp-icon"/>
                    </a>
                    <a href="mailto:sales@waraney">
                        <InlineIcon  style={{fontSize:"30px",}} icon="fluent-emoji-flat:e-mail"/>

                    </a>
                    
                    
                   
                </DivIcon> */}
                <DivParentMenuTop  id="menuTop" style={{flexFlow:'none',position:'fixed',zIndex:99, left:0,top:0, height:'80px',display:'flex', alignItems:'center',gap:'20em',color:'white' }}>
                    
                    <DivLogoMenuTop onClick={()=>window.location.href="/"} style={{cursor:'pointer',height:'100%', display:'flex',alignItems:'center'}}>
                        <img src={Logo} style={{width:'60px'}} alt="logo" />
                        <div style={{marginLeft:'10px',display:'flex', gap:'5px'}}>
                            <div>Waraney </div>
                            <div>Coco</div>
                        </div>

                    </DivLogoMenuTop>
                    
                    <DivMenuTop style={{ gap:'20px', fontSize:'18px', cursor:'pointer', }}>
                        <DivHeaderMenu>
                            <Link style={{textDecoration:'none', color:m.pathname=="/"?"#D5651B":"white"}} to={"/"}>
                            Home
                            </Link>
                            <div style={{height:'0px',borderTop:'2px solid #D5651B'}}></div>
                        </DivHeaderMenu> 
                        <DivHeaderMenu>
                            <Link style={{textDecoration:'none', color:m.pathname=="/spec"?"#D5651B":"white"}} to={"/spec"}>
                            Spec
                            </Link>
                            <div style={{height:'0px',borderTop:'2px solid #D5651B'}}></div>
                        </DivHeaderMenu> 
                        <DivHeaderMenu>
                            <Link style={{textDecoration:'none', color:m.pathname=="/contact"?"#D5651B":"white"}} to={"/contact"}>
                            Contact
                            </Link>
                            <div style={{height:'0px',borderTop:'2px solid #D5651B'}}></div>
                        </DivHeaderMenu>
                        <DivHeaderMenu>
                            <Link style={{textDecoration:'none', color:m.pathname=="/faq"?"#D5651B":"white"}} to={"/faq"}>
                            Faq
                            </Link>
                            <div style={{height:'0px',borderTop:'2px solid #D5651B'}}></div>
                        </DivHeaderMenu>
                    </DivMenuTop>
                    <DivBurgerMenu onClick={handleCLikc}>
                        <div   id="nav-icon1">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </DivBurgerMenu>
                </DivParentMenuTop>
                
        
                        {/* <Home /> */}
                        <div ref={cuyRef}>
                       
                        <Content></Content>
                       
                        <DivParnetSales>

                        <DivIconContenerS >
                                    {/* <div style={{borderRadius:'30px',paddingBottom:'20px',boxShadow:"5px 5px 10px #0d0d0d, -5px -5px 10px #333333",display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
                                        <img width={"200px"} src={Flame} alt="flame"></img>
                                        <div>
                                            Long 
                                        </div>
                                        <div>burning duration</div>
                                    </div>
                                    <div style={{borderRadius:'30px',paddingBottom:'20px',boxShadow:"5px 5px 10px #0d0d0d, -5px -5px 10px #333333",display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
                                        <img width={"200px"} src={Flame2} alt="flame2"></img>
                                        <div>
                                            100% 
                                        </div>
                                        <div>high quality coconut</div>
                                    </div> */}
                                    <DivIConCUy style={{borderRadius:'30px',paddingBottom:'20px',boxShadow:"5px 5px 10px #0d0d0d, -5px -5px 10px #333333",display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'start'}}>
                                        <img style={{marginTop:'30px',filter:'grayscale(1)'}} width={"140px"} src={LowAshContent} alt="flame2"></img>
                                        <div  style={{marginTop:'10px',fontSize:'23px',marginBottom:'10px'}}>
                                            Low Ash Content 
                                        </div>
                                        
                                        <div style={{fontFamily:'Tisa_Sans_Pro_Light', textAlign:'center',textAlign:'center', padding:'0px 40px', width:'calc(100% - 80px)'}}>
                                        Heat logs produce very little ash. Their actual ash content equals around 1% from sawdust, and about 4.5% from bark
                                            
                                        </div>
                                    </DivIConCUy>
                                    <DivIConCUy style={{borderRadius:'30px',paddingBottom:'20px',boxShadow:"5px 5px 10px #0d0d0d, -5px -5px 10px #333333",display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'start'}}>
                                        <img width={"200px"} style={{filter:'grayscale(1)'}} src={Flame} alt="flame"></img>
                                        <div style={{fontSize:'23px',marginTop:'-5px',marginBottom:'10px'}}>
                                            Long burning duration
                                        </div>
                                        
                                        <div style={{fontFamily:'Tisa_Sans_Pro_Light', fontSize:'15px',textAlign:'center', padding:'0px 40px', width:'calc(100% - 80px)'}}>Briquettes are economical to use, they last longer than any firewood, they burn steadily, and they produce even, intense heat.</div>
                                    </DivIConCUy>
                                    <DivIConCUy style={{borderRadius:'30px',paddingBottom:'20px',boxShadow:"5px 5px 10px #0d0d0d, -5px -5px 10px #333333",display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'start'}}>
                                        <img width={"200px"} style={{filter:'grayscale(1)'}} src={Flame2} alt="flame2"></img>
                                        <div style={{fontSize:'23px',marginTop:'0px',marginBottom:'10px'}}>
                                            100% high quality coconut
                                        </div>
                                        <div style={{fontFamily:"Tisa_Sans_Pro_Light",fontSize:'15px',textAlign:'center', padding:'0px 40px', width:'calc(100% - 80px)'}}>
                                        Our products are manufactured using natural resources to ensure a superior quality of eco-friendly products and  100% from high quality handpicked coconut shell charcoal.
                                        </div>
                                    </DivIConCUy>
                                    
                                    <DivIConCUy style={{borderRadius:'30px',paddingBottom:'20px',boxShadow:"5px 5px 10px #0d0d0d, -5px -5px 10px #333333",display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'start'}}>
                                        <img style={{marginTop:'30px',filter:'grayscale(1)'}} width={"140px"} src={Ouderless} alt="flame2"></img>
                                        <div style={{fontSize:'23px',marginTop:'28px',marginBottom:'10px'}}>
                                            Odourless
                                        </div>
                                        <div style={{fontFamily:"Tisa_Sans_Pro_Light",fontSize:'15px',textAlign:'center', padding:'0px 40px', width:'calc(100% - 80px)'}}>
                                        Our products are manufactured using natural resources to ensure a superior quality of eco-friendly products and  100% from high quality handpicked coconut shell charcoal.
                                        </div>
                                        
                                    </DivIConCUy>
                                                              </DivIconContenerS>
                        </DivParnetSales>
                        </div>
                    
                    
               
                <Footer></Footer>
            </div>
            
           
        </div>
        </>
       
    )
}

export default  Home