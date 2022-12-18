import React,{ useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {DivHeaderMenu,DivContener,SA,DIVPAR,DivChildJudulKecil,DivPrice,DIvJudulKecil,DivParentMenuTop,DivBurgerMenu, DivMenuTop,DivHero,DivLogoMenuTop, DivHitam, DivJudul,DivIcon, DivPunya,DivContentJudul ,DivImg, DivLeftMenu, DivRightMenu} from "./styled";
// import HeroImg from './../../assets/img/hero1.webp'
import Content from "../Content/content";
import {ContentType,DivContentFontKeduaLS,DivContents} from './../Content/styled'

import {DivSales,DivParnetSales,DivButtonAsk,DivJudulSales, DivParentDetail} from './../spec/styled'
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


// import plugins if you need

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
    let line5 = useRef(null);
    let line6 = useRef(null);


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
            gsap.to(divRightMenu, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                translateY:"0%",
                delay:0.3,
               
            });
            
            gsap.to(righMenuIMG1, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                width:"100%",
                delay:0.4,
               
            });
            gsap.to(righMenuIMG2, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                translateX:"0%",
                delay:0.4,
               
            });
            gsap.to(  logo, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                translateY:"0%",
                delay:0.1,
               
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
            gsap.to(divRightMenu, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                translateY:"100%",
                delay:0.4,
               
            });
            gsap.to(righMenuIMG1, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                width:"0%",
                delay:0.4,
               
            });
            gsap.to(righMenuIMG2, { 
                duration: 0.5, 
                ease: "power2.out",
                opacity:1, 
                translateX:"100%",
                delay:0.3,
               
            });
            gsap.to(  logo, { 
                duration: 0.4, 
                ease: "power2.out",
                 
                translateY:"40%",
                delay:0.1,
               
            });
            gsap.to(  logo, { 
                duration: 0.4, 
                ease: "power2.out",
                opacity:0, 
               
                delay:0.3,
               
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
        if(imagesLoaded){
            
            gsap.to([line1,line2,line3, line4, line5], { 
                duration: 1.5, 
                ease: "power2.out",
                rotate:0,
                opacity:1, 
                y: -100,
                delay:0.9,
                stagger: {
                    amount: 0.5
                }
            });
            gsap.to([ line6], { 
                duration: 1.5, 
                ease: "power2.out",
                
                opacity:1, 
                delay:0.9,
                
                stagger: {
                    amount: 0.5
                }
            });
            gsap.to(JudulLogo, { 
                duration: 1.9, 
                ease: "power2.out",
                opacity:1, 
                delay:0.9,
                stagger: {
                    amount: 0.1
                }
            });
            gsap.to(imgRef, { 
                duration: 0.4, 
                ease: "Power3.easeNone",
                width:340, 
                
                delay:0.5,
                stagger: {
                    amount: 0.1
                }
            });
            gsap.to(Image1Ref,{
                duration: 1, 
                ease: "Power3.easeNone",
                opacity:1, 
                
                delay:1,
                
            })
            gsap.to(turbulance,  1, 
                { duration: 0.4, ease: "Power3.easeNone",delay:0.5,  attr: { baseFrequency: 0 } }
                );
    
            gsap.to(DivParentHomeRef, { 
                duration: 0.4, 
                ease: "Power3.easeNone",
                width:"100vw", 
                delay:0.1,
                stagger: {
                    amount: 0.1
                }
            });
        }
    },[imagesLoaded])
    
    const handleOver = ()=>{
        
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
         
        <div id="container"   ref={containerRef}  style={{width:'100vw', height:'100%'}}>
            <LazyLoad data-scroll data-scroll-sticky data-scroll-target="#targetID" imagesLoaded={imagesLoaded}></LazyLoad>
            
            <div id="targetID"  data-scroll-section style={{width:'100%', height:'100%'}}>
                
                <div  data-scroll data-scroll-sticky data-scroll-target="#targetID" style={{display:!show?'none':'flex',alignItems:'center',position:'fixed',zIndex:show?98:0,right:0, width:'100vw',height:'100vh', overflow:'hidden',display:'flex', justifyContent:'center',alignItems:'center',color:'white' }}>
                        
                        <DivLeftMenu style={{width:'50%', height:'100%'}}>
                            <div style={{display:'flex', flexDirection:"column",width:'100%', height:'100%'}}>
                                <div ref={el=>(righMenuIMG1 =el)} style={{overflow:'hidden',width:'0%', height:'60%', }}>
                                   
                                    <img alt="hero"  src={IMG2} style={{maxHeight:'100%', width:'800px'}} height={"100%"}></img>
                                </div>
                                <div style={{height:'40%', width:'100%', display:'flex'}}>
                                    <div style={{width:'60%', height:'100%', overflow:'hidden',}}>
                                        
                                            <img alt="hero2" ref={el=>(righMenuIMG2 =el)}  src={IMG3} style={{transform:"translateX(100%)", }} height="100%" width={"500px"}></img>
                                        

                                    </div>
                                    <div ref={el=>(divRightMenu =el)} style={{display:'flex',justifyContent:'center', alignItems:'center',transform:'translateY(100%)',width:'40%', height:'100%',background:"black"}}>
                                        <img alt="hero3" ref={el=>(logo =el)}  src={Logo}  style={{width:'100%',transform:"translateY(30%)", opacity:0}}></img>
                                        
                                        {/* <div ref={el=>(logo =el)} style={{color:'white'}}>WARANEY COCO</div> */}
                                    </div>
                                </div>

                            </div>
                        </DivLeftMenu>
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
                <DivParentMenuTop id="menuTop" style={{flexFlow:'none',position:'fixed',zIndex:99, left:0,top:0, height:'80px',display:'flex', alignItems:'center',gap:'20em',color:'white' }}>
                    
                    <DivLogoMenuTop onClick={()=>window.location.href="/"} style={{cursor:'pointer',height:'100%', display:'flex', alignItems:'center'}}>
                        <img  src={Logo} style={{width:'60px'}} alt="logo" />
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
                        <div  ref={cuyRef}>
                        <DivHero   ref={el=>(DivParentHomeRef = el)}>
                            {/* <img src={HeroImg} alt="hero"></img> */}
                            <DivHitam />

                            <DivImg ref={el=>(imgRef=el)} style={{display:'none'}}  data-scroll data-scroll-speed="3" >
                                <svg   >
                                    <filter id="filter1">
                                        <feTurbulence ref={el=>(turbulance= el)}  type="turbulence" baseFrequency="0.9 0.7" numOctaves="5" seed="8" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="noise">
                                        
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="noise"  scale="10" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" />

                                    </filter>
                                
                                </svg>
                                    <img alt="hero6" ref={el=>(Image1Ref=el)} src={Image1} style={{opacity:0}} width="100%" height="100%" filter="url(#filter1)"/>
                            </DivImg>
                            <DivPunya style={{opacity:0,}} ref={el=>(JudulLogo = el)} >
                            
                                {/* WARANEY COCO */}

                            
                            </DivPunya>
                            <DivJudul  data-scroll data-scroll-speed="3" data-scroll-position="top" >
                                <div ref={el => (line1 = el)} style={{width:'100%',overflow:'hidden',opacity:0,transform:'rotate(5deg)',transition:'0.3s',  textAlign:'center',position:'relative', top:'100px'}}>The Indonesian Premium  </div>
                                <div ref={el => (line2 = el)} style={{width:'100%',overflow:'hidden',opacity:0,transform:'rotate(5deg)',transition:'0.3s',  textAlign:'center',position:'relative', top:'100px'}}>Coconut Charcoal Briquette</div>
                                <div ref={el => (line3 = el)} style={{overflow:'hidden',opacity:0,transform:'rotate(5deg)',transition:'0.3s',position:'relative', top:'100px'}}></div>
                                <DIvJudulKecil style={{display:'flex',height:'200px',justifyContent:'center', alignItems:'center',}}>
                                    <DivChildJudulKecil style={{display:'flex',justifyContent:'center', position:'relative', height:'100%'}}>
                                        <div ref={el => (line4 = el)} style={{marginTop:'100px',opacity:0,width:'57%',display:'flex',justifyContent:'end'  }}>
                                            <SA style={{}}>
                                                <li>Odorless</li>
                                                <li>Long-Last burning time</li>
                                                <li>99% Free from Fractures </li>
                                                <li>Smokeless</li>
                                            </SA>

                                        </div>
                                        <div ref={el => (line5 = el)} style={{marginTop:'100px',opacity:0,width:'50%', display:'flex', }}>
                                            <ul style={{}}>
                                                <li>High Burning Heat</li>
                                                <li>Low Ash Content</li>
                                                <li>Fast Ignition Time</li>
                                            </ul>
                                            
                                            
                                        </div>
                                    </DivChildJudulKecil>
                                    {/* <div  ref={el => (line4 = el)} style={{overflow:'hidden',opacity:0,height:'20px',transform:'rotate(5deg)',transition:'0.3s',position:'relative', marginTop:'30px',top:'130px',  textAlign:'center'}}>Odorless</div>
                                    <div  ref={el => (line5 = el)} style={{overflow:'hidden',opacity:0,height:'20px',transform:'rotate(5deg)',transition:'0.3s',position:'relative', marginTop:'30px',top:'110px',  textAlign:'center'}}>Long-Last burning time</div>
                                    
                                    <div   style={{overflow:'hidden',opacity:0,height:'40px',transform:'rotate(5deg)',transition:'0.3s',position:'relative', marginTop:'0px',top:'100px',  textAlign:'center', lineHeight:'20px'}}>  Smokeless High Burning Heat Low Ash Content Fast Ignition Time.</div> */}
                                </DIvJudulKecil>
                                <DIVPAR style={{width:'100%', position:'relative'}}>
                                    <DivPrice ref={el => (line6 = el)} onClick={()=>{window.location.href="https://wa.me/+628118951809?text=Hi, I want more information about your product price"}} style={{fontFamily:"ArcaMajora3-Bold",fontWeight:'500'}}>
                                        <div style={{textAlign:'center',borderRadius:'5px', width:'210px',background:'rgba(255,0,0,0.5)',border:'none',cursor:'pointer', padding:"5px 5px"}}>
                                            Get Charcoal Price Now

                                        </div>
                                    </DivPrice>

                                </DIVPAR>
                            </DivJudul>
                        </DivHero>
                        <Content></Content>
                        
                        </div>
                    
                    
               
                <Footer></Footer>
            </div>
            
           
        </div>
        </>
       
    )
}

export default  Home